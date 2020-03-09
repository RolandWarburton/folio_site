const listFilesInDir = require('../partials/listFilesInDir')

const tools = `
<h1>Tools Dir</h1>
${listFilesInDir('notes/tools/')}
`;

module.exports = tools;
