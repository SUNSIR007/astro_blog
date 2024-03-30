export const THEME_CONFIG: App.Locals['config'] = {
  /** blog title */
  title: "Ryuichi's Blog",
  /** your name */
  author: "Ryuichi",
  /** website description */
  desc: "Life is a game",
  /** your deployed domain */
  website: "https://astro-blog-sunsir007.vercel.app/",
  /** your locale */
  locale: "en-us",
  /** theme style */
  themeStyle: "dark",
  /** your socials */
  socials: [
    {
      name: "github",
      href: "https://github.com/SUNSIR007?tab=repositories",
    },
    {
      name: "rss",
      href: "/atom.xml",
    },
    {
      name: "twitter",
      href: "https://twitter.com/Ryuichi_lol",
    }
  ],
  /** your header info */
  header: {
    twitter: "@ryuichi_lol",
  },
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories"
    },
    {
      name: "About",
      href: "/about",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [
    {name: "胡适", path: "hu-shi"},
  ]
}

