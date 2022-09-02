import mongoose from "mongoose";


// token schema
const TokenSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : true
    },
    token : {
        type : String,
        required : true
    },    
    secretKey : {
        type : Number,
        required : true
    }
}, {
    timestamps : true
});

export default mongoose.model("Token", TokenSchema);