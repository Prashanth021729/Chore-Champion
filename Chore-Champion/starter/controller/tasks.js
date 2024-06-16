const Task = require('../models/task')


const getAlltasks = async (req, res) =>{
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }catch(err){
        res.status(500).json({msg:err})
    }
}


const createTask = async (req, res) =>{
    try{
        const task =  await Task.create(req.body)
        res.status(201).json({task})
    }catch(err){
        res.status(400).json({msg: err})
    }   
}


const getTask = async (req, res) =>{
    try {
      const {id:taskID} = req.params
      const task = await Task.findOne({_id:taskID})
      
      if(!task){
        return res.status(404).json({msg:`no such task ${taskID}`})
      }
      res.status(200).json({task})  
    } catch (err) {
        res.status(500).json({msg:err})    
    }
}


const updateTask = async (req, res) =>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id: taskID},req.body,{
            new:true,
            runValidators:true,
            
        })
        if(!task){
            return res.status(404).json({msg:`no such task ${taskID}`})
          }
        res.status(200).json({task})    
    } catch (err) {
        res.status(404).json({msg:err})    
    }
}


const deletetask = async (req, res) =>{
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`no such task ${taskID}`})
          }
        res.status(200).json({id:task})
    }catch(err){
     res.status(404).json({msg:err})
    }    
}


module.exports = {
    getAlltasks,
    createTask,
    updateTask,
    deletetask,
    getTask,
}