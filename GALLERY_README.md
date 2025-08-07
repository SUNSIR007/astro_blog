# 📷 Gallery Feature

## 功能概述

博客现在包含一个简洁的照片画廊功能，支持：

- 📸 照片网格展示（每页10张照片）
- 📄 分页导航（与essays页面样式一致）
- 📱 响应式设计
- 🖼️ 矩形照片展示，无圆角

## 文件结构

```
src/
├── components/
│   └── PhotoGrid.astro      # 照片网格组件
├── content/
│   └── photos/              # 照片数据文件夹
│       ├── config.ts        # 照片数据结构定义
│       ├── mountain-landscape.json
│       ├── ocean-waves.json
│       └── ...              # 其他照片文件
└── pages/
    └── gallery/
        ├── index.astro      # 画廊主页面
        └── page/
            └── [page].astro # 分页页面
```

## 如何添加新照片

### 1. 准备照片

将照片上传到你选择的图床服务（如 Cloudinary、Imgur、GitHub 等），获取照片的 URL 链接。

### 2. 创建照片数据文件

在 `src/content/photos/` 目录下创建一个新的 JSON 文件，文件名建议使用英文和连字符，例如 `my-new-photo.json`：

```json
{
  "title": "照片标题",
  "description": "照片描述（可选）",
  "url": "https://your-image-host.com/full-size-image.jpg",
  "thumbnail": "https://your-image-host.com/thumbnail-image.jpg",
  "alt": "照片的替代文本",
  "date": "2024-01-15"
}
```

### 3. 字段说明

- `title`: 照片标题（必填）
- `description`: 照片描述（可选）
- `url`: 照片完整尺寸的 URL（必填）
- `thumbnail`: 缩略图 URL（可选，如果不提供会使用 url）
- `alt`: 无障碍访问的替代文本（必填）
- `date`: 拍摄或发布日期，格式为 YYYY-MM-DD（必填）

### 4. 示例

```json
{
  "title": "夕阳下的城市",
  "description": "从高楼俯瞰城市夕阳西下的美景",
  "url": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=2070&q=80",
  "thumbnail": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80",
  "alt": "城市天际线在夕阳下的剪影",
  "date": "2024-03-15"
}
```

## 导航功能

### 分页导航

- 每页显示10张照片
- 使用与essays页面相同的分页组件
- 支持页码跳转和上一页/下一页导航

### 导航链接

画廊链接已添加到右侧导航栏中，位于 "Essays" 和 "Archive" 之间。

## 样式特性

- 照片网格展示，矩形无圆角设计
- 响应式网格布局（2-5列，根据屏幕尺寸调整）
- 悬停透明度效果
- 深色模式支持
- 与主题一致的白色标题

## 技术实现

- 使用 Astro Content Collections 管理照片数据
- TypeScript 类型安全
- 响应式 CSS Grid 布局
- 无障碍访问支持
- SEO 友好的 URL 结构

## 注意事项

1. 照片文件名应使用英文和连字符，避免特殊字符
2. 建议为照片提供缩略图以提高加载速度
3. 日期格式必须为 YYYY-MM-DD
4. 照片 URL 必须是可公开访问的链接
5. 每页显示10张照片，超过10张时自动分页
6. 照片按日期排序，最新的在前
