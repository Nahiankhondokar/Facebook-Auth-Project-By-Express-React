import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import createError from "./errorController.js";
import { SendEmail } from "../utility/SendEmail.js";
import CreateToken from "../utility/CreateToken.js";
import Token from "../models/Token.js";
import { SendSms } from "../utility/SendSms.js";

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
        let loginUser = '';
        if(req.body.auth.endsWith('.com')){
            loginUser = await User.findOne({email : req.body.auth});
        }else {
            loginUser = await User.findOne({cell : req.body.auth});
        }

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
        const salt = await bcrypt.genSalt(10);
        const has = await bcrypt.hash(req.body.password, salt);

        let auth = req.body.celloremail;
        // create user wtih email
        if(req.body.celloremail.endsWith('.com')){
            const user = await User.create({
                ...req.body, 
                email : req.body.celloremail,
                password : has 
            });

            // create token 
            const token = CreateToken({ id : user._id }, '1d');

            // verify link
            const verify_link = `http://localhost:3000/user/acc-verify/${token}`;

            // secret key
            const secretKey = Math.round(Math.random() * 10000000);

            // token schema create
            await Token.create({
                userId : user._id,
                token : token,
                secretKey : secretKey
            });

            // send mail
            await SendEmail(user.email, "Account Verify", `Verify link : ${verify_link} & Secret key : ${secretKey}`);
            
        }else {
            // create user wtih phone
            const user = await User.create({
                ...req.body, 
                cell : req.body.celloremail,
                password : has 
            });


            // create token 
            const token = CreateToken({ id : user._id }, '1d');

            // verify link
            const verify_link = `http://localhost:3000/user/acc-verify/${token}`;

            // secret key
            const secretKey = Math.round(Math.random() * 10000000);

            // token schema create
            await Token.create({
                userId : user._id,
                token : token,
                secretKey : secretKey
            });

            // send sms
            // SendSms(secretKey);

        }

        // message
        res.status(200).json({
            message : "User Registered"
        });
        
    } catch (error) {
        
        console.log(error);

    }
}

/**
 *  User Accont Verify 
 *  @param Public
 *  @param post
 */
 export const UserAccontVerify = async (req, res, next) => {

    try {

        // get data
       const {secretKey, token} = req.body;

        // token verify
        const token_verify = jwt.verify(token, process.env.JWT_SECRET);

       // secret key check
       const keyCheck = await Token.findOne({ secretKey : secretKey.secretKey });

       // validaiton
       if(!keyCheck){
        res.status(400).json({
            message : "Secret Key does not match"
        });
       }

       // match secret key
       if(keyCheck){
        // msg
        res.status(200).json({
            message : "Account Verify Successfully"
        });
        // user info update
        await User.findByIdAndUpdate(token_verify.data.id, {
            isVerified : true
        });
        keyCheck.remove();

       }
        
    } catch (error) {
        console.log(error);
    }
}


/**
 *  Valid account find
 *  @param Public
 *  @param post
 */
 export const TriedToPassResetUser = async (req, res, next) => {

    try {

        // find valid user
        if(req.body.auth.endsWith('.com')){
            const valid_user = await User.findOne({ email : req.body.auth });

            // vlidation
            if(!valid_user){
                res.status(400).json({
                    message : "Not match"
                });
            }

            
            if(valid_user){
                res.status(200).json({
                    valid_user
                });
            }

        }else{
            res.status(400).json({
                message : "Phone Number is not allow !"
            });
        }
        
    } catch (error) {
        console.log(error);
    }
}


/**
 *  password reset
 *  @param Public
 *  @param post
 */
 export const UserResetPassword = async (req, res) => {

    try {

        // get data
        const { id, new_pass, confm_pass } = req.body;

        // has pass
        const salt = await bcrypt.genSalt(10);
        const has = await bcrypt.hash(new_pass, salt);

        // reset password
        await User.findByIdAndUpdate(id, {
            password : has
        });

        res.status(200).json({
            message : "Password Changed Successfully"
        });
    
    } catch (error) {
        console.log(error);
    }
}



/**
 *  Logged in user data
 *  @param Public
 *  @param get
 */
 export const LoggedInUserData = async (req, res, next) => {

    try {
        // get token
        const bearer_token = req.headers.authorization;

        // token check
        if(!bearer_token){
            next(createError(404, 'Token Not Found'));
        }

        if(bearer_token){

            // ger the token
            const token = bearer_token.split(' ')[1];

            // token verify
            const token_verify = jwt.verify(token, process.env.JWT_SECRET);

            if(!token_verify){
                next(createError(404, 'Invalid Token'));
            }

            if(token_verify){
                 // get user
                const user = await User.findById(token_verify.id);

                res.status(200).json({
                    user
                });
            }

        }
        
    } catch (error) {
        console.log(error);
    }

}

