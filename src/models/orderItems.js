const mongoose=require("mongoose")
const orderItemSchema=new mongoose.Schema({
    product:{
        type: mongoose.Schema.ObjectId,
        ref:'products',
        required:true,
    },
    size:{
        size: String,
       
        
    },
    quantity:{
        type: Number,
        required:true,
       
    },
    price:{
        type: Number,
        required:true,
        
    },
    discountedPrice:{
        type: Number,
        required:true,
        
    },
    userId:{
        type: mongoose.Schema.ObjectId,
        ref:'users',
        required:true,
    },
    deliveryDate:{
        type:Date,
    },
    
})

const OrderItem= mongoose.model('orderItems',orderItemSchema);
module.exports=OrderItem;