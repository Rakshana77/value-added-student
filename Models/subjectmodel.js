import mongoose from "mongoose";
const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subjectid: {
        type: String,
        required: true,
        unique:true,
    }
})
const Subject = mongoose.model('subject', subjectSchema);
export default Subject