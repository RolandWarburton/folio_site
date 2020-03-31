const marked = require('marked')

const content =
`
# Rolands List of Linux knowledge
I aim to keep this list up to date with all the small gottchas and references to things ive 
picked up over time while working with linux.

<br/>

My Current configuration:<br/>
OS: Arch Linux<br/>
DE: openbox<br/>
Shell: zsh<br/>
Terminal: urxvt<br/>
Dots: [Dots!](https://github.com/RolandWarburton/dotfiles)
`
// html = marked.inlineLexer(content, []);

const linuxIntro = `
<article class="emLinks">
    ${marked(content)}
</article>
`;

module.exports = linuxIntro;
