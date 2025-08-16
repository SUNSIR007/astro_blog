# Astro Blog 项目分析

## 项目概述

这是一个基于 Astro 构建的个人博客网站，使用了 `astro-theme-typography` 主题。项目采用 TypeScript 开发，使用 UnoCSS 进行样式设计，专为静态网站生成而优化。

项目名称：Ryuichi's Blog
作者：Ryuichi
主题风格：暗色主题 (dark theme)

## 技术栈

- **框架**：Astro v4.5.9
- **语言**：TypeScript
- **样式**：UnoCSS
- **内容管理**：Markdown 文件 + Astro Content Collections
- **部署**：静态站点生成，可部署到 Vercel 等平台

## 项目结构

```
.
├── src/
│   ├── components/     # 组件目录
│   ├── content/        # 内容目录（博客文章、随笔、图片）
│   ├── layouts/        # 布局模板
│   ├── pages/          # 页面路由
│   ├── styles/         # 样式文件
│   ├── types/          # TypeScript 类型定义
│   ├── utils/          # 工具函数
│   └── theme.config.ts # 主题配置文件
├── public/             # 静态资源目录
├── scripts/            # 脚本目录
├── astro.config.ts     # Astro 配置文件
├── uno.config.ts       # UnoCSS 配置文件
└── package.json        # 项目依赖和脚本
```

## 核心功能

### 1. 内容管理系统
- **博客文章 (Posts)**：位于 `src/content/posts/`，支持 Markdown 格式
- **随笔 (Essays)**：位于 `src/content/essays/`，支持 Markdown 格式
- **图片画廊 (Photos)**：位于 `src/content/photos/`，以数据文件形式存储
- **内容校验**：使用 Zod 对内容进行校验

### 2. 页面路由
- 首页 (`/`)：显示最新博客文章
- 博客文章 (`/posts/[slug]`)：单篇博客文章页面
- 随笔 (`/essays/[slug]`)：单篇随笔页面
- 画廊 (`/gallery`)：图片画廊展示
- 归档 (`/archive`)：按时间顺序展示所有内容
- 分类 (`/categories`)：按分类展示文章
- 关于 (`/about`)：关于页面
- RSS 订阅 (`/atom.xml`)：自动生成的 RSS 订阅源

### 3. 样式系统
- 使用 UnoCSS 进行原子化 CSS 样式管理
- 支持暗色主题
- 响应式设计
- 支持中文字体优化

### 4. SEO 和其他功能
- 自动生成 sitemap
- 自动生成 robots.txt
- RSS 订阅支持
- 社交媒体链接集成

## 配置文件

### 主题配置 (`src/theme.config.ts`)
- 网站标题、作者、描述等基本信息
- 导航菜单配置
- 社交媒体链接
- 分类映射配置
- 分页设置

### Astro 配置 (`astro.config.ts`)
- 站点 URL 配置
- Markdown 渲染配置（使用 Shiki 进行代码高亮）
- 集成 UnoCSS、sitemap、robots.txt 插件

### UnoCSS 配置 (`uno.config.ts`)
- 预设配置（UnoCSS、Attributify、Icons）
- 主题颜色配置（前景色、背景色）
- 字体配置（支持中文字体）
- 动画关键帧定义

## 开发和部署命令

### 开发
```bash
# 启动开发服务器（带类型检查）
pnpm dev

# 启动开发服务器（不带类型检查）
pnpm start
```

### 构建
```bash
# 构建生产版本（带类型检查）
pnpm build

# 本地预览生产版本
pnpm preview
```

### 内容管理
```bash
# 创建新文章
pnpm new-post

# 更新主题
pnpm update-theme
```

## 内容工作流程

1. 通过 `pnpm new-post` 脚本或手动在 `src/content/posts/` 目录创建 Markdown 文件
2. 在 Markdown 文件的 frontmatter 中添加必要信息（标题、发布日期、分类等）
3. 编写文章内容（支持 Markdown 语法）
4. 构建并部署（无需数据库）

## 特殊功能

- **分类系统**：自动从文章元数据中提取分类信息
- **分页功能**：支持博客文章和随笔的分页显示
- **日期格式化**：提供多种日期格式化选项
- **内容缓存**：在工具函数中实现数据缓存以提高性能
- **响应式设计**：适配移动端和桌面端显示

## 注意事项

- 项目使用静态站点生成，无服务器运行时
- 所有内容基于 Markdown 文件，无需数据库
- 图片可以通过 frontmatter 的 `banner` 字段添加
- 分类映射可在主题配置中自定义