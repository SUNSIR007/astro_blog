/// <reference types="../../.astro/types" />
/// <reference types="astro" />

export type Post = import('astro:content').CollectionEntry<'posts'>
export type Essay = import('astro:content').CollectionEntry<'essays'>

export type Page = import("astro").Page<Post>
export type EssayPage = import("astro").Page<Essay>

