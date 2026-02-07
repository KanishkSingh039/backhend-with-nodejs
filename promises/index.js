function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}//Promise gives two thing , resolve and reject 
//resolve solves the task and reject reject the particular condition or task , reject just needs the reson to reject;
//we have to use then block to get the output from the resolve

delay(2000).then(() => console.log('promise resolve after 2000 ms'));

function devision(n1, n2) {
    return new Promise((resolve, reject) => {
        if (n2 === 0) {
            reject('can not devide by 0');
        }
        else {
            resolve(n1 / n2);
        }
    })
}

console.log('division value');
devision(4, 0).then(result => console.log(result)).catch(err => console.log(err))
