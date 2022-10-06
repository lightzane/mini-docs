const root = document.getElementById('root');

const titles = [];

// ================================================================
// * Main Items
// ================================================================

list.forEach(item => {
    const div = document.createElement('div');
    const mid = document.createElement('div');
    const btn = document.createElement('button');
    const end = document.createElement('p');

    if (!item.metadata?.hidden) {
        titles.push(item.title);
    }

    div.classList.add('marked-list');
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
        end.innerHTML += '<br>Tags: ' + JSON.stringify(item.metadata.tags);
    }

    div.append(mid);
    div.append(btn);
    div.append(end);

    root.append(div);
});

// ================================================================
// * Table of Content
// ================================================================
const tocWrapper = document.createElement('div');
const toc = document.createElement('ol');

tocWrapper.classList.add('marked-list');
toc.classList.add('table-of-content');

titles.forEach((title) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${title.toLowerCase().replace(/\s/g, '-')}`;
    a.innerText = title;
    li.append(a);
    toc.append(li);
});

tocWrapper.append(toc);

root.prepend(tocWrapper);