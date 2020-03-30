const listFilesInDir = require('./listFilesInDir')
const path = require('path')

module.exports = (filepath) => {
	const files = listFilesInDir(filepath)
	const parsedFiles = []
	files.forEach((f) => {parsedFiles.push(path.parse(f).name)})

	return (
    `
    <ul class="darkHyperlink">
        ${parsedFiles.map((route, i) => `
        <li><a class="underline" href="${route}">${route}</a></li>
      `.trim()).join('')}
    </ul>
	`)
}
