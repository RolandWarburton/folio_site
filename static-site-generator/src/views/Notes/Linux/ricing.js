const marked = require('marked')
const content =
`
# Resources for inspiration
* [eti desktops collection](https://eti.tf/desktops/)
`

const ricing = `
<article class="emLinks">
    ${marked(content)}
</article>
`;

module.exports = ricing;
