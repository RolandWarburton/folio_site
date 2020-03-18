const marked = require('marked')
const fs = require('fs')
const path = require('path')

const markdownDir = path.resolve(process.cwd(), 'src/markdown')
const content = fs.readFileSync(path.resolve(markdownDir, 'A Journey in web development.md'), 'utf8')

const aJourneyInWebDev = `
<article>
${marked(content)}
</article>
`;

module.exports = aJourneyInWebDev;
