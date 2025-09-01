import express from "express";
import authUser from "../middleware/authUser.js";
import { updateCart } from "../controllers/cardController.js";


const cartRouter = express.Router();

cartRouter.post('/update' , authUser , updateCart)

export default cartRouter;