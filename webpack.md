# Webpack outline

* review [javascript course](https://www.udemy.com/the-complete-javascript-course) webpack section 9

```shell
> npm init
> npm install webpack --save-dev
> touch webpack.config.js
> add to webpack.config.js
```

```javascript
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output:{
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  }
}
```

```shell
> add to package.json file
```

```javascript
  "scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production"
}
```

```shell
-- create src files, index.js & test.js
> npm install webpack-cli --save-dev [install webpack-cli to enable running webpack scripts]
> npm run dev // after running the command, you'll find the bundle.js in the dist folder.
> create html file and add the bundle.js to the file
> open the html and see the output in the console.
> npm run build [for production build]
> npm install webpack-dev-server --save-dev [install dev server to automatically reload the page whenever there's a change]
> npm install fractional [converting from .75 > 3/4]
```
