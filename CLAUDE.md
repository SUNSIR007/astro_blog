# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Astro-based personal blog using the **astro-theme-typography** theme. Built with TypeScript, UnoCSS for styling, and optimized for static site generation.

## Key Commands

### Development
- `pnpm dev` - Start dev server with Astro check
- `pnpm start` - Start dev server without type checking
- `pnpm build` - Build production site with Astro check
- `pnpm preview` - Preview production build locally

### Content Management
- `pnpm new-post` - Interactive script to create new blog posts
- `pnpm update-theme` - Update theme configuration

### Manual Content Creation
Blog posts are stored in `src/content/posts/` as Markdown files with frontmatter:
```yaml
---
title: "Post Title"
pubDate: "2024-01-01 12:00:00"
categories: ["tech", "life"]
description: "Post description"
---
```

## Architecture

### Content Layer
- **Collection Schema**: Defined in `src/content/config.ts` with Zod validation
- **Posts**: Markdown files with required frontmatter (title, pubDate, categories)
- **Categories**: Dynamic categorization through post metadata

### Routing Structure
- `/` - Homepage with recent posts
- `/posts/page/[page]` - Paginated post listings 
- `/posts/[slug]` - Individual blog posts
- `/categories` - Category overview
- `/categories/[category]` - Posts by category
- `/archive` - Chronological archive
- `/about` - About page
- `/atom.xml` - RSS feed

### Styling System
- **UnoCSS** configuration in `uno.config.ts`
- **Dark theme** by default (`themeStyle: "dark"`)
- **Typography-focused** with Chinese font support
- **Responsive design** with mobile-first approach

### Key Files
- `src/theme.config.ts` - Site configuration (title, author, nav, socials)
- `src/utils/index.ts` - Core utilities for posts, categories, and date formatting
- `astro.config.ts` - Astro configuration with integrations
- `uno.config.ts` - UnoCSS styling configuration

## Content Workflow
1. Create new posts via `pnpm new-post` or manually in `src/content/posts/`
2. Add appropriate categories (categories are automatically discovered)
3. Build and deploy - no database required

## Development Notes
- Uses static site generation - no server runtime
- RSS feed auto-generated from posts
- Sitemap auto-generated for SEO
- Images can be added via frontmatter `banner` field
- All content is Markdown-based with full TypeScript support