const listFilesInDir = require('../partials/listFilesInDir')

const tools = `
<script src="https://gist.github.com/RolandWarburton/d1709ec27e60333303e87a6ef4c783ab.js"></script>
<script src="https://gist.github.com/RolandWarburton/87317fece26d1bb3e1c289693d83c361.js"></script>
<script src="https://gist.github.com/RolandWarburton/33a44ba246da577cee2f16da502d7464.js"></script>
${listFilesInDir('notes/tools/')}
`;

module.exports = tools;

{/* <script src="https://gist.github.com/RolandWarburton/33a44ba246da577cee2f16da502d7464.js"></script> */ }