const marked = require('marked')
const content = marked(
    `
    # Ricing
    * [eti desktops collection](https://eti.tf/desktops/)
    `    
) 

const ricing = `
<p>
    ${content}
</p>
`;

module.exports = ricing;
