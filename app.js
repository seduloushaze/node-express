const fs = require('fs');
const data = fs.readFileSync('./folder/subfolder/bleh.txt', 'utf-8')
console.log(data);