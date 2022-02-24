## File-based routing

- intuitive system, no extra code required
- file/folder structure within `/pages` determines routes
- navigate with `<Link />`
- `pages/index` used as homepage
- can create routes based on file name within root, or create a nested folder with path name(e.g. `portfolio`) and place index.js file within. Also supports other file names, like `portfolio/about-us`, as well as dynamic routes with `portfolio/[id].js`
