import express from 'express';
import { upload } from '../configs/multer';
import { addProduct, changeStock, ProductById, productList } from '../controllers/productController';
import authSeller from '../middlewares/authSeller.js'

const productRouter = express.Router();

productRouter.post('/add', upload.array([images]), authSeller , addProduct);
productRouter.get('/list' , productList)
productRouter.post('/id' , ProductById)
productRouter.get('/stock' , authSeller, changeStock)


export default productRouter