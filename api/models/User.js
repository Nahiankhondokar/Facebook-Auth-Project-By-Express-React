import mongoose from "mongoose";

// user schema
const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true, 
        trim : true
    }, 
    email : {
        type : String,
        required : true,
        unique : true, 
        trim : true
    }, 
    cell : {
        type : String,
        required : true,
        unique : true, 
        trim : true
    }, 
    gender : {
        type : String,
        required : true,
        trim : true
    },
    birthday : {
        type : Number
    },
    birthmonth : {
        type : String
    },
    birthyear : {
        type : Number
    },
    surname : {
        type : String,
        required : true,
        trim : true
    }, 
    password : {
        type : String,
        required : true, 
        trim : true
    }, 
    photo : {
        type : String,
        default : 'avatar.png'
    }, 
    isAdmin : {
        type : Boolean,
        default : false
    }, 
    status : {
        type : Boolean,
        default : true
    }, 
    trash : {
        type : Boolean,
        default : false
    }, 
}, {
    timestamps : true
});

export default mongoose.model('users', userSchema);