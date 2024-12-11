import Student from "../Models/studentmodel.js";

// Create a student
export const createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(200).json({ message: 'Student created successfully', data: student });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all students
export const getStudent = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({ message: 'Students retrieved successfully', data: students });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Edit a student
export const editStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student updated successfully', data: updatedStudent });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a student
export const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStudent = await Student.findByIdAndDelete(id);
        if (!deletedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully', data: deletedStudent });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};