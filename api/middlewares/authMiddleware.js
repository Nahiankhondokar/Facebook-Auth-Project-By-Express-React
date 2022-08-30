import createError from "../controllers/errorController.js";
import jwt from 'jsonwebtoken';



// auth Middleware
export const authMiddleware = (req, res, next) => {

    try {

        // get token
        const token = req.cookies.access_token;
        if(!token){
            next(createError(401, "You are not login"));
        }

        // token check
        const token_verify = jwt.verify(token, process.env.JWT_SECRET);
        if(!token_verify){
            next(createError(404, "Invalid Token"));
        }
    
        // login user can not access any other user account
        if(token_verify.id != req.params.id){
            next(createError(401, "You can not access other account"))
        }

        // user account access
        if(token_verify.id == req.params.id){
            next();
        }
        
    } catch (error) {
        next(error)
    }

}