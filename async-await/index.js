function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function delayGreet(name) {
    // delay(2000); without await the function work asynchronously , it will not wait for the task which are taking time , it will run the task first which are giving output directly , after that it will give the value of time taking task when that will give the value

    await delay(2000);
    console.log(name);

}
delayGreet('Kanishk');

async function division(n1, n2) {
    try {
        if (n2 === 0) throw new Error("can not divide by 0");
        else console.log(n1 / n2);


    } catch (error) {
        console.error(error);

    }
}
division(4, 2);
division(4, 0);


//async await is also like promise but it is much simple then that specially for the asynchronous code