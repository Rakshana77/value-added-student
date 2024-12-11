import Marks from "../Models/marksmodel.js";
import Student from "../Models/studentmodel.js";
import Subject from "../Models/subjectmodel.js";
export const createmark = async (req, res) => {
    try{const mark = new Marks(req.body);
    await mark.save()
        res.status(200).json({ message: "marks created" ,data:mark})
    }
    catch (err) {
         res.status(500).json({ message:err.message })
    }
}
export const getmarks = async (req, res) => {
    try {
        const marks =await Marks.find().populate("Student","name").populate("Subject","name");
        res.status(200).json({ message: "marks got " ,data:marks})
    }
     catch (err) {
         res.status(500).json({ message:err.message })
    }
}