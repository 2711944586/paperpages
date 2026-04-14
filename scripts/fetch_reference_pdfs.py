from __future__ import annotations

import json
import re
import time
import unicodedata
import urllib.parse
import urllib.request
from difflib import SequenceMatcher
from pathlib import Path

from build_literature_dataset import (
    REFERENCE_MANIFEST,
    REFERENCE_PDF_DIR,
    REVIEW_SOURCE,
    guess_title_from_citation,
    parse_references,
)


USER_AGENT = "paperpages-reference-sync/1.0 (+https://github.com/2711944586/paperpages)"
DOI_PATTERN = re.compile(r"(10\.\d{4,9}/[-._;()/:a-z0-9]+)", flags=re.IGNORECASE)
PDF_HINTS = (".pdf", "/download", "bitstream", "viewcontent.cgi", "/pdf/")
MANUAL_OVERRIDES = {
    "sunstein2001": {
        "title": "Republic.com",
        "authors": ["Cass R. Sunstein"],
        "year": 2001,
        "venue": "Princeton University Press",
        "verification_status": "verified",
    },
    "sunstein2017": {
        "title": "#Republic: Divided Democracy in the Age of Social Media",
        "authors": ["Cass R. Sunstein"],
        "year": 2017,
        "venue": "Princeton University Press",
        "verification_status": "verified",
    },
    "pariser2011": {
        "title": "The Filter Bubble: What the Internet Is Hiding from You",
        "authors": ["Eli Pariser"],
        "year": 2011,
        "venue": "Penguin Press",
        "verification_status": "verified",
    },
    "nardi1999": {
        "title": "Information Ecologies: Using Technology with Heart",
        "authors": ["Bonnie A. Nardi", "Vicki L. O'Day"],
        "year": 1999,
        "venue": "MIT Press",
        "verification_status": "verified",
    },
    "diaz2024": {
        "title": "Recommendation as Information Allocation",
        "authors": ["Fernando Diaz"],
        "year": 2024,
        "venue": "Foundations and Trends in Information Retrieval",
        "verification_status": "verified",
    },
    "mansoury2023": {
        "title": "Fairness of Exposure in Dynamic Recommendation",
        "authors": ["Mostafa Mansoury", "Bamshad Mobasher"],
        "year": 2023,
        "venue": "arXiv",
        "verification_status": "verified",
    },
    "gao2022-kuairec-a": {
        "title": "KuaiRec: A Fully-observed Dataset and Insights for Evaluating Recommender Systems",
        "authors": ["Chongming Gao", "Xiting Wang", "Yong Li"],
        "year": 2022,
        "venue": "CIKM",
        "verification_status": "verified",
    },
    "perez2020": {
        "title": "ContentWise Impressions: An Industrial Dataset with Impressions Included",
        "authors": [
            "Felipe B. Pérez Maurera",
            "Maurizio Ferrari Dacrema",
            "Lorenzo Saule",
            "Mario Scriminaci",
            "Paolo Cremonesi",
        ],
        "year": 2020,
        "venue": "Proceedings of the 29th ACM International Conference on Information and Knowledge Management",
        "doi": "10.1145/3340531.3412774",
        "landing_page_url": "https://re.public.polimi.it/handle/11311/1164456",
        "verification_status": "verified",
    },
    "raji2020": {
        "title": "Closing the AI Accountability Gap: Defining an End-to-End Framework for Internal Algorithmic Auditing",
        "authors": ["Inioluwa Deborah Raji", "Andrew Smart", "Rebecca N. White", "Margaret Mitchell", "Timnit Gebru"],
        "year": 2020,
        "venue": "FAccT",
        "verification_status": "verified",
    },
    "sandvig2014": {
        "title": "Auditing Algorithms: Research Methods for Detecting Discrimination on Internet Platforms",
        "authors": ["Christian Sandvig", "Kevin Hamilton", "Karrie Karahalios", "Cedric Langbort"],
        "year": 2014,
        "venue": "International Communication Association",
        "verification_status": "verified",
    },
    "saito2021": {
        "title": "Open Bandit Dataset and Pipeline: Towards Realistic and Reproducible Off-Policy Evaluation",
        "authors": ["Yuta Saito", "Shunsuke Aihara", "Megumi Matsutani", "Yusuke Narita"],
        "year": 2021,
        "venue": "NeurIPS Datasets and Benchmarks",
        "verification_status": "verified",
    },
    "swaminathan2017": {
        "title": "Off-Policy Evaluation for Slate Recommendation",
        "authors": ["Adith Swaminathan", "Akshay Krishnamurthy", "Aman Agarwal", "Miroslav Dudík", "John Langford"],
        "year": 2017,
        "venue": "NeurIPS",
        "verification_status": "verified",
    },
    "biega2018": {
        "title": "Equity of Attention: Amortizing Individual Fairness in Rankings",
        "authors": ["Asia J. Biega", "Krishna P. Gummadi", "Gerhard Weikum"],
        "year": 2018,
        "venue": "SIGIR",
        "doi": "10.1145/3209978.3210063",
        "arxiv_id": "1805.01788",
        "landing_page_url": "https://arxiv.org/abs/1805.01788",
        "pdf_url": "https://arxiv.org/pdf/1805.01788.pdf",
        "verification_status": "verified",
    },
    "swaminathan2015": {
        "title": "Counterfactual Risk Minimization: Learning from Logged Bandit Feedback",
        "authors": ["Adith Swaminathan", "Thorsten Joachims"],
        "year": 2015,
        "venue": "ICML",
        "landing_page_url": "https://proceedings.mlr.press/v37/swaminathan15.html",
        "pdf_url": "https://proceedings.mlr.press/v37/swaminathan15.pdf",
        "verification_status": "verified",
    },
    "buchholz2022": {
        "title": "Off-policy evaluation for learning-to-rank via interpolating the item-position model and the position-based model",
        "authors": ["Alexander Buchholz", "Ben London", "Giuseppe Di Benedetto", "Thorsten Joachims"],
        "year": 2022,
        "venue": "CoRR",
        "arxiv_id": "2210.09512",
        "landing_page_url": "https://arxiv.org/abs/2210.09512",
        "pdf_url": "https://arxiv.org/pdf/2210.09512.pdf",
        "verification_status": "verified",
    },
    "arguedas2022": {
        "title": "Echo chambers, filter bubbles, and polarisation: A literature review",
        "authors": ["Ana Rita Arguedas", "Craig T. Robertson", "Richard Fletcher", "Rasmus Kleis Nielsen"],
        "year": 2022,
        "venue": "Reuters Institute, University of Oxford",
        "landing_page_url": "https://reutersinstitute.politics.ox.ac.uk/sites/default/files/2022-01/Echo_Chambers_Filter_Bubbles_and_Polarisation_A_Literature_Review.pdf",
        "pdf_url": "https://reutersinstitute.politics.ox.ac.uk/sites/default/files/2022-01/Echo_Chambers_Filter_Bubbles_and_Polarisation_A_Literature_Review.pdf",
        "verification_status": "verified",
    },
    "zehlike2017": {
        "title": "FA*IR: A Fair Top-k Ranking Algorithm",
        "authors": ["Meike Zehlike", "Francesco Bonchi", "Carlos Castillo", "Sara Hajian", "Mohamed Megahed", "Ricardo Baeza-Yates"],
        "year": 2017,
        "venue": "CIKM",
        "doi": "10.1145/3132847.3132938",
        "landing_page_url": "https://repositori.upf.edu/items/c151e269-3d8b-4018-b4c3-e0b4587d2c5f",
        "pdf_url": "https://repositori.upf.edu/bitstreams/1e3efa3f-b7ca-40bb-9bdd-eba32a02a6d7/download",
        "verification_status": "verified",
    },
    "saito2022": {
        "title": "Off-policy evaluation for large action spaces via embeddings",
        "authors": ["Yuta Saito", "Thorsten Joachims"],
        "year": 2022,
        "venue": "ICML",
        "arxiv_id": "2202.06317",
        "landing_page_url": "https://arxiv.org/abs/2202.06317",
        "pdf_url": "https://arxiv.org/pdf/2202.06317.pdf",
        "verification_status": "verified",
    },
}


def fetch_json(url: str) -> dict | None:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=30) as response:
        return json.loads(response.read().decode("utf-8"))


def fetch_bytes(url: str) -> bytes:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=60) as response:
        return response.read()


def load_existing_manifest() -> dict[str, dict]:
    if not REFERENCE_MANIFEST.exists():
        return {}
    payload = json.loads(REFERENCE_MANIFEST.read_text(encoding="utf-8"))
    return {item["id"]: item for item in payload.get("references", []) if item.get("id")}


def clean_doi(value: str | None) -> str | None:
    if not value:
        return None
    text = value.strip().removeprefix("https://doi.org/").removeprefix("http://dx.doi.org/")
    match = DOI_PATTERN.search(text)
    if not match:
        return None
    return match.group(1).rstrip(".,;)")


def slugify_filename(text: str, limit: int = 56) -> str:
    normalized = unicodedata.normalize("NFKD", text)
    ascii_text = normalized.encode("ascii", "ignore").decode("ascii")
    slug = re.sub(r"[^a-z0-9]+", "-", ascii_text.lower()).strip("-")
    compact = re.sub(r"-{2,}", "-", slug)
    return compact[:limit].strip("-") or "paper"


def build_pdf_filename(record: dict) -> str:
    year = record.get("year") or "unknown"
    title_slug = slugify_filename(record.get("title") or record.get("id") or "paper")
    ref_slug = slugify_filename(record.get("id") or "paper", limit=24)
    return f"{year}_{ref_slug}_{title_slug}.pdf"


def title_similarity(left: str, right: str) -> float:
    left_norm = "".join(ch.lower() for ch in left if ch.isalnum() or ch.isspace())
    right_norm = "".join(ch.lower() for ch in right if ch.isalnum() or ch.isspace())
    return SequenceMatcher(None, left_norm, right_norm).ratio()


def search_crossref(reference: dict) -> dict | None:
    title = guess_title_from_citation(reference["citation"])
    query_title = urllib.parse.quote(title)
    query_author = urllib.parse.quote(reference["first_author_surname"])
    url = f"https://api.crossref.org/works?rows=8&query.title={query_title}&query.author={query_author}"
    payload = fetch_json(url)
    items = payload.get("message", {}).get("items", []) if payload else []
    if not items:
        return None

    expected_year = reference["year"]
    expected_author = reference["first_author_surname"].lower()
    ranked = []
    for item in items:
        titles = item.get("title") or item.get("container-title") or [""]
        candidate_title = titles[0] if isinstance(titles, list) else str(titles)
        published = item.get("published-print") or item.get("published-online") or item.get("created") or {}
        date_parts = published.get("date-parts", [[0]])
        candidate_year = int(date_parts[0][0]) if date_parts and date_parts[0] else 0
        authors = item.get("author", [])
        author_match = any(expected_author in (author.get("family", "").lower()) for author in authors)
        similarity = title_similarity(title, candidate_title)
        if similarity < 0.72:
            continue
        score = similarity
        if candidate_year == expected_year:
            score += 0.25
        if author_match:
            score += 0.2
        ranked.append((score, item, candidate_title, candidate_year))

    if not ranked:
        return None

    best_score, best_item, candidate_title, candidate_year = sorted(ranked, key=lambda item: item[0], reverse=True)[0]
    if best_score < 0.95:
        return None

    return {
        "title": candidate_title,
        "authors": [
            " ".join(part for part in [author.get("given", "").strip(), author.get("family", "").strip()] if part).strip()
            for author in best_item.get("author", [])
        ],
        "year": candidate_year or expected_year,
        "venue": (best_item.get("container-title") or [""])[0],
        "doi": clean_doi(best_item.get("DOI")),
        "crossref_score": round(best_score, 3),
    }


def fetch_openalex(doi: str | None) -> dict | None:
    if not doi:
        return None

    encoded = urllib.parse.quote(f"https://doi.org/{doi}", safe="")
    url = f"https://api.openalex.org/works/{encoded}"
    try:
        return fetch_json(url)
    except Exception:
        return None


def openalex_metadata(payload: dict | None) -> dict:
    if not payload:
        return {}

    best_oa = payload.get("best_oa_location") or {}
    primary = payload.get("primary_location") or {}
    source = primary.get("source") or best_oa.get("source") or {}

    pdf_url = best_oa.get("pdf_url") or primary.get("pdf_url")
    landing_page = best_oa.get("landing_page_url") or primary.get("landing_page_url")
    authors = [
        authorship.get("author", {}).get("display_name", "")
        for authorship in payload.get("authorships", [])
        if authorship.get("author", {}).get("display_name")
    ]

    return {
        "title": payload.get("display_name"),
        "authors": authors,
        "year": payload.get("publication_year"),
        "venue": source.get("display_name"),
        "doi": clean_doi(payload.get("doi")),
        "landing_page_url": landing_page,
        "pdf_url": pdf_url,
        "openalex_id": payload.get("id"),
        "is_oa": payload.get("open_access", {}).get("is_oa", False),
    }


def extract_pdf_candidates_from_html(url: str) -> list[str]:
    try:
        raw = fetch_bytes(url)
    except Exception:
        return []

    if raw.startswith(b"%PDF"):
        return [url]

    html = raw.decode("utf-8", errors="ignore")
    hrefs = re.findall(r'href=["\']([^"\']+)["\']', html, flags=re.IGNORECASE)
    candidates: list[str] = []
    for href in hrefs:
        absolute = urllib.parse.urljoin(url, href)
        lowered = absolute.lower()
        if any(hint in lowered for hint in PDF_HINTS):
            candidates.append(absolute)
    return list(dict.fromkeys(candidates))


def download_pdf(record: dict, pdf_url: str) -> tuple[str | None, str]:
    try:
        content = fetch_bytes(pdf_url)
    except Exception as exc:
        return None, f"download_failed: {exc}"

    if not content.startswith(b"%PDF"):
        return None, "download_failed: response is not a PDF"

    filename = build_pdf_filename(record)
    target = REFERENCE_PDF_DIR / filename
    target.write_bytes(content)
    return filename, "downloaded"


def rename_existing_pdf(existing_record: dict | None, record: dict) -> str | None:
    if not existing_record:
        return None

    old_name = existing_record.get("pdf_filename")
    if not old_name:
        return None

    source = REFERENCE_PDF_DIR / old_name
    if not source.exists():
        return None

    target = REFERENCE_PDF_DIR / build_pdf_filename(record)
    if source != target:
        if target.exists():
            source.unlink()
        else:
            source.replace(target)
    return target.name


def resolve_pdf_candidates(record: dict) -> list[str]:
    candidates: list[str] = []
    if record.get("pdf_url"):
        candidates.append(record["pdf_url"])
    if record.get("landing_page_url"):
        candidates.extend(extract_pdf_candidates_from_html(record["landing_page_url"]))
    return list(dict.fromkeys(candidates))


def merge_record(reference: dict, crossref_meta: dict | None, openalex_meta: dict) -> dict:
    merged = {
        "id": reference["id"],
        "citation": reference["citation"],
        "verification_status": "unverified",
        "download_status": "not_checked",
        "title": guess_title_from_citation(reference["citation"]),
        "authors": reference["raw_authors"],
        "year": reference["year"],
        "venue": "",
        "doi": clean_doi(reference["doi"]),
        "arxiv_id": reference["arxiv_id"],
        "landing_page_url": None,
        "pdf_url": None,
        "pdf_filename": None,
        "notes": [],
    }

    if crossref_meta:
        merged.update({key: value for key, value in crossref_meta.items() if value})
        merged["verification_status"] = "verified"
    if openalex_meta:
        merged.update({key: value for key, value in openalex_meta.items() if value})
        merged["verification_status"] = "verified"

    override = MANUAL_OVERRIDES.get(reference["id"])
    if override:
        merged.update(override)
        merged["verification_status"] = override.get("verification_status", merged["verification_status"])

    merged["doi"] = clean_doi(merged.get("doi"))

    if merged.get("arxiv_id") and not merged.get("pdf_url"):
        merged["pdf_url"] = f"https://arxiv.org/pdf/{merged['arxiv_id']}.pdf"
    if merged.get("arxiv_id") and not merged.get("landing_page_url"):
        merged["landing_page_url"] = f"https://arxiv.org/abs/{merged['arxiv_id']}"
    if merged.get("doi") and not merged.get("landing_page_url"):
        merged["landing_page_url"] = f"https://doi.org/{merged['doi']}"

    return merged


def main() -> None:
    REFERENCE_PDF_DIR.mkdir(parents=True, exist_ok=True)
    existing_records = load_existing_manifest()
    references = parse_references(REVIEW_SOURCE.read_text(encoding="utf-8"))
    results = []
    active_filenames: set[str] = set()

    for index, reference in enumerate(references, start=1):
        crossref_meta = None
        openalex_meta = {}
        error_message = None

        try:
            crossref_meta = search_crossref(reference)
            lookup_doi = crossref_meta.get("doi") if crossref_meta else clean_doi(reference["doi"])
            openalex_meta = openalex_metadata(fetch_openalex(lookup_doi))
        except Exception as exc:
            error_message = str(exc)

        merged = merge_record(reference, crossref_meta, openalex_meta)

        pdf_filename = rename_existing_pdf(existing_records.get(reference["id"]), merged)
        if pdf_filename:
            merged["pdf_filename"] = pdf_filename
            merged["download_status"] = "downloaded"
            active_filenames.add(pdf_filename)

        if not pdf_filename:
            last_status = None
            for candidate in resolve_pdf_candidates(merged):
                pdf_filename, status = download_pdf(merged, candidate)
                last_status = status
                if pdf_filename:
                    merged["pdf_url"] = candidate
                    merged["pdf_filename"] = pdf_filename
                    merged["download_status"] = status
                    active_filenames.add(pdf_filename)
                    break
            if not pdf_filename:
                if last_status:
                    merged["download_status"] = last_status
                elif merged.get("landing_page_url"):
                    merged["download_status"] = "external_only"
                elif merged["verification_status"] == "verified":
                    merged["download_status"] = "not_open_access"
                else:
                    merged["download_status"] = "unverified"

        if error_message:
            merged["notes"].append(error_message)

        results.append(merged)
        print(f"[{index:02d}/{len(references)}] {reference['id']} -> {merged['verification_status']} / {merged['download_status']}")
        time.sleep(0.25)

    for pdf_file in REFERENCE_PDF_DIR.glob("*.pdf"):
        if pdf_file.name not in active_filenames:
            pdf_file.unlink()

    REFERENCE_MANIFEST.write_text(
        json.dumps({"generated_at": time.strftime("%Y-%m-%d %H:%M:%S"), "references": results}, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"[OK] Verification manifest -> {REFERENCE_MANIFEST}")


if __name__ == "__main__":
    main()
