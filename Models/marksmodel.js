import mongoose from "mongoose";

const marksSchema = new mongoose.Schema({

    marks: {
        type: Number,
        required: true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Student",
        required: true
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Subject",
        required: true
    },
})

const Marks = mongoose.model("marks", marksSchema);
export default Marks;