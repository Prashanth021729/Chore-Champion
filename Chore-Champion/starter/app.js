const connectDB = require('./db/connect')
const express = require('express')
const app = express();
const tasks = require('./route/task')
require('dotenv').config()

//middle ware
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/task', tasks)

const port = 3000

const Start = async() =>{
  try{
    await connectDB(process.env.MONGO_URL)
    app.listen(port, console.log(`server listening on port ${port}`))
  }catch(err){
    console.log(err);
  }  
}

Start()