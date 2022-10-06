export interface MarkdownDocument {
    content: string;
    /** The very first `#` of the content */
    title: string;
    /** The content to be displayed as preview or summary of a subject */
    overview: string;
    /** The yaml front matter which contains other information such as `authors`, `tags`, `published_date` */
    metadata?: Metadata;
    /** The remaining content without the `overview` content */
    truncatedContent: string;
}

/** The Yaml front matter in the markdown */
export interface Metadata {
    /** Extracted from `---` the contains `authors` */
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

