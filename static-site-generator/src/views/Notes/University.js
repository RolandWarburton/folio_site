const marked = require('marked')
const fetch = require('node-fetch')
const listFilesInDir = require('../partials/listFilesInDir')

const content = 
`
## A place for my university notes to live 
The notes here are usually a lot more '*stream of consciousness*' 
style and might one day be transferred to other, more meaningful directories. 
<br/><br/>
As i learn more about the topics i cover in classes and lectures and my understanding has become more 
holistic and self contained, i will rewrite them as a tool for reference, 
rather than as a tool for learning.
`

module.exports = `
<article>
    ${marked(content)}
</article>
${listFilesInDir('Notes/University', 'emLinks')}
`;


