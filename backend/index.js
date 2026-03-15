import express from "express"
import dotenv from "dotenv"

dotenv.config()


const app = express()

app.use(express.json())

app.get("/",(req,res,next)=>{
    res.status(200).json({message:"Welcome"})
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})


