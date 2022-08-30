import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import createError from "./errorController.js";

/**
 *  All user get
 *  @param Public
 *  @param get
 */
export const GetAllUser = async (req, res) => {
    
    const allUser = await User.find();
    res.status(200).json({
        allUser
    });

}

/**
 *  Create user
 *  @param Public
 *  @param post
 */
export const CreateUser = async (req, res, next) => {

    try {

        // has pass
        const salt = await bcrypt.genSalt();
        const has = await bcrypt.hash(req.body.password, salt);

        // create user
        await User.create({
            ...req.body, 
            password : has 
        }, { new : true });

        // message
        res.status(200).json({
            message : "User Created"
        });
        
    } catch (error) {
        
        next(error);
    
    }
}

/**
 *  Delete user
 *  @param Public
 *  @param get
 */
export const DeleteUser = async (req, res, next) => {

    try {
        // get id
        const id = req.params.id;
        await User.findByIdAndDelete(id);

        // message
        res.status(200).json({
            message : "User Deleted"
        });
    } catch (error) {
        next(error)
    }

}

/**
 *  Update user
 *  @param Public
 *  @param post
 */
export const UpdateUser = async (req, res, next) => {

    try {
        
        // has pass
        const salt = await bcrypt.genSalt();
        const has = await bcrypt.hash(req.body.password, salt);

        // get id
        const id = req.params.id;
        await User.findByIdAndUpdate(id, {
            ...req.body, 
            password : has
        });

        // message
        res.status(200).json({
            message : "User Updated"
        });
    } catch (error) {
        next(error);
    }

}


/**
 *  Single user get
 *  @param Public
 *  @param get
 */
 export const SingleUser = async (req, res) => {

    try {
        // get id 
        const id = req.params.id;
        const single = await User.findById(id);

        // message
        res.status(200).json({
            single
        });
    } catch (error) {
        next(error);
    }
}



/**
 *  User Login
 *  @param Public
 *  @param post
 */
 export const UserLogin = async (req, res, next) => {

    try {
        // get data
        const loginUser = await User.findOne({email : req.body.email});

        console.log(loginUser);

        // email check 
        if(!loginUser){
            // message
           return next(createError(404, 'Email does not match'))
        }

        // password check
        const passCheck = await bcrypt.compare(req.body.password, loginUser.password);
        if(!passCheck){
            // message
            return next(createError(404, 'Password does not match'))  
        }

        // token create
        const token = jwt.sign({ id : loginUser._id, isAdmin : loginUser.isAdmin}, process.env.JWT_SECRET);

        // skip some data distrutureing system
        const { password, isAdmin, ...login_info } = loginUser._doc;

        // message
        res.cookie("access_token", token).status(200).json({
            token : token, 
            user : login_info
        });
    } catch (error) {
        next(error);
    }
}


/**
 *  User Register 
 *  @param Public
 *  @param post
 */
 export const UserRegister = async (req, res, next) => {

    try {

        // has pass
        const salt = await bcrypt.genSalt();
        const has = await bcrypt.hash(req.body.password, salt);

        // create user
        await User.create({
            ...req.body, 
            password : has 
        }, { new : true });

        // message
        res.status(200).json({
            message : "User Registered"
        });
        
    } catch (error) {
        
        next(error);
    }
}