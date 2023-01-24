const express = require("express");
const JobModel = require("../Models/job.model");
const app = express.Router();

app.post("/",async(req,res)=>{
    const obj=req.body;

    try {
        let data =await JobModel.create(obj);
        return res.send({msg:"Job created successfully",status:true});
    } catch (error) {
        return res.send({msg:"Job creation failed",status:false});
    }
})

app.get("/",async(req,res)=>{
    
    try {
        let data =await JobModel.find();
        return res.send({data,status:true});
    } catch (error) {
        return res.send({msg:"Job creation failed",status:false});
    }
})

app.delete("/:id",async(req,res)=>{
    let id=req.params.id;
    try {
        await JobModel.findByIdAndDelete(id)
        return res.send({msg:"Job deleted successfully",status:true});
    } catch (error) {
        return res.send({msg:"Job deletion failed",status:false});
    }
})

app.patch("/:id",async(req,res)=>{
    let id=req.params.id;
    let obj=req.body;
    try {
        await JobModel.findByIdAndUpdate(id,obj,{new:true})
        return res.send({msg:"Job updated successfully",status:true});
    } catch (error) {
        return res.send({msg:"Job updation failed",status:false});
    }
})


app.get("/filter",async(req,res)=>{
    let obj=req.query;
    console.log(obj)
    try {
        let data =await JobModel.find(obj);
        return res.send({data,status:true});
    } catch (error) {
        return res.send({msg:"Job creation failed",status:false});
    }
})

module.exports = app;