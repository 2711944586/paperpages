# paperpages

论文与文献的统一静态站，仓库根目录就是当前 `04_交互网站`。

## 在线地址

- 首页: `https://2711944586.github.io/paperpages/#/`
- 论文总览: `https://2711944586.github.io/paperpages/#/paper`
- 方法与公式: `https://2711944586.github.io/paperpages/#/paper/method`
- 理论解释: `https://2711944586.github.io/paperpages/#/paper/theory`
- 实验设计: `https://2711944586.github.io/paperpages/#/paper/experiment`
- 文献库: `https://2711944586.github.io/paperpages/#/library`

## 目录

- `paper-interactive/`: Vue 3 + Vite 前端
- `content-source/`: 综述、论文原稿副本、参考文献核验清单和本地 PDF
- `scripts/`: 同步、抓取和生成前端数据

## 本地更新

```powershell
python scripts/build_literature_dataset.py
cd paper-interactive
npm ci
npm run dev
```

本地地址: `http://localhost:3001/`

## 静态部署

工作流文件: `.github/workflows/deploy-interactive-site.yml`

```powershell
python scripts/build_literature_dataset.py
git add .
git commit -m "Update paperpages"
git push origin main
```

推送后：

1. 打开 `https://github.com/2711944586/paperpages/actions`
2. 等待 `Deploy Interactive Site` 完成
3. 打开上面的 Pages 地址

## 当前内容

1. 论文部分已经拆成总览、方法与公式、理论解释、实验设计四个页面，并支持公式渲染。
2. 文献部分继续使用综述正文、附录文献和本地 PDF 作为底座。
3. 图表、实验数值和正式插图仍保留版位，等实验结果完成后接入。
