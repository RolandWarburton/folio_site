const marked = require('marked')
const fs = require('fs')
const path = require('path')
const hljs = require('highlight.js')
const codeStyles = fs.readFileSync(path.resolve(process.cwd(), 'node_modules/highlight.js/styles/an-old-hope.css'))


marked.setOptions({
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    }
});



const markdownDir = path.resolve(process.cwd(), 'src/markdown')
const content = fs.readFileSync(path.resolve(markdownDir, 'Web Components.md'), 'utf8')

// marked.setOptions({
//     highlight: function (code) {
//         return hljs.highlightAuto(code).value;
//     }
// });


const aJourneyInWebDev = `
<style>${codeStyles}</style>
<article>
    ${marked(content)}
</article>
`;

module.exports = aJourneyInWebDev;
