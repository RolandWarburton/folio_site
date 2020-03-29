const marked = require('marked')
const renderer = new marked.Renderer();
const highlightjs = require('highlight.js')
const fs = require("fs")
const listFilesInDir = require('./partials/listFilesInDir')
const path = require('path')

const markdownDir = path.resolve(process.cwd(), 'src/markdown')

marked.setOptions({
  highlight: function (code) {
    return highlightjs.highlightAuto(code).value;
  }
});

module.exports = `
<main>
    ${listFilesInDir('')}
</main>
`;


// ${marked('some markdown rendered by **marked**.')}
// ${marked(str)}
// <div class='avatar'></div>