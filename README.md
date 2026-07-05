# Molight 的学术主页 / Academic Homepage

源码仓库 — 部署在 https://Molight.github.io （Pages 自动部署）

基于 [Academic Pages](https://github.com/academicpages/academicpages.github.io) 模板（fork 自 [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) Jekyll Theme）。

---

## 如何写新内容 / How to add content

| 类型 | 目录 | 文件名格式 | Frontmatter 关键字段 |
|------|------|----------|---------------------|
| 论文 | `_publications/` | `YYYY-MM-DD-短标题.md` | `title`, `collection: publications`, `category`, `venue`, `date`, `paperurl`, `citation` |
| 博客 | `_posts/` | `YYYY-MM-DD-短标题.md` | `title`, `date`, `permalink`, `tags`, `excerpt` |
| 讲座 | `_talks/` | `YYYY-MM-DD-短标题.md` | `title`, `collection: talks`, `type`, `venue`, `date`, `location` |
| 项目 | `_portfolio/` | `短标题.md` | `title`, `collection: portfolio`, `excerpt` |
| 教学 | `_teaching/` | `YYYY-season-短标题.md` | `title`, `collection: teaching`, `type`, `venue`, `date` |

模板示例文件以 `0001-01-01-example-*` 命名，**全部可删**。

---

## 本地预览（可选）/ Local preview

如果想在本地实时预览（NAS 容器跑 Jekyll）：

```bash
cd /root/sites/molight.github.io
docker compose up
# 访问 http://localhost:4000
```

或者用 Jekyll 直跑（需先装 ruby + bundler）：

```bash
bundle install
bundle exec jekyll serve -l -H 0.0.0.0
```

---

## 更新流程 / Update workflow

1. 改文件（本地或 GitHub 网页）
2. `git add . && git commit -m "..."`
3. `git push origin main`
4. GitHub Actions 自动 build + deploy 到 https://Molight.github.io

---

## 待补充清单 / TODO

- [ ] 头像照片 → 替换 `images/profile.png`（当前是 M 占位符）
- [ ] 下载版 CV PDF → 放 `files/Yibin_Dong_CV.pdf`，然后在 `_pages/cv.md` 加下载链接
- [ ] Google Scholar 链接（如有） → `_config.yml` → `author.googlescholar`
- [ ] 第一篇博客文章（`_posts/`）
- [ ] 真实教学经历（如有）→ `_teaching/`
- [ ] 删除 `0001-01-01-example-*` 占位文件（已部分完成：仅剩 `_teaching/example-teaching.md`）

