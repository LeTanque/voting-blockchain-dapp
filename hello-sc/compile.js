const path = require('path');
const fs = require('fs');
const solc = require('solc');
const helloPath = path.resolve(__dirname, 'contracts', 'hello.sol');
const source = fs.readFileSync(helloPath, 'UTF-8');
module.exports = solc.compile(source, 1).contracts[':Hello'];




// Latest version?
// const path = require('path');
// const fs = require('fs');
// const solc = require('solc');



// const helloPath = path.resolve(__dirname, 'contracts', 'hello.sol');
// const source = fs.readFileSync(helloPath, 'UTF-8');

// var input = {
//     language: 'Solidity',
//     sources: {
//         'hello.sol' : {
//             content: source
//         }
//     },
//     settings: {
//         outputSelection: {
//             '*': {
//                 '*': [ '*' ]
//             }
//         }
//     }
// }; 
// console.log(JSON.parse(solc.compile(JSON.stringify(input))));