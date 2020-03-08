const path = require('path')
const marked = require('marked')
const renderer = new marked.Renderer();
const highlightjs = require('highlight.js')
var fs = require("fs")
var str = fs.readFileSync("./src/markdown/bookmarks.md", "utf8")
// const style1 = fs.readFileSync('./node_modules/highlight.js/styles/solarized-dark.css', "utf8");

marked.setOptions({
    highlight: function(code) {
      return highlightjs.highlightAuto(code).value;
    }
  });
const bookmarks = `
${marked(str)}
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum congue erat a elementum. 
    Fusce accumsan, ante non elementum imperdiet, risus mauris malesuada sem, at fermentum libero tellus eu odio. 
    Etiam in justo varius, rhoncus lacus quis, accumsan turpis. 
    Curabitur facilisis rutrum diam id lobortis. 
    Aenean vitae mi at mi euismod tempus et vel purus. 
    Ut id sapien elit. Fusce egestas justo vitae turpis accumsan, vel vulputate dui consequat. 
</p>
`;

module.exports = bookmarks;
