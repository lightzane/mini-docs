/** Contains the result when running `npm start` */
const list = [
    {
        title: 'Some File\r',
        content: '<h1 id="some-file">Some File</h1>\n' +
            '<p>This is coming from September</p>\n' +
            '<h2 id="contents">Contents</h2>\n' +
            '<ol>\n' +
            '<li><a href="#development-server">Development Server</a></li>\n' +
            '<li><a href="#code-scaffolding">Code Scaffolding</a></li>\n' +
            '<li><a href="#build">Build</a></li>\n' +
            '<li><a href="#running-unit-tests">Running Unit Tests</a></li>\n' +
            '<li><a href="#running-end-to-end-tests">E2E</a></li>\n' +
            '<li><a href="#further-help">Further Help</a></li>\n' +
            '</ol>\n' +
            '<h2 id="development-server">Development server</h2>\n' +
            '<p>Run <code>ng serve</code> for a dev server. Navigate to <code>http://localhost:4200/</code>. The app will automatically reload if you change any of the source files.</p>\n' +
            '<h2 id="code-scaffolding">Code scaffolding</h2>\n' +
            '<p>Run <code>ng generate component component-name</code> to generate a new component. You can also use <code>ng generate directive|pipe|service|class|guard|interface|enum|module</code>.</p>\n' +
            '<h2 id="build">Build</h2>\n' +
            '<p>Run <code>ng build</code> to build the project. The build artifacts will be stored in the <code>dist/</code> directory. Use the <code>--prod</code> flag for a production build.</p>\n' +
            '<h2 id="running-unit-tests">Running unit tests</h2>\n' +
            '<p>Run <code>ng test</code> to execute the unit tests via <a href="https://karma-runner.github.io">Karma</a>.</p>\n' +
            '<h2 id="running-end-to-end-tests">Running end-to-end tests</h2>\n' +
            '<p>Run <code>ng e2e</code> to execute the end-to-end tests via <a href="http://www.protractortest.org/">Protractor</a>.</p>\n' +
            '<h2 id="further-help">Further help</h2>\n' +
            '<p>To get more help on the Angular CLI use <code>ng help</code> or go check out the <a href="https://angular.io/cli">Angular CLI Overview and Command Reference</a> page.</p>\n'
    },
    {
        title: 'December 4th\r',
        content: '<h1 id="december-4th">December 4th</h1>\n' +
            '<p>This is the content from 4th October</p>\n' +
            '<p><strong>sample.html</strong></p>\n' +
            '<pre><code class="language-html">&lt;!DOCTYPE html&gt;\n' +
            '&lt;html lang=&quot;en&quot;&gt;\n' +
            '  &lt;head&gt;\n' +
            '    &lt;meta charset=&quot;UTF-8&quot; /&gt;\n' +
            '    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; /&gt;\n' +
            '    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;\n' +
            '    &lt;title&gt;mini-docs&lt;/title&gt;\n' +
            '    &lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot; /&gt;\n' +
            '  &lt;/head&gt;\n' +
            '  &lt;body&gt;\n' +
            '    &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;\n' +
            '    &lt;script src=&quot;list.js&quot;&gt;&lt;/script&gt;\n' +
            '    &lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;\n' +
            '  &lt;/body&gt;\n' +
            '&lt;/html&gt;\n' +
            '</code></pre>\n' +
            '<p><strong>sample.js</strong></p>\n' +
            '<pre><code class="language-ts">const root = document.getElementById(&#39;root&#39;);\n' +
            '\n' +
            'list.forEach((item) =&gt; {\n' +
            '  const div = document.createElement(&#39;div&#39;);\n' +
            '  div.classList.add(&#39;marked-list&#39;);\n' +
            '  div.innerHTML = item.content;\n' +
            '  root.append(div);\n' +
            '});\n' +
            '</code></pre>\n' +
            '<p><strong>sample.css</strong></p>\n' +
            '<pre><code class="language-css">body {\n' +
            '  font-family: system-ui, -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto,\n' +
            '    Oxygen, Ubuntu, Cantarell, &#39;Open Sans&#39;, &#39;Helvetica Neue&#39;, sans-serif;\n' +
            '}\n' +
            '\n' +
            'img {\n' +
            '  max-width: 100%;\n' +
            '}\n' +
            '</code></pre>\n'
    },
    {
        title: 'December 5th\r',
        content: '<h1 id="december-5th">December 5th</h1>\n' +
            '<p>This is the content from 5th October</p>\n' +
            '<p><img src="Avatar_world_map.webp" alt=""></p>\n'
    }
]
