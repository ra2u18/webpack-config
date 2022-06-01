<h1> Packages to install </h1>

<h2 style="color: peachpuff"> Add Webpack </h2>

`npm i -D webpack webpack-cli webpack-dev-server`

<h2 style="color: peachpuff"> Add Babel </h2>

`npm i -D babel-loader @babel/core @babel/preset-env`

<h2 style="color: peachpuff"> Add CSS </h2>

<b>The difference between style-loader and what we have below is that the forementioned one is injecting css, whereas css-loader is creating a global resource main.css file.</b>

`npm i -D css-loader mini-css-extract-plugin`

<h2 style="color: peachpuff"> Add SASS </h2>

`npm i -D sass sass-loader`

<h2 style="color: peachpuff"> Add PostCSS </h2>

These are used mostly for adding vendor prefixes https://caniuse.com/

`npm i -D postcss postcss-preset-env postcss-loader`

<h2 style="color: peachpuff"> Add React </h2>

`npm i react react-dom`

Transpile react

`npm i -D @babel/preset-react`

<h2 style="color: peachpuff"> Add Html Webpack plugin </h2>

`npm i -D html-webpack-plugin`

<h2 style="color: peachpuff"> Clean Webpack plugin </h2>

This plugin will take a package.json script and will append in front a cleaning script.
It's the same as having "build": "npm run clean && NODE_ENV=production webpack"

`npm i -D clean-webpack-plugin`

<h2 style="color: peachpuff"> React Hot Reloading </h2>

If we are hot reloading too much, you can add at the top of a jsx file
the following pragma command: `@refresh reset`

`npm install -D @pmmmwh/react-refresh-webpack-plugin react-refresh`
