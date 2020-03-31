const listFilesInDirPartial = require('../../templates/partials/listFilesInDirPartial')

const page = `
${listFilesInDirPartial("src/views")}
<br/>
Hello index :3
`;

module.exports = {
	page: page,
	target: "https://raw.githubusercontent.com/RolandWarburton/knowledge/master/Linux/gitOnLinux.md",
	template: "./templates/home.ejs"
};
