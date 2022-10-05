const list = [
  {
    "title": "Some File",
    "content": "<h1 id=\"some-file\">Some File</h1>\n<p>This is coming from September</p>\n<h2 id=\"contents\">Contents</h2>\n<ol>\n<li><a href=\"#development-server\">Development Server</a></li>\n<li><a href=\"#code-scaffolding\">Code Scaffolding</a></li>\n<li><a href=\"#build\">Build</a></li>\n<li><a href=\"#running-unit-tests\">Running Unit Tests</a></li>\n<li><a href=\"#running-end-to-end-tests\">E2E</a></li>\n<li><a href=\"#further-help\">Further Help</a></li>\n</ol>\n<h2 id=\"development-server\">Development server</h2>\n<p>Run <code>ng serve</code> for a dev server. Navigate to <code>http://localhost:4200/</code>. The app will automatically reload if you change any of the source files.</p>\n<h2 id=\"code-scaffolding\">Code scaffolding</h2>\n<p>Run <code>ng generate component component-name</code> to generate a new component. You can also use <code>ng generate directive|pipe|service|class|guard|interface|enum|module</code>.</p>\n<h2 id=\"build\">Build</h2>\n<p>Run <code>ng build</code> to build the project. The build artifacts will be stored in the <code>dist/</code> directory. Use the <code>--prod</code> flag for a production build.</p>\n<h2 id=\"running-unit-tests\">Running unit tests</h2>\n<p>Run <code>ng test</code> to execute the unit tests via <a href=\"https://karma-runner.github.io\">Karma</a>.</p>\n<h2 id=\"running-end-to-end-tests\">Running end-to-end tests</h2>\n<p>Run <code>ng e2e</code> to execute the end-to-end tests via <a href=\"http://www.protractortest.org/\">Protractor</a>.</p>\n<h2 id=\"further-help\">Further help</h2>\n<p>To get more help on the Angular CLI use <code>ng help</code> or go check out the <a href=\"https://angular.io/cli\">Angular CLI Overview and Command Reference</a> page.</p>\n",
    "overview": "<h1 id=\"some-file\">Some File</h1>\n",
    "metadata": {
      "published_date": "OCT 5 2022 20:00 UTC+8",
      "tags": [
        "angular",
        "angular-readme"
      ]
    }
  },
  {
    "title": "Sample Date Authors",
    "content": "<h1 id=\"sample-date-authors\">Sample Date Authors</h1>\n<p>The <strong>Authors</strong> is written here as <strong>inline</strong> and <strong>array</strong></p>\n<p>This will contain Samples for Author And Date</p>\n<p>This is the content.</p>\n<pre><code class=\"language-yaml\">authors:\n  - name: John Smith\n    title: Software Engineer\n  - name: Jane Doe\n    title: Software Engineer\ndate: OCT 5 2022 09:35 UTC+8\n</code></pre>\n",
    "overview": "<h1 id=\"sample-date-authors\">Sample Date Authors</h1>\n<p>The <strong>Authors</strong> is written here as <strong>inline</strong> and <strong>array</strong></p>\n",
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
      "date": "OCT 5 2022 09:35 UTC+8",
      "tags": [
        "author",
        "multiple",
        "inline"
      ]
    }
  },
  {
    "title": "Authors Single Inline",
    "content": "<h1 id=\"authors-single-inline\">Authors Single Inline</h1>\n<p>This will contain an author <strong>inline</strong> but not an array.</p>\n<pre><code class=\"language-yaml\">authors:\n  name: Lightzane\n  title: Heaven\n</code></pre>\n",
    "overview": "<h1 id=\"authors-single-inline\">Authors Single Inline</h1>\n",
    "metadata": {
      "authors": {
        "name": "Lightzane",
        "title": "Heaven"
      },
      "tags": [
        "author",
        "single",
        "inline"
      ]
    }
  },
  {
    "title": "Global Authors",
    "content": "<h1 id=\"global-authors\">Global Authors</h1>\n<p>The <strong>Authors</strong> here is coming from a global <code>authors.yml</code></p>\n<p><strong>.docs/authors.yml</strong></p>\n<pre><code class=\"language-yml\">johnsmith:\n  name: John Smith\n  title: Software Engineer\n  image_url: https://github.com/lightzane.png\n\njanedoe:\n  name: Jane Doe\n  title: Software Engineer\n  image_url: https://github.com/lightzane.png\n</code></pre>\n",
    "overview": "<h1 id=\"global-authors\">Global Authors</h1>\n<p>The <strong>Authors</strong> here is coming from a global <code>authors.yml</code></p>\n",
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
    "title": "Sample Truncate",
    "content": "<h1 id=\"sample-truncate\">Sample Truncate</h1>\n<p>Content will be here.</p>\n<p>This content is displayed because there is a truncate below this line.</p>\n<p>This is the content that will be displayed after clicking <code>Read more</code></p>\n<p>The content above the <code>&lt;!-- truncate --&gt;</code> will be displayed as a summary</p>\n",
    "overview": "<h1 id=\"sample-truncate\">Sample Truncate</h1>\n<p>Content will be here.</p>\n<p>This content is displayed because there is a truncate below this line.</p>\n"
  },
  {
    "title": "December 4th",
    "content": "<h1 id=\"december-4th\">December 4th</h1>\n<p>Contains some notes on how to highlight the codes.</p>\n<h2 id=\"to-highlight\">To highlight</h2>\n<p><code>https://highlightjs.org/usage/</code></p>\n<pre><code class=\"language-html\">&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/atom-one-dark.min.css&quot;&gt;\n&lt;script src=&quot;https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/highlight.min.js&quot;&gt;&lt;/script&gt;\n&lt;script&gt;hljs.highlightAll()&lt;/script&gt;\n</code></pre>\n<p><strong>sample.html</strong></p>\n<pre><code class=\"language-html\">&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n  &lt;head&gt;\n    &lt;meta charset=&quot;UTF-8&quot; /&gt;\n    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; /&gt;\n    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;\n    &lt;title&gt;mini-docs&lt;/title&gt;\n    &lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot; /&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;\n    &lt;script src=&quot;list.js&quot;&gt;&lt;/script&gt;\n    &lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;\n  &lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n<p><strong>sample.js</strong></p>\n<pre><code class=\"language-ts\">const root = document.getElementById(&#39;root&#39;);\n\nlist.forEach((item) =&gt; {\n  const div = document.createElement(&#39;div&#39;);\n  div.classList.add(&#39;marked-list&#39;);\n  div.innerHTML = item.content;\n  root.append(div);\n});\n</code></pre>\n<p><strong>sample.css</strong></p>\n<pre><code class=\"language-css\">body {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto,\n    Oxygen, Ubuntu, Cantarell, &#39;Open Sans&#39;, &#39;Helvetica Neue&#39;, sans-serif;\n}\n\nimg {\n  max-width: 100%;\n}\n</code></pre>\n",
    "overview": "<h1 id=\"december-4th\">December 4th</h1>\n<p>Contains some notes on how to highlight the codes.</p>\n"
  },
  {
    "title": "December 5th",
    "content": "<h1 id=\"december-5th\">December 5th</h1>\n<p>This is the content from 5th December</p>\n<p><img src=\"Avatar_world_map.webp\" alt=\"\"></p>\n",
    "overview": "<h1 id=\"december-5th\">December 5th</h1>\n"
  }
]
