const express=require("express")
const app=express()
const cors=require('cors')
require("dotenv").config()

const connection=require("./Config/db")
const route=require("./Routes/post.routes")
app.use(express.json())
app.use(cors())
app.use("/posts",route)

app.listen(process.env.PORT,()=>{
    connection()
    console.log("Server Running")
})

module.exports=app