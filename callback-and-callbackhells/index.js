const fs = require('fs');
//Callbacks
function x(name, callbacks) {
    console.log(`${name}`);
    callbacks();
}

function y() {
    console.log('rendering');

}
x('kanishk', y);

fs.writeFile('input.txt', 'hello', (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('file created');

})
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);

})



//callbacks hell

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
    fs.writeFile('output.txt', 'output', (err) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log('outputfile created');
        fs.appendFile('output.txt', '\noutput append', (err) => {
            if (err) {
                console.error(err);
                return;
            }

            console.log('fill updated');

        })
    })

})