---
published_date: OCT 6 2022 14:28 UTC+8
author:
  name: Lightzane
tags: [mini-docs]
custom_last_updated: OCT 7 2022
---

# Mini Docs - About

`mini-docs` is a simple static blog generator which you can import in your web application projects.

After `npm install`... just do `npm start` and modify files inside:

- `.docs`

Check `./.docs/` folder for all the content. There will be a list of `.md` files and `authors.yml`.

> Note: There is a difference between `.docs` folder and `docs` folder. The _docs_ folder is just used for GitHub pages. _Read carefully_

Then you can check the `./docs/list.js` and see below interface:

<!-- truncate -->

```ts
export interface MiniDocs {
  content: string;
  /** The very first `#` of the content */
  title: string;
  /** The title same as above but it is marked and imbued with anchor link inside `h1` tag */
  markedTitle: string;
  /** The calculated time to read in minutes. Returns: `time` min read */
  timeToRead: string;
  /** The content (excluding title) to be displayed as preview or summary of a subject */
  overview: string;
  /** The yaml front matter which contains other information such as `authors`, `tags`, `published_date`, and other custom fields */
  metadata?: Metadata;
  /** The remaining content without the `overview` content */
  truncatedContent: string;
}

/** The Yaml front matter in the markdown */
export interface Metadata {
  /** The author */
  authors?: Author[];
  /** @example ['tags-here','another-tag','tag'] */
  tags?: string[];
  /** @example "OCT 5 2022 09:35 UTC+8", "2022-10-05 09:35 UTC+8" */
  published_date?: string;
}

export interface Author {
  name: string;
  title?: string;
  image_url?: string;
}
```

> Note that this file contains a custom metadata **custom_last_updated** which can be accessed inside `metadata` property
