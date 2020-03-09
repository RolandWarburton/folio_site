const listFilesInDir = require('../partials/listFilesInDir')

const computerScience = `
<h1>CS Dir</h1>
${listFilesInDir('notes/computerScience/')}
`;
module.exports = computerScience;
