const express = require("express");
const AuthModel = require("../Models/auth.model");
const app = express.Router();


app.get("/",async(req,res)=>{
  let user=await AuthModel.find();
  return res.send(user);
})

app.post("/register", async (req, res) => {
    const {name,email,password}=req.body;
  try {
    const finduser = await AuthModel.findOne({email});
    if(finduser){
        return res.send({msg:"Try another email",status:false})
    }else{
      if(email.includes("@masaischool.com")){
       let detail= await AuthModel.create({name,email,password,role:"Admin"});
        return res.send({msg:"Signup successful",status:true,detail})
      }else{
       let detail= await AuthModel.create({name,email,password,role:"User"});
        return res.send({msg:"Signup successful",status:true,detail})
      }
    }
  } catch (error) {
    return res.send(error.message);
  }
});

app.post("/login", async (req, res) => {
    const {email,password}=req.body;
  try {
    const finduser = await AuthModel.findOne({email});
    if(finduser){
        if(finduser.password===password){
            return res.send({msg:"Login successful",status:true})
        }
        return res.send({msg:"Wrong Password",status:false})
    }else{
        return res.send({msg:"User is not Registered",status:false})
    }
  } catch (error) {
    return res.send(error.message);
  }
});

module.exports = app;
