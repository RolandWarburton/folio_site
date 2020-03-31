const marked = require('marked')
const renderer = new marked.Renderer();
const highlightjs = require('highlight.js')
var fs = require("fs")
const listFilesInDir = require('./partials/listFilesInDir')
var str = fs.readFileSync("./src/markdown/notes.md", "utf8")
// const style1 = fs.readFileSync('./node_modules/highlight.js/styles/solarized-dark.css', "utf8");

marked.setOptions({
  highlight: function (code) {
    return highlightjs.highlightAuto(code).value;
  }
});

const index = `


<main>
  <nav style="margin: 0">
    ${listFilesInDir('')}
  </nav>
</main>
`;

module.exports = index;

// ${marked('some markdown rendered by **marked**.')}
// ${marked(str)}
// <div class='avatar'></div>