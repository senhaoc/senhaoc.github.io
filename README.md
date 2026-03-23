# Senhao (Simon) Cheng — Academic Homepage

基于 Quarto 的个人学术主页。

## 目录结构

```
.
├── _quarto.yml          # Quarto 配置文件
├── index.qmd            # 首页（关于我、教育、论文、经历）
├── publications.qmd     # 论文详情页
├── life.qmd             # Beyond Research（极限运动、宠物、爱好）
├── styles.css           # 自定义样式
├── logos/               # 学校、公司 logo
│   ├── umich.png
│   ├── zju.png
│   └── mindrank.png
├── icon/                # 社交媒体图标
│   ├── google_scholar.png
│   ├── github.png
│   └── email.png
├── photos/              # 个人照片（需要你自己添加）
│   ├── profile.jpg          # 个人证件照/形象照
│   ├── snowboard_1~4.jpg    # 单板滑雪照片
│   ├── skydive.mp4          # 跳伞视频
│   ├── skydive_poster.jpg   # 跳伞视频封面
│   ├── dragonboat_1~3.jpg   # 龙舟照片
│   ├── fitness_1~2.jpg      # 健身照片
│   └── pet_1~6.jpg          # 宠物照片（澳牧+缅因猫）
├── paper_pics/          # 论文配图
│   ├── dlr.png
│   ├── crossmodal_rag.png
│   ├── chemsafety.png
│   └── breast_cancer.png
├── files/               # 可下载文件
│   └── CV.pdf
└── docs/                # 构建输出（自动生成）
```

## 部署步骤

### 1. 安装 Quarto
```bash
# macOS
brew install quarto

# 或从官网下载：https://quarto.org/docs/get-started/
```

### 2. 添加你的照片和素材
将你的照片放入 `photos/` 目录，论文配图放入 `paper_pics/` 目录。
需要的文件清单见上方目录结构。

### 3. 本地预览
```bash
quarto preview
```

### 4. 构建静态网站
```bash
quarto render
```
输出在 `docs/` 目录。

### 5. 部署到 GitHub Pages

1. 创建仓库 `senhaocheng.github.io`（或你的 GitHub 用户名）
2. 将所有文件推送到 `main` 分支
3. 在 Settings → Pages 中，设置 Source 为 `main` 分支的 `/docs` 目录
4. 等待几分钟，访问 `https://senhaocheng.github.io`

## 自定义

### 修改配色
在 `styles.css` 中修改 CSS 变量：
```css
:root {
  --color-primary: #00274C;    /* 密歇根蓝 */
  --color-accent: #FFCB05;     /* 密歇根黄 */
}
```

### 添加/修改论文
在 `index.qmd` 的 Publications 部分添加新的 `.pub-item` 块。

### 添加更多照片
在 `.qmd` 文件中添加 `![](photos/your_photo.jpg){.grid-photo}` 即可。
