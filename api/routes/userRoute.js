import express from 'express';
import { CreateUser, DeleteUser, GetAllUser, SingleUser, UpdateUser, UserLogin, UserRegister, UserAccontVerify } from '../controllers/userController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import userMiddleware from '../middlewares/userMiddleware.js';

// router
const router = express.Router();


// all routes
router.route('/').get(userMiddleware, GetAllUser).post(CreateUser);
router.route('/:id').get(authMiddleware, SingleUser).delete(DeleteUser).patch(UpdateUser).put(UpdateUser);


// user login registraion
router.route('/login').post(UserLogin);
router.route('/register').post(UserRegister);
router.route('/acc-verify').post(UserAccontVerify);





// exprot 
export default router;