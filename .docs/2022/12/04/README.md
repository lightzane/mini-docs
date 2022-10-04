# December 4th

This is the content from 4th December

**sample.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>mini-docs</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div id="root"></div>
    <script src="list.js"></script>
    <script src="main.js"></script>
  </body>
</html>
```

**sample.js**

```ts
const root = document.getElementById('root');

list.forEach((item) => {
  const div = document.createElement('div');
  div.classList.add('marked-list');
  div.innerHTML = item.content;
  root.append(div);
});
```

**sample.css**

```css
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

img {
  max-width: 100%;
}
```