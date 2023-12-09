# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

Namaste React

bundlers:
webpack
vite
parcel
et al

package.json:
package manager config
^ in front of version number means to auto upgrade (minor version)
~ in front of version number means to auto upgrade major version

package-lock.json:
tracks the latest version installed in your app
integrity is the hash which is used to ensure that the package is the same from dev to prod

node_modules:
contains all the installed code from npm
transitive dependencies - eg parcel is a dependency and has it's own dependencies

npx:
npx parcel index.html will start running the app in a browser
package executor
npx parcel index.html executes to a browser index.html

in your script tag add type="module"

parcel:

- dev build
- local server
- page auto refresh (HMR - hot module replacement)
- uses a File Watching Algorithm written in C++
- uses caching for faster builds
- Image optimization
- Minification
- Bundling
- Compression
- Content hashing
- Code splitting
- Differential bundling - cross-browser support
- Diagnostics
- Error handling
- secure hosting (HTTPS)
- Tree shaking - removes ununsed code
- Different dev and prod bundles

parcel - parceljs.org

parcel prod build - npx parcel build index.html
!! you will get an error until you modify the package.json by removing the line with "main"

browserslist:
you can say something like "last 2 chrome version" and it will guarantee to work in the last two versions of chrome 100%
https://browserslist.dev

scripts in package.json:
you can add script defs to start in dev mode or prod build
"start" is a default and will run your app in a browser

React elements:
similar to DOM elements

JSX:
javascript syntax to create react elements
it is not html even if it looks like it!
JSX is transpiled before it reaches the JS engine - Parcel is doing transpiling but it is does so using Babel
handles cross-site scripting attacks

React components:
two types:
class-based components

- old style (deprecated)
  functional components

React components can be written as an arrow function or as a standard JS function - for example:
const x = () { return ( <h1>test function</h1>)}
must use the return statement

with braces you can inject any JS expression
