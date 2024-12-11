import Subject from '../Models/subjectmodel.js'

export const createsubject = async (req, res)=> {
    try {
        const sub = new Subject(req.body);
 await sub.save();
        res.status(200).json({ message: 'student created successfully', data: sub })
        
    }
    catch (err) {
        res.status(500).json({message:err.message})
    }
    
}
export const getsubject = async (req, res) => {
    try {
        const subs = await Subject.find();
    res.status(200).json({ message: 'student created successfully', data: subs })
        
    }
    catch (err) {
        res.status(500).json({message:err.message})
    }
    
}