const marked = require('marked')

const csintro = `
<h1>CS Intro</h1>
`;

module.exports = csintro;

// cool example of async

// function square(x) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(Math.pow(x, 2));
//       }, 2000);
//     });
//   }

// async function layer(x) {
//     const value = await square(x);
//     console.log(value);
// }