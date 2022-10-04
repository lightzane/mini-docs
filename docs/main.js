const root = document.getElementById('root');

list.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('marked-list');
    div.innerHTML = item.content;
    root.append(div);
});
