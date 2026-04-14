from __future__ import annotations

import shutil
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
WORKSPACE_ROOT = ROOT.parent
CONTENT_ROOT = ROOT / "content-source"

SOURCE_REVIEW = WORKSPACE_ROOT / "01_文献综述" / "扩展文献综述.md"
SOURCE_AUDIT = WORKSPACE_ROOT / "paper_ipm_reference_audit.md"
SOURCE_REFERENCE_ROOT = WORKSPACE_ROOT / "05_参考文献"
SOURCE_REFERENCE_PDFS = SOURCE_REFERENCE_ROOT / "pdfs"
SOURCE_REFERENCE_MANIFEST = SOURCE_REFERENCE_ROOT / "verification_manifest.json"

TARGET_REVIEW_DIR = CONTENT_ROOT / "review"
TARGET_REFERENCE_DIR = CONTENT_ROOT / "references"
TARGET_PDF_DIR = TARGET_REFERENCE_DIR / "pdfs"


def sync_file(source: Path, target: Path) -> None:
    if not source.exists():
        return
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source, target)


def sync_tree(source: Path, target: Path) -> None:
    if not source.exists():
        return
    if target.exists():
        shutil.rmtree(target)
    shutil.copytree(source, target)


def main() -> None:
    TARGET_REVIEW_DIR.mkdir(parents=True, exist_ok=True)
    TARGET_REFERENCE_DIR.mkdir(parents=True, exist_ok=True)

    sync_file(SOURCE_REVIEW, TARGET_REVIEW_DIR / SOURCE_REVIEW.name)
    sync_file(SOURCE_AUDIT, TARGET_REVIEW_DIR / SOURCE_AUDIT.name)
    sync_file(SOURCE_REFERENCE_MANIFEST, TARGET_REFERENCE_DIR / SOURCE_REFERENCE_MANIFEST.name)
    sync_tree(SOURCE_REFERENCE_PDFS, TARGET_PDF_DIR)

    print(f"[OK] Synced review source -> {TARGET_REVIEW_DIR}")
    print(f"[OK] Synced references -> {TARGET_REFERENCE_DIR}")


if __name__ == "__main__":
    main()
