const marked = require('marked')
const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')

const markdownDir = path.resolve(process.cwd(), 'src/markdown/TNE30009_Network_Security_and_Resilience')

const Introduction = fs.readFileSync(path.resolve(markdownDir, 'Introduction.md'), 'utf8')
const W1_Lecture1 = fs.readFileSync(path.resolve(markdownDir, 'W1_Lecture1.md'), 'utf8')
const W1_Lecture2 = fs.readFileSync(path.resolve(markdownDir, 'W1_Lecture2.md'), 'utf8')
const W2_Lecture1 = fs.readFileSync(path.resolve(markdownDir, 'W2_Lecture1.md'), 'utf8')
const W2_Lecture2 = fs.readFileSync(path.resolve(markdownDir, 'W2_Lecture2.md'), 'utf8')

// TNE30009 Network Security and Resilience
module.exports = `
<article>
    ${marked(Introduction)}
    ${marked(W1_Lecture1)}
    ${marked(W1_Lecture2)}
    ${marked(W2_Lecture1)}
    ${marked(W2_Lecture2)}
</article>
`;

