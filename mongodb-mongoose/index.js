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
    //         name: 'hey',
    //         age: 22,
    //         description: [{ body: 'hello' }]
    //     }
    // )
    // console.log(newuser);

    // const model = await user.find({ name: 'naman' });
    // console.log(model);
    // const findingbyid = await user.findById(newuser._id);
    // console.log("finded by id: ", findingbyid);
    // const findbyidandupdate = await user.findByIdAndUpdate(newuser.id, { name: 'Kanishk Singh' });
    // console.log(findbyidandupdate);
    // const finduser = await user.findById('698dfaff177fb2a8fdac4d67');
    // console.log(finduser);

    // const deleteuser = await user.findByIdAndDelete(newuser._id);
    // console.log(deleteuser);

    // const deleteuser = await user.findByIdAndDelete('698dfaff177fb2a8fdac4d67');
    //the here used id code is taken from mongodb database not from terminal    \
    // both the id are different
    // console.log('dleteduser: ', deleteuser);
    // const alluser = await user.find({});
    // console.log(alluser);

    // const countinguser = await user.countDocuments({ age: 22 });
    // console.log(countinguser);

    // const sortedlist = await user.find({}).sort({ age: 1 });//1 gives accending order
    // console.log(sortedlist);

    // const reversesortlist = await user.find({}).sort({ age: -1 });//-1 gives decending order
    // console.log(reversesortlist);

    // const sortedlist = await user.find({}).limit(2).skip(1);//skip takes the index of the elemnt to skip and limits take the number which decide the number element should be accesed
    // console.log(sortedlist);
    const selectedpropertis = await user.find().select("name age -_id");//- means ignoreing
    console.log(selectedpropertis);


    // await user.save();
}
updating();

