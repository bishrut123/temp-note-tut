const path = require('path');


const filePath = path.join('/content/','subfolder', 'test.txt');

const base = path.basename(filePath)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

console.log("path.sep:")
console.log(path.sep)
console.log("path.join:")
console.log(filePath)
console.log("path.basename:")
console.log(base)
console.log("path.absolute:")
console.log(absolute)

