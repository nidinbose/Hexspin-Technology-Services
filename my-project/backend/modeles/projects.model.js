
import mongoose from "mongoose";

const projectSchema=new mongoose.Schema({
    photo:{type:String},
    name:{type:String},
    description:{type:String},
    link:{type:String}
})

export default mongoose.model.project || mongoose.model("projects",projectSchema)