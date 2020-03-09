const listFilesInDir = require('./partials/listFilesInDir')

const notes = `
<h1>Notes page</h1>
${listFilesInDir('notes/')}
`;

module.exports = notes;

