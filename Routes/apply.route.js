const express = require("express");
const ApplyModel = require("../Models/apply.model");
const app = express.Router();


app.post("/",async(req,res)=>{
    const {userId,jobId}=req.body;
    try {
        let find=await ApplyModel.findOne({userId,jobId});

        if(find){
            return res.send({msg:"Already Applied",status :false})
        }else{
            let detail=await ApplyModel.create({userId,jobId})
            return res.send({msg:"Applied Successfully",status :true})
        }
    } catch (error) {
        return res.send({msg:"Applied Error",status :false})
    }
})


app.get("/",async(req,res)=>{

const {userId}=req.body;

    try {
        let find = await ApplyModel.find({userId}).populate("jobId");
        return res.send(find)
    } catch (error) {
        return res.send(error.message)
    }
})





module.exports =app;