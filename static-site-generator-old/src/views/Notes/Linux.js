const marked = require('marked')
const listFilesInDir = require('../partials/listFilesInDir')

module.exports = `
${listFilesInDir('notes/linux')}
`;

