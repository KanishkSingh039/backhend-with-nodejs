const event = require('events');//expoeting the event-emitter function
const myemiter = new event();//creating a new event emitter which is use to handle the events , it consist of many methods like on, emit and some more

myemiter.on('start', () => {
    console.log('started');
});//on method takes the name of event(you can give any name ) and take a call back which will run when the that perticular event gets emit
myemiter.emit('start');//emit uses to call that event or to run the callback of a perticular  event just by taking the name of that event and any payload that callback needs


myemiter.on('timer', time => {
    setTimeout(() => console.log('timer completed')
        , time);
});
myemiter.emit('timer', 2000);