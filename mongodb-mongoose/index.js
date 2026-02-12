const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kanishks_039:kanishks_039@cluster0.fgrqxzo.mongodb.net/').then(() => {
    console.log('database connected succesfully');
}).catch(e => {
    console.log(e);
})

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    description: [{ body: String, date: { type: Date, default: Date.now } }]
});

const user = mongoose.model('user', schema);
async function updating() {
    // const newuser = await user.create(
    //     {
    //         name: 'naman',
    //         age: 21,
    //         description: [{ body: 'hello' }]
    //     }
    // )
    // console.log(newuser);

    const model = await user.find({ name: 'naman' });
    console.log(model);
    // await user.save();
}
updating();

