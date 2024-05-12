const mongoose = require("mongoose")

const mondburl="mongodb+srv://ayushiguptaa2101:jMjARypBpBzGmF47@cluster0.erjgvii.mongodb.net/?retryWrites=true&w=majority"
const connectDB=()=>{
    return mongoose.connect(mondburl);
}
module.exports={connectDB};