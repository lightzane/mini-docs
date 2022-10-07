const miniDocsList = [
  {
    "title": "Mini Docs - About",
    "markedTitle": "<h1 id=\"mini-docs---about\">Mini Docs - About</h1>\n",
    "timeToRead": "1 min read",
    "content": "<h1 id=\"mini-docs---about\">Mini Docs - About</h1>\n<p><code>mini-docs</code> is a simple static blog generator which you can import in your web application projects.</p>\n<p>After <code>npm install</code>... just do <code>npm start</code> and modify files inside:</p>\n<ul>\n<li><code>.docs</code></li>\n</ul>\n<p>Check <code>./.docs/</code> folder for all the content. There will be a list of <code>.md</code> files and <code>authors.yml</code>.</p>\n<blockquote>\n<p>Note: There is a difference between <code>.docs</code> folder and <code>docs</code> folder. The <em>docs</em> folder is just used for GitHub pages. <em>Read carefully</em></p>\n</blockquote>\n<p>Then you can check the <code>./docs/list.js</code> and see below interface:</p>\n<pre><code class=\"language-ts\">export interface MiniDocs {\n  content: string;\n  /** The very first `#` of the content */\n  title: string;\n  /** The title same as above but it is marked and imbued with anchor link inside `h1` tag */\n  markedTitle: string;\n  /** The calculated time to read in minutes. Returns: `time` min read */\n  timeToRead: string;\n  /** The content to be displayed as preview or summary of a subject */\n  titleOverview: string;\n  /** The content (excluding title) to be displayed as preview or summary of a subject */\n  overview: string;\n  /** The yaml front matter which contains other information such as `authors`, `tags`, `published_date`, and other custom fields */\n  metadata?: Metadata;\n  /** The remaining content without the `overview` content */\n  truncatedContent: string;\n}\n\n/** The Yaml front matter in the markdown */\nexport interface Metadata {\n  /** The author */\n  authors?: Author[];\n  /** @example [&#39;tags-here&#39;,&#39;another-tag&#39;,&#39;tag&#39;] */\n  tags?: string[];\n  /** @example &quot;OCT 5 2022 09:35 UTC+8&quot;, &quot;2022-10-05 09:35 UTC+8&quot; */\n  published_date?: string;\n}\n\nexport interface Author {\n  name: string;\n  title?: string;\n  image_url?: string;\n}\n</code></pre>\n<blockquote>\n<p>Note that this file contains a custom metadata <strong>custom_last_updated</strong> which can be accessed inside <code>metadata</code> property</p>\n</blockquote>\n",
    "truncatedContent": "<pre><code class=\"language-ts\">export interface MiniDocs {\n  content: string;\n  /** The very first `#` of the content */\n  title: string;\n  /** The title same as above but it is marked and imbued with anchor link inside `h1` tag */\n  markedTitle: string;\n  /** The calculated time to read in minutes. Returns: `time` min read */\n  timeToRead: string;\n  /** The content to be displayed as preview or summary of a subject */\n  titleOverview: string;\n  /** The content (excluding title) to be displayed as preview or summary of a subject */\n  overview: string;\n  /** The yaml front matter which contains other information such as `authors`, `tags`, `published_date`, and other custom fields */\n  metadata?: Metadata;\n  /** The remaining content without the `overview` content */\n  truncatedContent: string;\n}\n\n/** The Yaml front matter in the markdown */\nexport interface Metadata {\n  /** The author */\n  authors?: Author[];\n  /** @example [&#39;tags-here&#39;,&#39;another-tag&#39;,&#39;tag&#39;] */\n  tags?: string[];\n  /** @example &quot;OCT 5 2022 09:35 UTC+8&quot;, &quot;2022-10-05 09:35 UTC+8&quot; */\n  published_date?: string;\n}\n\nexport interface Author {\n  name: string;\n  title?: string;\n  image_url?: string;\n}\n</code></pre>\n<blockquote>\n<p>Note that this file contains a custom metadata <strong>custom_last_updated</strong> which can be accessed inside <code>metadata</code> property</p>\n</blockquote>\n",
    "titleOverview": "<h1 id=\"mini-docs---about\">Mini Docs - About</h1>\n<p><code>mini-docs</code> is a simple static blog generator which you can import in your web application projects.</p>\n<p>After <code>npm install</code>... just do <code>npm start</code> and modify files inside:</p>\n<ul>\n<li><code>.docs</code></li>\n</ul>\n<p>Check <code>./.docs/</code> folder for all the content. There will be a list of <code>.md</code> files and <code>authors.yml</code>.</p>\n<blockquote>\n<p>Note: There is a difference between <code>.docs</code> folder and <code>docs</code> folder. The <em>docs</em> folder is just used for GitHub pages. <em>Read carefully</em></p>\n</blockquote>\n<p>Then you can check the <code>./docs/list.js</code> and see below interface:</p>\n",
    "overview": "<p><code>mini-docs</code> is a simple static blog generator which you can import in your web application projects.</p>\n<p>After <code>npm install</code>... just do <code>npm start</code> and modify files inside:</p>\n<ul>\n<li><code>.docs</code></li>\n</ul>\n<p>Check <code>./.docs/</code> folder for all the content. There will be a list of <code>.md</code> files and <code>authors.yml</code>.</p>\n<blockquote>\n<p>Note: There is a difference between <code>.docs</code> folder and <code>docs</code> folder. The <em>docs</em> folder is just used for GitHub pages. <em>Read carefully</em></p>\n</blockquote>\n<p>Then you can check the <code>./docs/list.js</code> and see below interface:</p>\n",
    "metadata": {
      "published_date": "OCT 6 2022 14:28 UTC+8",
      "author": {
        "name": "Lightzane"
      },
      "tags": [
        "mini-docs"
      ],
      "custom_last_updated": "OCT 7 2022"
    }
  },
  {
    "title": "Mini Docs - How items are sorted out",
    "markedTitle": "<h1 id=\"mini-docs---how-items-are-sorted-out\">Mini Docs - How items are sorted out</h1>\n",
    "timeToRead": "1 min read",
    "content": "<h1 id=\"mini-docs---how-items-are-sorted-out\">Mini Docs - How items are sorted out</h1>\n<p>The items will be sorted out prioritizing the latest <code>published_date</code></p>\n<blockquote>\n<p>If there are <strong>no</strong> or <strong>same</strong> <code>published_date</code>, then it will sort based on the file name</p>\n</blockquote>\n",
    "truncatedContent": "<blockquote>\n<p>If there are <strong>no</strong> or <strong>same</strong> <code>published_date</code>, then it will sort based on the file name</p>\n</blockquote>\n",
    "titleOverview": "<h1 id=\"mini-docs---how-items-are-sorted-out\">Mini Docs - How items are sorted out</h1>\n<p>The items will be sorted out prioritizing the latest <code>published_date</code></p>\n",
    "overview": "<p>The items will be sorted out prioritizing the latest <code>published_date</code></p>\n",
    "metadata": {
      "published_date": "OCT 6 2022 07:36 UTC+8",
      "tags": [
        "mini-docs",
        "sort"
      ]
    }
  },
  {
    "title": "Some File",
    "markedTitle": "<h1 id=\"some-file\">Some File</h1>\n",
    "timeToRead": "1 min read",
    "content": "<h1 id=\"some-file\">Some File</h1>\n<p>This is coming from September</p>\n<h2 id=\"contents\">Contents</h2>\n<ol>\n<li><a href=\"#development-server\">Development Server</a></li>\n<li><a href=\"#code-scaffolding\">Code Scaffolding</a></li>\n<li><a href=\"#build\">Build</a></li>\n<li><a href=\"#running-unit-tests\">Running Unit Tests</a></li>\n<li><a href=\"#running-end-to-end-tests\">E2E</a></li>\n<li><a href=\"#further-help\">Further Help</a></li>\n</ol>\n<h2 id=\"development-server\">Development server</h2>\n<p>Run <code>ng serve</code> for a dev server. Navigate to <code>http://localhost:4200/</code>. The app will automatically reload if you change any of the source files.</p>\n<h2 id=\"code-scaffolding\">Code scaffolding</h2>\n<p>Run <code>ng generate component component-name</code> to generate a new component. You can also use <code>ng generate directive|pipe|service|class|guard|interface|enum|module</code>.</p>\n<h2 id=\"build\">Build</h2>\n<p>Run <code>ng build</code> to build the project. The build artifacts will be stored in the <code>dist/</code> directory. Use the <code>--prod</code> flag for a production build.</p>\n<h2 id=\"running-unit-tests\">Running unit tests</h2>\n<p>Run <code>ng test</code> to execute the unit tests via <a href=\"https://karma-runner.github.io\">Karma</a>.</p>\n<h2 id=\"running-end-to-end-tests\">Running end-to-end tests</h2>\n<p>Run <code>ng e2e</code> to execute the end-to-end tests via <a href=\"http://www.protractortest.org/\">Protractor</a>.</p>\n<h2 id=\"further-help\">Further help</h2>\n<p>To get more help on the Angular CLI use <code>ng help</code> or go check out the <a href=\"https://angular.io/cli\">Angular CLI Overview and Command Reference</a> page.</p>\n",
    "truncatedContent": "<p>This is coming from September</p>\n<h2 id=\"contents\">Contents</h2>\n<ol>\n<li><a href=\"#development-server\">Development Server</a></li>\n<li><a href=\"#code-scaffolding\">Code Scaffolding</a></li>\n<li><a href=\"#build\">Build</a></li>\n<li><a href=\"#running-unit-tests\">Running Unit Tests</a></li>\n<li><a href=\"#running-end-to-end-tests\">E2E</a></li>\n<li><a href=\"#further-help\">Further Help</a></li>\n</ol>\n<h2 id=\"development-server\">Development server</h2>\n<p>Run <code>ng serve</code> for a dev server. Navigate to <code>http://localhost:4200/</code>. The app will automatically reload if you change any of the source files.</p>\n<h2 id=\"code-scaffolding\">Code scaffolding</h2>\n<p>Run <code>ng generate component component-name</code> to generate a new component. You can also use <code>ng generate directive|pipe|service|class|guard|interface|enum|module</code>.</p>\n<h2 id=\"build\">Build</h2>\n<p>Run <code>ng build</code> to build the project. The build artifacts will be stored in the <code>dist/</code> directory. Use the <code>--prod</code> flag for a production build.</p>\n<h2 id=\"running-unit-tests\">Running unit tests</h2>\n<p>Run <code>ng test</code> to execute the unit tests via <a href=\"https://karma-runner.github.io\">Karma</a>.</p>\n<h2 id=\"running-end-to-end-tests\">Running end-to-end tests</h2>\n<p>Run <code>ng e2e</code> to execute the end-to-end tests via <a href=\"http://www.protractortest.org/\">Protractor</a>.</p>\n<h2 id=\"further-help\">Further help</h2>\n<p>To get more help on the Angular CLI use <code>ng help</code> or go check out the <a href=\"https://angular.io/cli\">Angular CLI Overview and Command Reference</a> page.</p>\n",
    "titleOverview": "<h1 id=\"some-file\">Some File</h1>\n",
    "overview": "",
    "metadata": {
      "published_date": "OCT 6 2022 07:36 UTC+8",
      "tags": [
        "angular-readme"
      ]
    }
  },
  {
    "title": "Mini Docs - Sample Date Authors",
    "markedTitle": "<h1 id=\"mini-docs---sample-date-authors\">Mini Docs - Sample Date Authors</h1>\n",
    "timeToRead": "1 min read",
    "content": "<h1 id=\"mini-docs---sample-date-authors\">Mini Docs - Sample Date Authors</h1>\n<p>The <strong>Authors</strong> is written here as <strong>inline</strong> and <strong>array</strong></p>\n<p>This will contain Samples for Author And Date</p>\n<p>This is the content.</p>\n<pre><code class=\"language-yaml\">authors:\n  - name: John Smith\n    title: Software Engineer\n  - name: Jane Doe\n    title: Software Engineer\ndate: OCT 5 2022 09:35 UTC+8\n</code></pre>\n",
    "truncatedContent": "<p>This will contain Samples for Author And Date</p>\n<p>This is the content.</p>\n<pre><code class=\"language-yaml\">authors:\n  - name: John Smith\n    title: Software Engineer\n  - name: Jane Doe\n    title: Software Engineer\ndate: OCT 5 2022 09:35 UTC+8\n</code></pre>\n",
    "titleOverview": "<h1 id=\"mini-docs---sample-date-authors\">Mini Docs - Sample Date Authors</h1>\n<p>The <strong>Authors</strong> is written here as <strong>inline</strong> and <strong>array</strong></p>\n",
    "overview": "<p>The <strong>Authors</strong> is written here as <strong>inline</strong> and <strong>array</strong></p>\n",
    "metadata": {
      "authors": [
        {
          "name": "John Smith",
          "title": "Software Engineer"
        },
        {
          "name": "Jane Doe",
          "title": "Software Engineer"
        }
      ],
      "published_date": "OCT 5 2022 09:35 UTC+8",
      "tags": [
        "mini-docs",
        "author",
        "multiple",
        "inline"
      ]
    }
  },
  {
    "title": "Mini Docs - Authors Single Inline",
    "markedTitle": "<h1 id=\"mini-docs---authors-single-inline\">Mini Docs - Authors Single Inline</h1>\n",
    "timeToRead": "1 min read",
    "content": "<h1 id=\"mini-docs---authors-single-inline\">Mini Docs - Authors Single Inline</h1>\n<p>This will contain an author <strong>inline</strong> but not an array.</p>\n<pre><code class=\"language-yaml\">authors:\n  name: Lightzane\n  title: Heaven\n</code></pre>\n",
    "truncatedContent": "<p>This will contain an author <strong>inline</strong> but not an array.</p>\n<pre><code class=\"language-yaml\">authors:\n  name: Lightzane\n  title: Heaven\n</code></pre>\n",
    "titleOverview": "<h1 id=\"mini-docs---authors-single-inline\">Mini Docs - Authors Single Inline</h1>\n",
    "overview": "",
    "metadata": {
      "authors": {
        "name": "Lightzane",
        "title": "Heaven"
      },
      "tags": [
        "mini-docs",
        "author",
        "single",
        "inline"
      ]
    }
  },
  {
    "title": "Mini Docs - Global Authors",
    "markedTitle": "<h1 id=\"mini-docs---global-authors\">Mini Docs - Global Authors</h1>\n",
    "timeToRead": "1 min read",
    "content": "<h1 id=\"mini-docs---global-authors\">Mini Docs - Global Authors</h1>\n<p>The <strong>Authors</strong> here is coming from a global <code>authors.yml</code></p>\n<p><strong>sample.md</strong></p>\n<pre><code class=\"language-yaml\">authors: [janedoe, johnsmith]\ntags: [mini-docs, author, global]\n</code></pre>\n<p><strong>.docs/authors.yml</strong></p>\n<pre><code class=\"language-yml\">johnsmith:\n  name: John Smith\n  title: Software Engineer\n  image_url: https://github.com/lightzane.png\n\njanedoe:\n  name: Jane Doe\n  title: Software Engineer\n  image_url: https://github.com/lightzane.png\n</code></pre>\n",
    "truncatedContent": "<p><strong>sample.md</strong></p>\n<pre><code class=\"language-yaml\">authors: [janedoe, johnsmith]\ntags: [mini-docs, author, global]\n</code></pre>\n<p><strong>.docs/authors.yml</strong></p>\n<pre><code class=\"language-yml\">johnsmith:\n  name: John Smith\n  title: Software Engineer\n  image_url: https://github.com/lightzane.png\n\njanedoe:\n  name: Jane Doe\n  title: Software Engineer\n  image_url: https://github.com/lightzane.png\n</code></pre>\n",
    "titleOverview": "<h1 id=\"mini-docs---global-authors\">Mini Docs - Global Authors</h1>\n<p>The <strong>Authors</strong> here is coming from a global <code>authors.yml</code></p>\n",
    "overview": "<p>The <strong>Authors</strong> here is coming from a global <code>authors.yml</code></p>\n",
    "metadata": {
      "authors": [
        {
          "name": "Jane Doe",
          "title": "Software Engineer",
          "image_url": "https://github.com/lightzane.png"
        },
        {
          "name": "John Smith",
          "title": "Software Engineer",
          "image_url": "https://github.com/lightzane.png"
        }
      ],
      "tags": [
        "author",
        "global"
      ]
    }
  },
  {
    "title": "Mini Docs - Sample Truncate",
    "markedTitle": "<h1 id=\"mini-docs---sample-truncate\">Mini Docs - Sample Truncate</h1>\n",
    "timeToRead": "1 min read",
    "content": "<h1 id=\"mini-docs---sample-truncate\">Mini Docs - Sample Truncate</h1>\n<p>Content will be here.</p>\n<p>This content is displayed because there is a truncate below this line.</p>\n<p>This is the content that will be displayed after clicking <code>Read more</code></p>\n<p>The content above the <code>&lt;!-- truncate --&gt;</code> will be displayed as a summary</p>\n",
    "truncatedContent": "<p>This is the content that will be displayed after clicking <code>Read more</code></p>\n<p>The content above the <code>&lt;!-- truncate --&gt;</code> will be displayed as a summary</p>\n",
    "titleOverview": "<h1 id=\"mini-docs---sample-truncate\">Mini Docs - Sample Truncate</h1>\n<p>Content will be here.</p>\n<p>This content is displayed because there is a truncate below this line.</p>\n",
    "overview": "<p>Content will be here.</p>\n<p>This content is displayed because there is a truncate below this line.</p>\n",
    "metadata": {
      "tags": [
        "mini-docs"
      ]
    }
  },
  {
    "title": "Book Title",
    "markedTitle": "<h1 id=\"book-title\">Book Title</h1>\n",
    "timeToRead": "1 min read",
    "content": "<h1 id=\"book-title\">Book Title</h1>\n<p>This will be displayed as a summary</p>\n<p>The content will be here</p>\n",
    "truncatedContent": "<p>The content will be here</p>\n",
    "titleOverview": "<h1 id=\"book-title\">Book Title</h1>\n<p>This will be displayed as a summary</p>\n",
    "overview": "<p>This will be displayed as a summary</p>\n",
    "metadata": {
      "tags": [
        "book-title"
      ]
    }
  },
  {
    "title": "Book Title - Chapter 1",
    "markedTitle": "<h1 id=\"book-title---chapter-1\">Book Title - Chapter 1</h1>\n",
    "timeToRead": "1 min read",
    "content": "<h1 id=\"book-title---chapter-1\">Book Title - Chapter 1</h1>\n<p>This has no <code>published_date</code> so they will be sorted out based on file name.</p>\n<p>This also has a <strong>custom</strong> metadata <code>hidden</code> set to true. (Customized to be hidden in the table of content above)</p>\n<p>Content for chapter 1</p>\n<p>We can add custom metadata and can be accessed via <code>MarkdownDocument.metadata</code> field</p>\n",
    "truncatedContent": "<p>Content for chapter 1</p>\n<p>We can add custom metadata and can be accessed via <code>MarkdownDocument.metadata</code> field</p>\n",
    "titleOverview": "<h1 id=\"book-title---chapter-1\">Book Title - Chapter 1</h1>\n<p>This has no <code>published_date</code> so they will be sorted out based on file name.</p>\n<p>This also has a <strong>custom</strong> metadata <code>hidden</code> set to true. (Customized to be hidden in the table of content above)</p>\n",
    "overview": "<p>This has no <code>published_date</code> so they will be sorted out based on file name.</p>\n<p>This also has a <strong>custom</strong> metadata <code>hidden</code> set to true. (Customized to be hidden in the table of content above)</p>\n",
    "metadata": {
      "tags": [
        "book-title"
      ],
      "hidden": true
    }
  },
  {
    "title": "Page 2",
    "markedTitle": "<h1 id=\"page-2\">Page 2</h1>\n",
    "timeToRead": "1 min read",
    "content": "<h1 id=\"page-2\">Page 2</h1>\n<p>This is the Page 2</p>\n<p>This also has a <strong>custom</strong> metadata <code>hidden</code> set to true. (Customized to be hidden in the table of content above)</p>\n<p>Content for page 2</p>\n",
    "truncatedContent": "<p>Content for page 2</p>\n",
    "titleOverview": "<h1 id=\"page-2\">Page 2</h1>\n<p>This is the Page 2</p>\n<p>This also has a <strong>custom</strong> metadata <code>hidden</code> set to true. (Customized to be hidden in the table of content above)</p>\n",
    "overview": "<p>This is the Page 2</p>\n<p>This also has a <strong>custom</strong> metadata <code>hidden</code> set to true. (Customized to be hidden in the table of content above)</p>\n",
    "metadata": {
      "tags": [
        "book-title"
      ],
      "hidden": true
    }
  },
  {
    "title": "Page 3",
    "markedTitle": "<h1 id=\"page-3\">Page 3</h1>\n",
    "timeToRead": "1 min read",
    "content": "<h1 id=\"page-3\">Page 3</h1>\n<p>This is the Page 3 content summary will be here.</p>\n<p>This also has a <strong>custom</strong> metadata <code>hidden</code> set to true. (Customized to be hidden in the table of content above)</p>\n<p>Content for page 3 body content is here</p>\n",
    "truncatedContent": "<p>Content for page 3 body content is here</p>\n",
    "titleOverview": "<h1 id=\"page-3\">Page 3</h1>\n<p>This is the Page 3 content summary will be here.</p>\n<p>This also has a <strong>custom</strong> metadata <code>hidden</code> set to true. (Customized to be hidden in the table of content above)</p>\n",
    "overview": "<p>This is the Page 3 content summary will be here.</p>\n<p>This also has a <strong>custom</strong> metadata <code>hidden</code> set to true. (Customized to be hidden in the table of content above)</p>\n",
    "metadata": {
      "tags": [
        "book-title"
      ],
      "hidden": true
    }
  },
  {
    "title": "Mini Docs - Time To Read",
    "markedTitle": "<h1 id=\"mini-docs---time-to-read\">Mini Docs - Time To Read</h1>\n",
    "timeToRead": "2 min read",
    "content": "<h1 id=\"mini-docs---time-to-read\">Mini Docs - Time To Read</h1>\n<p>The average <code>wpm</code> is set to <strong>200</strong></p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n",
    "truncatedContent": "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis esse maxime aliquid sint officiis dolor molestias distinctio. Voluptate obcaecati velit, eos totam nemo rem eaque id quas deserunt explicabo!</p>\n",
    "titleOverview": "<h1 id=\"mini-docs---time-to-read\">Mini Docs - Time To Read</h1>\n<p>The average <code>wpm</code> is set to <strong>200</strong></p>\n",
    "overview": "<p>The average <code>wpm</code> is set to <strong>200</strong></p>\n",
    "metadata": {
      "tags": [
        "mini-docs"
      ]
    }
  },
  {
    "title": "December 4th",
    "markedTitle": "<h1 id=\"december-4th\">December 4th</h1>\n",
    "timeToRead": "1 min read",
    "content": "<h1 id=\"december-4th\">December 4th</h1>\n<p>Contains some notes on how to highlight the codes.</p>\n<h2 id=\"to-highlight\">To highlight</h2>\n<p><code>https://highlightjs.org/usage/</code></p>\n<pre><code class=\"language-html\">&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/atom-one-dark.min.css&quot;&gt;\n&lt;script src=&quot;https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/highlight.min.js&quot;&gt;&lt;/script&gt;\n&lt;script&gt;hljs.highlightAll()&lt;/script&gt;\n</code></pre>\n<p><strong>sample.html</strong></p>\n<pre><code class=\"language-html\">&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n  &lt;head&gt;\n    &lt;meta charset=&quot;UTF-8&quot; /&gt;\n    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; /&gt;\n    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;\n    &lt;title&gt;mini-docs&lt;/title&gt;\n    &lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot; /&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;\n    &lt;script src=&quot;list.js&quot;&gt;&lt;/script&gt;\n    &lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;\n  &lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n<p><strong>sample.js</strong></p>\n<pre><code class=\"language-ts\">const root = document.getElementById(&#39;root&#39;);\n\nlist.forEach((item) =&gt; {\n  const div = document.createElement(&#39;div&#39;);\n  div.classList.add(&#39;marked-list&#39;);\n  div.innerHTML = item.content;\n  root.append(div);\n});\n</code></pre>\n<p><strong>sample.css</strong></p>\n<pre><code class=\"language-css\">body {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto,\n    Oxygen, Ubuntu, Cantarell, &#39;Open Sans&#39;, &#39;Helvetica Neue&#39;, sans-serif;\n}\n\nimg {\n  max-width: 100%;\n}\n</code></pre>\n",
    "truncatedContent": "<h2 id=\"to-highlight\">To highlight</h2>\n<p><code>https://highlightjs.org/usage/</code></p>\n<pre><code class=\"language-html\">&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/atom-one-dark.min.css&quot;&gt;\n&lt;script src=&quot;https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/highlight.min.js&quot;&gt;&lt;/script&gt;\n&lt;script&gt;hljs.highlightAll()&lt;/script&gt;\n</code></pre>\n<p><strong>sample.html</strong></p>\n<pre><code class=\"language-html\">&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n  &lt;head&gt;\n    &lt;meta charset=&quot;UTF-8&quot; /&gt;\n    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; /&gt;\n    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;\n    &lt;title&gt;mini-docs&lt;/title&gt;\n    &lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot; /&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;\n    &lt;script src=&quot;list.js&quot;&gt;&lt;/script&gt;\n    &lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;\n  &lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n<p><strong>sample.js</strong></p>\n<pre><code class=\"language-ts\">const root = document.getElementById(&#39;root&#39;);\n\nlist.forEach((item) =&gt; {\n  const div = document.createElement(&#39;div&#39;);\n  div.classList.add(&#39;marked-list&#39;);\n  div.innerHTML = item.content;\n  root.append(div);\n});\n</code></pre>\n<p><strong>sample.css</strong></p>\n<pre><code class=\"language-css\">body {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto,\n    Oxygen, Ubuntu, Cantarell, &#39;Open Sans&#39;, &#39;Helvetica Neue&#39;, sans-serif;\n}\n\nimg {\n  max-width: 100%;\n}\n</code></pre>\n",
    "titleOverview": "<h1 id=\"december-4th\">December 4th</h1>\n<p>Contains some notes on how to highlight the codes.</p>\n",
    "overview": "<p>Contains some notes on how to highlight the codes.</p>\n"
  },
  {
    "title": "December 5th",
    "markedTitle": "<h1 id=\"december-5th\">December 5th</h1>\n",
    "timeToRead": "1 min read",
    "content": "<h1 id=\"december-5th\">December 5th</h1>\n<p>This is the content from 5th December</p>\n<p><img src=\"Avatar_world_map.webp\" alt=\"\"></p>\n",
    "truncatedContent": "<p>This is the content from 5th December</p>\n<p><img src=\"Avatar_world_map.webp\" alt=\"\"></p>\n",
    "titleOverview": "<h1 id=\"december-5th\">December 5th</h1>\n",
    "overview": ""
  }
]
