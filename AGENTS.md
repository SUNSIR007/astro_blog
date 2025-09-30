# Repository Guidelines

## Project Structure & Module Organization
- Core Astro source resides in `src/`; use `components/`, `layouts/`, and `utils/` for reusable pieces, while `pages/` defines route-level `.astro` or `.ts` entries.
- Markdown content lives under `src/content/` with collections such as `posts/`, `essays/`, and `photos/`; adjust schemas in `src/content/config.ts` and shared types in `src/types/`.
- Static assets, favicons, and SEO metadata belong in `public/`; global theme, UnoCSS, and aliases are configured in `src/theme.config.ts`, `uno.config.ts`, and `tsconfig.json`.
- Helper scripts stay in `scripts/`; prefer `~` imports for anything inside `src/` to ease refactors.

## Build, Test, and Development Commands
- `pnpm install` ensures dependencies match `pnpm-lock.yaml`; rerun after pulling upstream theme updates.
- `pnpm dev` starts Vite after an `astro check`, ideal for iterative work.
- `pnpm build` runs a production build (also triggers `astro check`) and outputs to `dist/`.
- `pnpm preview` serves the latest build for smoke testing.
- `pnpm new-post` scaffolds timestamped Markdown; `pnpm update-theme` syncs template changes via `scripts/`.

## Coding Style & Naming Conventions
- Use two-space indentation in `.astro`, `.ts`, and config files; avoid tabs.
- Components adopt PascalCase (`PostCard.astro`), utilities use camelCase (`getPosts`), directories stay kebab-case.
- Group UnoCSS classes logically and keep data prep in Astro frontmatter; rely on the alias `~` for internal imports.

## Testing Guidelines
- Automated tests are not yet configured; rely on `astro check` plus manual regression in `pnpm dev`.
- When introducing tests, colocate `.test.ts` files beside the source and document new tooling updates.
- For content edits, confirm generated frontmatter is accurate and localized strings exist in `src/i18n.ts` before merging.

## Commit & Pull Request Guidelines
- Write concise, imperative commit messages (e.g., `Add essay: Title`, `version 1.0.0`).
- Rebase onto `main` prior to PR submission; include a change summary, screenshots for visual updates, executed commands, and linked issues.
- List verification steps such as `pnpm build` or critical pages checked, and surface remaining TODOs explicitly.

## Content & Theme Maintenance
- Run `pnpm new-post` immediately before drafting new essays or gallery entries, then adjust metadata.
- After `pnpm update-theme`, resolve conflicts without discarding local `src/theme.config.ts` customizations and rerun `pnpm dev` to verify UnoCSS and sitemap behavior.
