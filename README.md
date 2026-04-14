# paperpages

仓库根目录就是当前 `04_交互网站` 文件夹，不需要额外 clone 导出副本。

项目包含三部分：

1. `paper-interactive/`
   Vue 3 + Vite + TypeScript 前端。
2. `content-source/`
   综述正文、参考文献核验清单和本地 PDF。
3. `scripts/`
   文献同步、核验和数据生成脚本。

## 本地启动

```powershell
python scripts/build_literature_dataset.py
cd paper-interactive
npm ci
npm run dev
```

默认地址：

`http://localhost:3001/`

## 文献更新

如果你仍在上层研究目录中维护：

1. `../01_文献综述/扩展文献综述.md`
2. `../05_参考文献/verification_manifest.json`
3. `../05_参考文献/pdfs/*.pdf`

可以先同步到项目内部：

```powershell
python scripts/sync_content_source.py
python scripts/fetch_reference_pdfs.py
python scripts/build_literature_dataset.py
```

如果只改了前端，不需要跑同步脚本。

## 构建

```powershell
python scripts/build_literature_dataset.py
cd paper-interactive
npm ci
npm run build
```

构建产物：

`paper-interactive/dist/`

## GitHub Actions 静态部署

工作流文件：

`.github/workflows/deploy-interactive-site.yml`

首次发布流程：

1. 在当前目录初始化仓库：

```powershell
git init -b main
git remote add origin https://github.com/2711944586/paperpages.git
```

2. 首次提交并推送：

```powershell
git add .
git commit -m "Initialize paperpages static site"
git push -u origin main
```

3. 打开 GitHub 仓库 `paperpages`。
4. 进入 `Settings -> Pages`。
5. 在 `Build and deployment` 中把 `Source` 设置为 `GitHub Actions`。
6. 保持默认分支为 `main`。
7. 每次推送到 `main` 后，Actions 会自动执行：
   `python scripts/build_literature_dataset.py`
   `npm ci`
   `npm run build`
8. 构建完成后，`paper-interactive/dist/` 会直接发布到 GitHub Pages。
9. 因为前端使用 `hash` 路由，发布地址通常是：
   `https://2711944586.github.io/paperpages/#/`

## 推送到远程

日常更新：

```powershell
python scripts/build_literature_dataset.py
git add .
git commit -m "Update paperpages static site"
git push -u origin main
```

## 当前内容

1. 旧论文图表、旧实验结果和旧双站结构已经移除。
2. 文献展示以附录参考文献和综述正文为主。
3. 论文工作区只保留新稿接入所需模块。
