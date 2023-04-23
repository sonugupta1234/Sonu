const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
   companyId: Number,
   primaryText: String,
   headline: String,
   description: String,
   CTA: String,
   companyname: String,
   imageUrl: String,
   url: String
   
})

const adsModel=mongoose.model("ads",userSchema)

module.exports=adsModel