const root = document.getElementById('root');

list.forEach(item => {
    const div = document.createElement('div');
    const btn = document.createElement('button');
    const end = document.createElement('p');

    div.classList.add('marked-list');
    div.innerHTML = item.overview;

    btn.innerText = 'Read more';
    btn.onclick = () => {
        div.innerHTML = item.content;
        hljs.highlightAll();
    };

    if (item.metadata?.authors?.length) {
        const authors = [];
        item.metadata.authors.forEach(author => {
            authors.push(author.name);
        });
        end.innerText = 'Authors: ' + JSON.stringify(authors);
    }

    end.innerText += '-' + (item.metadata?.date || '');

    if (item.metadata?.tags?.length) {
        end.innerHTML += '<br>Tags: ' + JSON.stringify(item.metadata.tags);
    }

    div.append(btn);
    div.append(end);

    root.append(div);
});
