const listFilesInDir = require('../partials/listFilesInDir')

module.exports = `
The sky was cloudless and of a deep dark blue
${listFilesInDir('notes/tools/')}
`;
