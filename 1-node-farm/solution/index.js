const fs = require('fs');

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is the text written by using fs.writeFileSync(). Today is ${Date.now()}`;

fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written!');
