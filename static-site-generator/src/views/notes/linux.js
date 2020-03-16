const marked = require('marked')
const listFilesInDir = require('../partials/listFilesInDir')

const linux = `
${listFilesInDir('notes/linux')}
`;

module.exports = linux;
