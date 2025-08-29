import express from 'express';
import {sellerLogin , isSellerAuth , sellerLogout } from '../controllers/userController.js';

const sellerRouter = express.Router();

sellerRouter.post('/login' , sellerLogin);
sellerRouter.get('/is-auth'  , authSeller , isSellerAuth);
sellerRouter.get('/logout'  , sellerLogout);


export default sellerRouter;