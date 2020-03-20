const listFilesInDir = require('./partials/listFilesInDir')

const notes = `
${listFilesInDir('Notes/')}
`;

module.exports = notes;

