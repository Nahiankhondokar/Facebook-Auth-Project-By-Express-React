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
        trim : true
    }, 
    cell : {
        type : String,
        trim : true
    }, 
    gender : {
        type : String,
        required : true,
        trim : true
    },
    birth_day : {
        type : Number
    },
    birth_month : {
        type : String
    },
    birth_year : {
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
    isVerified : {
        type : Boolean,
        default : false
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