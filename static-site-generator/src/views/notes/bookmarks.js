const listFilesInDir = require('../partials/listFilesInDir')

const bookmarks = `
${listFilesInDir('notes/bookmarks/')}
`;

module.exports = bookmarks;
