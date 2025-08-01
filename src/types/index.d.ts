/// <reference types="../../.astro/types" />
/// <reference types="astro" />

type Post = import('astro:content').CollectionEntry<'posts'>
type Essay = import('astro:content').CollectionEntry<'essays'>

type Page = import("astro").Page<Post>
type EssayPage = import("astro").Page<Essay>

