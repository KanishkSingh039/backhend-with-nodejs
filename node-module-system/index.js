//in node module system there is root file which only gets run
// we have different different module which are reusable codes , they can be import in root file or in other module also
// it is just like react where we have one root component and child components , and all the child components are reusable and they can be import in the root component and also in other component

//module.exports->is a export
//require->is import
function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("division cant be possible by 0");
    }
    else {
        return a / b;
    }

}

module.exports = {
    add, substract, divide
}