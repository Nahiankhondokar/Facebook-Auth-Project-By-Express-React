import jwt from 'jsonwebtoken';
import createError from '../controllers/errorController.js';



// user middleware
const userMiddleware = (req, res, next) => {

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
    
        // if verify token
        if(token_verify){
            res.user = token_verify;
            next();
        }
        
    } catch (error) {
        next(error)
    }

}


// export 
export default userMiddleware;