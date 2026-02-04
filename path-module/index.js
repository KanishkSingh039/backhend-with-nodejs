const path = require('path');
console.log(path.dirname(__filename));
// console.log(__dirname);
console.log(path.basename(__filename));
console.log(__filename);
console.log(path.extname(__filename));

const joinpath = path.join('/user', 'doc', 'index.js');
console.log(joinpath);

const normaliz = path.normalize("/user/.document/../index.js");
console.log(normaliz);