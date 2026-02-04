const fs = require('fs');
const path = require('path');


const folderpath = path.join(__dirname, 'datafolder');
if (!fs.existsSync(folderpath)) {
    fs.mkdirSync(folderpath);
    console.log('folder created');
}
const filepath = path.join(folderpath, 'folderfile');
fs.writeFileSync(filepath, 'hello');
console.log('file created');


const content = fs.readFileSync(filepath, 'utf8');
console.log(content);
fs.appendFileSync(filepath, '\nWhats up?');


//Async filesystems

const asyncfolderpath = path.join(__dirname, 'Asyncfolder');
fs.mkdir(asyncfolderpath, (err) => {
    if (err) throw err;
    console.log("folder created");
});

const asyncfilepath = path.join(asyncfolderpath, 'asyncfile');
fs.writeFile(asyncfilepath, 'hello async', (err) => {
    if (err) throw err;
    console.log('file created');

});
fs.readFile(asyncfilepath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    fs.appendFile(asyncfilepath, '\n Whats up async', (err) => {
        if (err) throw err;
        console.log('line add');
    })
});