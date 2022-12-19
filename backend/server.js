import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"
import Cards from "./dbCards.js";

dotenv.config();

//App config
const app = express();
const port = process.env.PORT || 8001
app.use(express.json())
app.use(cors())

//middleware

//DB config
const connection_url = process.env.MONGODB_URL
mongoose.connect(connection_url,()=>{
    console.log(`Connected to db`);
})

//API endpoints
app.get('/', (req,res) => {
    res.status(200).send("Hello World");
})

app.get("/dating/cards",(req,res) => {
    Cards.find((err,data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post("/dating/cards",(req,res) => {
    console.log(req.body);
    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
})


//Listener
app.listen(port,()=>{
    console.log(`Listening on https://localhost:${port}`)
})