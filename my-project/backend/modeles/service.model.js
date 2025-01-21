import mongoose from "mongoose";

const serviceSchema=new mongoose.Schema({
    image:{type:String},
    title:{type:String},
    description:{type:String}
})

export default mongoose.model.service || mongoose.model("services",serviceSchema)