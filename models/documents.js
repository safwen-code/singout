const mongoose =require("mongoose")
const Schema = mongoose.Schema

const docSchema = new Schema({

    titel:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    rates:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

})
module.exports=Document=mongoose.model('document',docSchema)