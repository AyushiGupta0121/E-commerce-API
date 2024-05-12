const mongoose=require("mongoose")
const categorySchema=new mongoose.Schema({
    cart:{
        type: String,
        required:true,
        maxlength:50,
    },
    parentCategory:{
        type: mongoose.Schema.ObjectId,
        ref:'categories',
        required:true,
    },
    level:{
        type: Number,
        required:true,
        
    },
    
    
})

const Category= mongoose.model('categories',categorySchema);
module.exports=Category;