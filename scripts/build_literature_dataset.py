from __future__ import annotations

import json
import re
import shutil
import unicodedata
from collections import Counter, defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
WORKSPACE_ROOT = ROOT.parent
CONTENT_ROOT = ROOT / "content-source"
LEGACY_REVIEW_SOURCE = WORKSPACE_ROOT / "01_文献综述" / "扩展文献综述.md"
LEGACY_AUDIT_SOURCE = WORKSPACE_ROOT / "paper_ipm_reference_audit.md"
LEGACY_REFERENCE_ROOT = WORKSPACE_ROOT / "05_参考文献"
REVIEW_SOURCE = CONTENT_ROOT / "review" / "扩展文献综述.md"
AUDIT_SOURCE = CONTENT_ROOT / "review" / "paper_ipm_reference_audit.md"
REFERENCE_ROOT = CONTENT_ROOT / "references"
REFERENCE_PDF_DIR = REFERENCE_ROOT / "pdfs"
REFERENCE_MANIFEST = REFERENCE_ROOT / "verification_manifest.json"
PUBLIC_REFERENCE_DIR = ROOT / "paper-interactive" / "public" / "references"
OUTPUT_PATH = ROOT / "paper-interactive" / "src" / "data" / "literatureReview.ts"

STREAMS = {
    "section_2": {"key": "constructs", "label": "回音室与过滤气泡", "accent": "#d4b27a"},
    "section_3": {"key": "platforms", "label": "平台实验与因果证据", "accent": "#c97052"},
    "section_4": {"key": "topology", "label": "高阶网络与方向算子", "accent": "#4ea48f"},
    "section_5": {"key": "fairness", "label": "曝光公平与多侧推荐", "accent": "#7a8df0"},
    "section_6": {"key": "evaluation", "label": "离策略评估与数据基础设施", "accent": "#5f8aa6"},
    "section_7": {"key": "gaps", "label": "综合评述与研究空白", "accent": "#9f7653"},
    "section_8": {"key": "conclusion", "label": "结论与写作约束", "accent": "#6f7c89"},
}

CURATED_IDS = [
    "bakshy2015",
    "cinelli2021",
    "gonzalez-bailon2023",
    "guess2023",
    "nyhan2023",
    "hosseinmardi2024",
    "diaz2024",
    "jiang2011",
    "gong2024",
    "wu2022",
    "eide2021",
    "raji2020",
]


def slugify(text: str) -> str:
    normalized = unicodedata.normalize("NFKD", text)
    ascii_text = normalized.encode("ascii", "ignore").decode("ascii")
    slug = re.sub(r"[^a-z0-9]+", "-", ascii_text.lower()).strip("-")
    return slug or "section"


def normalise_spaces(text: str) -> str:
    return re.sub(r"\s+", " ", text.replace("\u3000", " ")).strip()


def split_lines(text: str) -> list[str]:
    return [line.rstrip() for line in text.splitlines()]


def parse_sections(markdown: str) -> list[dict]:
    lines = split_lines(markdown)
    appendix_index = next(index for index, line in enumerate(lines) if line.startswith("## 附录"))
    sections: list[dict] = []
    current_h2: dict | None = None
    current_h3: dict | None = None

    def flush_h3() -> None:
        nonlocal current_h3, current_h2
        if current_h2 is not None and current_h3 is not None:
            current_h3["body"] = "\n".join(current_h3["body"]).strip()
            current_h2["subsections"].append(current_h3)
            current_h3 = None

    def flush_h2() -> None:
        nonlocal current_h2
        if current_h2 is not None:
            flush_h3()
            current_h2["body"] = "\n".join(current_h2["body"]).strip()
            sections.append(current_h2)
            current_h2 = None

    for line in lines[:appendix_index]:
        if line.startswith("## "):
            flush_h2()
            title = line[3:].strip()
            match = re.match(r"(\d+)\.\s*(.+)", title)
            number = int(match.group(1)) if match else 0
            current_h2 = {
                "number": number,
                "id": f"section_{number}",
                "title": match.group(2).strip() if match else title,
                "slug": f"section-{number}",
                "body": [],
                "subsections": [],
            }
            continue
        if line.startswith("### "):
            flush_h3()
            title = line[4:].strip()
            current_h3 = {
                "title": title,
                "slug": slugify(title),
                "body": [],
            }
            continue
        if current_h3 is not None:
            current_h3["body"].append(line)
        elif current_h2 is not None:
            current_h2["body"].append(line)

    flush_h2()
    return sections


def first_paragraph(text: str) -> str:
    paragraphs = [normalise_spaces(item) for item in text.split("\n\n") if normalise_spaces(item)]
    for paragraph in paragraphs:
        if not paragraph.startswith("---") and not paragraph.startswith("|"):
            return paragraph
    return ""


def bullet_lines(text: str) -> list[str]:
    items = []
    for line in text.splitlines():
        stripped = line.strip()
        if stripped.startswith("- "):
            items.append(stripped[2:].strip())
        elif re.match(r"\d+\.\s", stripped):
            items.append(re.sub(r"^\d+\.\s*", "", stripped))
    return items


def guess_title_from_citation(citation: str) -> str:
    starred = re.findall(r"\*([^*]+)\*", citation)
    if ". In: *" in citation:
        prefix = citation.split(". In: *", 1)[0]
        return normalise_spaces(prefix.rsplit(". ", 1)[-1])
    if ". arXiv:" in citation:
        prefix = citation.split(". arXiv:", 1)[0]
        return normalise_spaces(prefix.rsplit(". ", 1)[-1])
    if "? *" in citation:
        prefix = citation.split("? *", 1)[0]
        return f"{normalise_spaces(prefix.rsplit('. ', 1)[-1])}?"
    if "! *" in citation:
        prefix = citation.split("! *", 1)[0]
        return f"{normalise_spaces(prefix.rsplit('. ', 1)[-1])}!"
    if ". *" in citation:
        prefix = citation.split(". *", 1)[0]
        candidate = normalise_spaces(prefix.rsplit(". ", 1)[-1])
        if len(candidate) <= 6 and starred:
            return normalise_spaces(starred[0])
        return candidate
    if starred:
        return normalise_spaces(starred[0])
    parts = citation.split(". ")
    return normalise_spaces(parts[1]) if len(parts) > 1 else citation


def parse_references(markdown: str) -> list[dict]:
    reference_lines = []
    capture = False
    for line in split_lines(markdown):
        if line.startswith("## 附录：参考文献"):
            capture = True
            continue
        if capture and re.match(r"^\[\d+\]\s+", line):
            reference_lines.append(line)

    references = []
    used_ids: Counter[str] = Counter()
    for raw_line in reference_lines:
        match = re.match(r"^\[(\d+)\]\s+(.*)$", raw_line)
        if not match:
            continue
        index = int(match.group(1))
        citation = match.group(2).strip()
        year_candidates = re.findall(r"(?<!\d)((?:19|20)\d{2})(?!\d)", citation)
        year = int(year_candidates[-1]) if year_candidates else 0
        title_guess = guess_title_from_citation(citation)

        author_block = citation.split(". ", 1)[0]
        authors = [normalise_spaces(item) for item in author_block.split(",") if normalise_spaces(item)]
        first_author = authors[0] if authors else f"ref{index}"
        surname_tokens = re.findall(r"[A-Za-zÀ-ÿ'’\-]+", first_author)
        surname = surname_tokens[0] if surname_tokens else f"ref{index}"
        ref_id = f"{slugify(surname)}{year or index}"
        used_ids[ref_id] += 1
        if used_ids[ref_id] > 1:
            title_words = [word for word in slugify(title_guess).split("-") if word]
            suffix = "-".join(title_words[:2]) or f"ref-{index}"
            ref_id = f"{ref_id}-{suffix}"
        doi_match = re.search(r"doi:\s*(10\.\d{4,9}/[-._;()/:a-z0-9]+)", citation, flags=re.IGNORECASE)
        arxiv_match = re.search(r"arXiv:([0-9.]+)", citation, flags=re.IGNORECASE)

        references.append(
            {
                "index": index,
                "id": ref_id,
                "citation": citation,
                "title_guess": title_guess,
                "raw_authors": authors,
                "first_author_surname": surname,
                "year": year,
                "doi": doi_match.group(1) if doi_match else None,
                "arxiv_id": arxiv_match.group(1) if arxiv_match else None,
            }
        )
    return references


def parse_audit(markdown: str) -> dict[str, dict]:
    references: dict[str, dict] = {}
    current_section = ""
    for line in split_lines(markdown):
        if line.startswith("## "):
            current_section = line[3:].strip()
        if not line.startswith("|") or line.startswith("| ----"):
            continue
        columns = [normalise_spaces(item) for item in line.strip("|").split("|")]
        if len(columns) < 3 or columns[0] in {"引用", "文献", "章节"}:
            continue
        reference_label = columns[0]
        year_match = re.search(r"(19|20)\d{2}", reference_label)
        surname = reference_label.split("(")[0].split()[-1].split("&")[0].split("＋")[0].split("+")[0]
        key = f"{slugify(surname)}{year_match.group(0) if year_match else ''}"
        references[key] = {
            "section": current_section,
            "columns": columns,
        }
    return references


def load_verification_manifest() -> dict[str, dict]:
    if not REFERENCE_MANIFEST.exists():
        return {}
    with REFERENCE_MANIFEST.open("r", encoding="utf-8") as handle:
        manifest = json.load(handle)
    return {item["id"]: item for item in manifest.get("references", []) if isinstance(item, dict) and item.get("id")}


def match_patterns(reference: dict) -> list[re.Pattern]:
    year = reference["year"]
    surname = re.escape(reference["first_author_surname"])
    patterns = [
        re.compile(rf"{surname}(?:\s+et al\.)?\s*[\(（]{year}[\)）]", re.IGNORECASE),
        re.compile(rf"{surname}(?:\s*等)?[\(（]{year}[\)）]", re.IGNORECASE),
    ]
    return patterns


def extract_mentions(sections: list[dict], references: list[dict]) -> tuple[dict[str, list[dict]], list[dict]]:
    mentions: dict[str, list[dict]] = defaultdict(list)
    edge_counter: Counter[tuple[str, str]] = Counter()
    ref_patterns = {reference["id"]: match_patterns(reference) for reference in references}

    for section in sections:
        text_blocks = [
            {
                "title": section["title"],
                "text": section["body"],
            },
            *[
                {
                    "title": subsection["title"],
                    "text": subsection["body"],
                }
                for subsection in section["subsections"]
            ],
        ]

        for block in text_blocks:
            block_text = block["text"]
            mentioned_ids: list[str] = []
            for reference in references:
                found = None
                for pattern in ref_patterns[reference["id"]]:
                    match = pattern.search(block_text)
                    if match:
                        found = match
                        break
                if not found:
                    continue
                snippet = normalise_spaces(block_text[max(0, found.start() - 90): found.end() + 140])
                mentions[reference["id"]].append(
                    {
                        "sectionId": section["id"],
                        "sectionTitle": block["title"],
                        "streamKey": STREAMS.get(section["id"], {}).get("key", "overview"),
                        "snippet": snippet,
                    }
                )
                mentioned_ids.append(reference["id"])

            unique_ids = []
            seen = set()
            for reference_id in mentioned_ids:
                if reference_id not in seen:
                    unique_ids.append(reference_id)
                    seen.add(reference_id)
            for left, right in zip(unique_ids, unique_ids[1:]):
                ordered = tuple(sorted((left, right)))
                edge_counter[ordered] += 1

    edges = [
        {"source": source, "target": target, "weight": weight}
        for (source, target), weight in edge_counter.items()
        if weight >= 1
    ]
    return mentions, edges


def reference_title(reference: dict, verification: dict | None) -> str:
    if verification and verification.get("title"):
        return verification["title"]
    return reference["title_guess"]


def reference_venue(reference: dict, verification: dict | None) -> str:
    if verification and verification.get("venue"):
        return verification["venue"]
    citation = reference["citation"]
    starred = re.findall(r"\*([^*]+)\*", citation)
    if len(starred) >= 2:
        return normalise_spaces(starred[1])
    if len(starred) == 1:
        return normalise_spaces(starred[0])
    return ""


def reference_authors(reference: dict, verification: dict | None) -> list[str]:
    if verification and verification.get("authors"):
        return verification["authors"]
    return reference["raw_authors"]


def build_dataset() -> dict:
    review_source = REVIEW_SOURCE if REVIEW_SOURCE.exists() else LEGACY_REVIEW_SOURCE
    audit_source = AUDIT_SOURCE if AUDIT_SOURCE.exists() else LEGACY_AUDIT_SOURCE
    markdown = review_source.read_text(encoding="utf-8")
    audit = audit_source.read_text(encoding="utf-8") if audit_source.exists() else ""
    sections = parse_sections(markdown)
    references = parse_references(markdown)
    audit_map = parse_audit(audit) if audit else {}
    verification_map = load_verification_manifest()
    mentions, relation_edges = extract_mentions(sections, references)

    public_pdf_dir = PUBLIC_REFERENCE_DIR / "pdfs"
    if PUBLIC_REFERENCE_DIR.exists():
        shutil.rmtree(PUBLIC_REFERENCE_DIR)
    public_pdf_dir.mkdir(parents=True, exist_ok=True)

    pdf_source_dir = REFERENCE_PDF_DIR if REFERENCE_PDF_DIR.exists() else LEGACY_REFERENCE_ROOT / "pdfs"
    if pdf_source_dir.exists():
        for pdf_file in pdf_source_dir.glob("*.pdf"):
            shutil.copy2(pdf_file, public_pdf_dir / pdf_file.name)

    section_cards = []
    for section in sections:
        if section["number"] < 2 or section["number"] > 8:
            continue
        stream = STREAMS.get(section["id"], {"key": "overview", "label": "综述", "accent": "#9f7653"})
        section_cards.append(
            {
                "id": section["id"],
                "slug": section["slug"],
                "number": section["number"],
                "title": section["title"],
                "streamKey": stream["key"],
                "streamLabel": stream["label"],
                "accent": stream["accent"],
                "summary": first_paragraph(section["body"]) or (first_paragraph(section["subsections"][0]["body"]) if section["subsections"] else ""),
                "subsections": [
                    {
                        "title": subsection["title"],
                        "slug": subsection["slug"],
                        "summary": first_paragraph(subsection["body"]),
                        "points": bullet_lines(subsection["body"]),
                    }
                    for subsection in section["subsections"]
                ],
                "points": bullet_lines(section["body"]),
            }
        )

    reference_entries = []
    for reference in references:
        verification = verification_map.get(reference["id"])
        audit_entry = audit_map.get(reference["id"], {})
        mention_items = mentions.get(reference["id"], [])
        stream_counts = Counter(item["streamKey"] for item in mention_items)
        stream_keys = [item[0] for item in stream_counts.most_common()] or ["constructs"]
        primary_stream_label = next((stream["label"] for stream in STREAMS.values() if stream["key"] == stream_keys[0]), "综述")

        pdf_filename = verification.get("pdf_filename") if verification else None
        local_pdf = f"./references/pdfs/{pdf_filename}" if pdf_filename and (public_pdf_dir / pdf_filename).exists() else None

        reference_entries.append(
            {
                "id": reference["id"],
                "index": reference["index"],
                "title": reference_title(reference, verification),
                "authors": reference_authors(reference, verification),
                "year": verification.get("year", reference["year"]) if verification else reference["year"],
                "venue": reference_venue(reference, verification),
                "citation": reference["citation"],
                "doi": verification.get("doi", reference["doi"]) if verification else reference["doi"],
                "arxivId": verification.get("arxiv_id", reference["arxiv_id"]) if verification else reference["arxiv_id"],
                "streamKeys": stream_keys,
                "streamLabel": primary_stream_label,
                "mentionCount": len(mention_items),
                "mentions": mention_items,
                "auditSection": audit_entry.get("section"),
                "auditColumns": audit_entry.get("columns", []),
                "verificationStatus": verification.get("verification_status", "unverified") if verification else "unverified",
                "downloadStatus": verification.get("download_status", "not_checked") if verification else "not_checked",
                "externalUrl": verification.get("landing_page_url") if verification else None,
                "localPdf": local_pdf,
                "pdfFilename": pdf_filename if local_pdf else None,
                "isCurated": reference["id"] in CURATED_IDS,
            }
        )

    reference_entries.sort(key=lambda item: (item["year"], item["index"]))

    stream_counts = Counter()
    for reference in reference_entries:
        for stream in reference["streamKeys"]:
            stream_counts[stream] += 1

    verified_count = sum(1 for item in reference_entries if item["verificationStatus"] == "verified")
    downloaded_count = sum(1 for item in reference_entries if item["localPdf"])

    curated_entries = [item for item in reference_entries if item["id"] in CURATED_IDS]
    curated_entries.sort(key=lambda item: CURATED_IDS.index(item["id"]))

    return {
        "meta": {
            "sourcePath": review_source.relative_to(ROOT).as_posix(),
            "generatedFrom": "build_literature_dataset.py",
            "referenceCount": len(reference_entries),
            "sectionCount": len(section_cards),
            "yearRange": {
                "min": min(item["year"] for item in reference_entries if item["year"]),
                "max": max(item["year"] for item in reference_entries if item["year"]),
            },
            "verifiedCount": verified_count,
            "downloadedCount": downloaded_count,
        },
        "streams": [
            {"key": value["key"], "label": value["label"], "accent": value["accent"], "count": stream_counts.get(value["key"], 0)}
            for value in STREAMS.values()
            if value["key"] not in {"gaps", "conclusion"}
        ],
        "sections": section_cards,
        "references": reference_entries,
        "curatedReferences": curated_entries,
        "relationEdges": relation_edges,
        "readingPath": [
            "先看综述骨架与研究状态，确认当前论文重构处于什么阶段。",
            "再看章节导航与时间线，把 5 条文献主线的时间顺序理顺。",
            "最后进入关系图、对读器和参考文献库，逐条定位关键论文与下载状态。",
        ],
    }


def to_typescript(data: dict) -> str:
    payload = json.dumps(data, ensure_ascii=False, indent=2)
    return f"export const literatureReviewDataset = {payload} as const\n"


def main() -> None:
    REFERENCE_ROOT.mkdir(parents=True, exist_ok=True)
    REFERENCE_PDF_DIR.mkdir(parents=True, exist_ok=True)
    dataset = build_dataset()
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(to_typescript(dataset), encoding="utf-8")
    print(f"[OK] Literature dataset -> {OUTPUT_PATH}")
    print(f"[OK] Public references -> {PUBLIC_REFERENCE_DIR}")


if __name__ == "__main__":
    main()
