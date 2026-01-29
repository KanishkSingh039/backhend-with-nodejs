//every module is wrap inside the module wrapper before it gets executed
// node js automatically wrap the module inside the module wrapper function
// module wrapper function contains the some of parameters like exports , require,module,__filename,__dirname
//now you can under stand from where we get the require and module.exports
//module wrapper function
// (
//     function (exports, require, module, __filename, __dirname) {
//         //module
//     }
// )  this is how the module wrapper function looks like


//For example


console.log(__filename);//file name provides the path of this file
console.log(__dirname);//provide the path of directory or folder in which this file exists