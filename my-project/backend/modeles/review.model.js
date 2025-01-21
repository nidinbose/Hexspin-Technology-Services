import mongoose from "mongoose";

const reviewSchema=new mongoose.Schema({
    photo:{type:String},
    role:{type:String},
    name:{type:String},
    content:{type:String}
})

export default mongoose.model.review || mongoose.model("reviews",reviewSchema)