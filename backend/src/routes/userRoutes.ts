import express from 'express';
const router = express.Router();
import * as UserController from '../controllers/userControllers';

router.post('/signup', UserController.signupUser);
router.post('/signin', UserController.signinUser);
router.get('/signout', UserController.signoutUser);

export default router;