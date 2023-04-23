const express=require("express")
const adsModel=require("../Model/post.model")

const route=express.Router()

route.post("/add",async(req,res)=>{
    const {companyId,primaryText,headline,description,CTA,companyname,url,imageUrl}=req.body

    try {
        const user=new adsModel({companyId,primaryText,headline,description,companyname,CTA,url,imageUrl})
        await user.save()
        res.status(200).send({"msg": "Post Added"})
    } catch (error) {
        res.status(400).send({"msg": error.message})
    }
})

route.post("/postdata",async(req,res)=>{
    // const {companyname, primaryText, headline,  description}=req.body
    const {value}=req.body
    try {
        const user=await adsModel.aggregate([{ $match: { $or: [ { companyname: value }, { description: value }, {primaryText: value},{headline: value} ] } }])
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send({"msg": error.message})
    }
})

// [{$match:{companyname: companyname, description: description, primaryText: primaryText, headline: headline}}]


route.get("/getdata",async(req,res)=>{
    
    try {
        const user=await adsModel.find()
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send({"msg": error.message})
    }
})

module.exports=route