const root = document.getElementById('root');

list.forEach(item => {
    const div = document.createElement('div');
    const mid = document.createElement('div');
    const btn = document.createElement('button');
    const end = document.createElement('p');

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
