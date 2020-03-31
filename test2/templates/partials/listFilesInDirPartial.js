const listFilesInDir = require('../../build/listFilesInDir')
const path = require('path')

module.exports = (filepath, linkStyleClass="darkHyperLink") => {
	const files = listFilesInDir(filepath)
	const parsedFiles = []
	files.forEach((f) => {if (f != 'index.js') parsedFiles.push(path.parse(f).name)})

	return (
    `
    <ul class="darkHyperlink">
        ${parsedFiles.map((route, i) => `
        <li><a class="${linkStyleClass}" href="${route}">${route}</a></li>
      `.trim()).join('')}
    </ul>
	`)
}
