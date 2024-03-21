import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import imageDownloader from "image-downloader";
import Job from "./models/Job.js";
dotenv.config();
const app=express()
app.use(express.json());

app.use(cors({
    credentials:true,
    origin:'http://localhost:3000',
}))
const __dirname = fileURLToPath(dirname(import.meta.url));
app.use('/uploads', express.static(__dirname+'/uploads'));
// console.log(__dirname);
mongoose.connect(process.env.MONGO_URL)
app.get('/test',(req,res)=>{
    const searchText = req.query.searchText;
    res.json(searchText)
})

app.post('/upload-by-link',async(req,res) =>{
    const {link} = req.body;
    
    const newName= 'photo'+ Date.now()+'.jpg';
    await imageDownloader.image({
        url:link,
        dest:__dirname+newName,
    })
    res.json(newName);

})
app.post('/jobs',async(req,res)=>{
    const {jobtitle,joblocation,jobcompany,perks,salary,description}=req.body;
    try{
        const JobDoc=await Job.create({
            jobtitle,
            joblocation,
            jobcompany,
            perks,
            salary,
            description
        })
        res.json(JobDoc);
    }catch(err){
        res.status(422).json(err)
    }
})
app.put('/jobs',async(req,res)=>{
    const {id,jobtitle,joblocation,jobcompany,perks,salary,description}=req.body;
    try{
        const JobDoc=await Job.findById(id)
        JobDoc.set({
            jobtitle,
            joblocation,
            jobcompany,
            perks,
            salary,
            description
        })
        await JobDoc.save();
        res.json('ok');
    }catch(err){
        res.status(422).json(err)
    }
})
app.get('/jobs/:id',async (req,res)=>{
    const {id}=req.params;
    res.json(await Job.findById(id));
})
app.get('/jobs',async (req,res)=>{
    res.json( await Job.find() )
})
app.listen(4000);