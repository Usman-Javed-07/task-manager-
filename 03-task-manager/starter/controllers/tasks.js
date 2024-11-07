const Task = require('../models/task')

const getAllTasks = async (req , res) => {
   try {
    const task = await Task.find({})
    res.status(200).json( {task })
   } catch (error) {
    res.status(500).json({msg: error})
   }
}


const createTask = async (req , res) => {
    
    try {
        const task = await Task.create(req.body)
        res.status(201).json( {task })
        
    } catch (error) {
        res.status(500).json({msg: error})
    }
}



// 



const getTask = async (req , res) => {

    try {
        const {id: taskID} = req.params
        const task = await Task.findOne({  _id:taskID})
        if(!task) {
            return res.status(404).json({msg:`No task with id ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}



// 
// const mongoose = require('mongoose');

// const getTask = async (req, res) => {
//     try {
//         const { id: taskID } = req.params;

//         // Check if the provided ID is a valid ObjectId
//         if (!mongoose.Types.ObjectId.isValid(taskID)) {
//             return res.status(404).json({ msg: `Invalid ID format: ${taskID}` });
//         }

//         // Use `findById` to find the document by its _id
//         const task = await Task.findById(taskID);
//         if (!task) {
//             return res.status(400).json({ msg: `No task found with ID ${taskID}` });
//         }

//         res.status(200).json({ task })
//     } catch (error) {
//         res.status(500).json({ msg: error.message });
//     }
// };





// 

const updateTask = (req , res) => {
    res.send('update task')
}


const deleteTask = (req , res) => {
    res.send('delete task')
}



module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}