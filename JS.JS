const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/vishnu');
    
const schema = new mongoose.Schema({
        name:String,
        class:Number
       })

const carete_data = async ()=>{
    const datas =  mongoose.model('datas',schema);
    let save_data = new datas({
        name:"himanshu",
        class:15
    })
    const result = save_data.save();
    console.log(await result);
    }; 
carete_data();

const deletedata =async ()=>{
   const datas =  mongoose.model('datas',schema);
   let deletes = await datas.deleteOne({name:"rohit"});
   console.log(deletes);
}
// deletedata();

const find_data = async ()=>{
    const datas =  mongoose.model('datas',schema);
    let deletes = await datas.find();
    console.log(deletes);
}; 
// find_data();

const updata_data = async ()=>{
    const datas =  mongoose.model('datas',schema);
    let deletes = await datas.updateOne(
        {name:'rakesh'},
        {$set:{class:6}}
    );
    console.log(deletes);
}; 
// updata_data();