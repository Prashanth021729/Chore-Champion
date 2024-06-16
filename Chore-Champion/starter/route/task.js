const express = require('express')
const router = express.Router();
const {getAlltasks,createTask,getTask,updateTask,deletetask} = require('../controller/tasks')

router.route("/").get(getAlltasks).post(createTask)
router.route("/:id").get(getTask).delete(deletetask).patch(updateTask)

module.exports = router