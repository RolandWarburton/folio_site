const listFilesInDir = require('../partials/listFilesInDir')

const bookmarks = `
<h1>Bookmarks</h1>
${listFilesInDir('notes/bookmarks/')}
`;

module.exports = bookmarks;
