const root = document.getElementById('root');
const tocWrapper = document.createElement('div');
const toc = document.createElement('ol');
const tagWrapper = document.createElement('div');

tocWrapper.classList.add('marked-list');
toc.classList.add('table-of-content');
tagWrapper.classList.add('tags-list');

tocWrapper.innerHTML = '<h1>Table of Content</h1>';

root.append(tagWrapper);
root.append(tocWrapper);

let titles = [];
const tags = [];
// list is coming from 'list.js'
const mainlist = list;
let filtered = mainlist;

let selectedTag = '';

// list is coming from 'list.js'
list.forEach((item) => {
    if (item.metadata?.tags?.length) {
        item.metadata.tags.forEach((tag) => {
            if (!tags.includes(tag.toLowerCase())) {
                tags.unshift(tag.toLowerCase());
            }
        });
    }
});



// ================================================================
// * Tags
// ================================================================

tags.forEach((tag) => {

    const span = document.createElement('span');
    span.innerText = tag;
    span.classList.add('tags');
    tagWrapper.prepend(span);
    span.onclick = () => {
        // reset other spans
        const spans = document.querySelectorAll('.tags');
        spans.forEach(span => span.classList.remove('selected'));

        // update the view
        if (selectedTag === tag.toLowerCase()) {
            displayItems();
            span.classList.remove('selected');
            selectedTag = '';
        } else {
            selectedTag = tag.toLowerCase();
            displayItems(tag);
            span.classList.add('selected');
        }
    };
});


// ================================================================
// * Table of Content
// ================================================================

function displayToc() {

    toc.innerHTML = '';
    titles = [];

    filtered.forEach(item => {
        if (!item.metadata?.hidden) {
            titles.push(item.title);
        }
    });

    titles.forEach((title) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${title.toLowerCase().replace(/\s/g, '-')}`;
        a.innerText = title;
        li.append(a);
        toc.append(li);
    });

    tocWrapper.append(toc);

}

// ================================================================
// * Main Items
// ================================================================

function displayItems(tag) {

    const mainItem = document.querySelectorAll('.main-item');

    if (mainItem) {
        mainItem.forEach(item => item.remove());
    }

    filtered = !tag ? list : mainlist.filter(i => i.metadata?.tags?.includes(tag.toLowerCase()));

    filtered.forEach(item => {
        const div = document.createElement('div');
        const mid = document.createElement('div');
        const btn = document.createElement('button');
        const end = document.createElement('p');

        div.classList.add('marked-list');
        div.classList.add('main-item');

        mid.innerHTML = item.overview;

        btn.innerText = 'Read more';
        btn.onclick = () => {
            mid.innerHTML += item.truncatedContent;
            hljs.highlightAll();
            btn.hidden = true;
        };

        if (item.metadata?.authors?.length) {
            const authors = [];
            item.metadata.authors.forEach(author => {
                authors.push(author.name);
            });
            end.innerText = 'Authors: ' + JSON.stringify(authors);
        }

        end.innerHTML += '<br>Published Date: ' + (item.metadata?.published_date || '--');

        if (item.metadata?.tags?.length) {
            end.innerHTML += '<br><br>';
            item.metadata?.tags?.forEach((tag) => {
                const span = document.createElement('span');
                span.classList.add('tag');
                span.innerText = tag;
                end.append(span);
            });
        }

        div.append(mid);
        div.append(btn);
        div.append(end);

        root.append(div);
    });

    displayToc();
}

displayItems();
