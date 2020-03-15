const listFilesInDir = require('./partials/listFilesInDir')

const notes = `
${listFilesInDir('notes/')}
`;

module.exports = notes;

