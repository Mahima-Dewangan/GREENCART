import express from 'express';
import { upload } from '../configs/multer.js';
import { addProduct, changeStock, ProductById, productList } from '../controllers/productController.js';
import authSeller from '../middleware/authSeller.js'

const productRouter = express.Router();

productRouter.post('/add', upload.array('images'), authSeller , addProduct);
productRouter.get('/list' , productList)
productRouter.post('/id' , ProductById)
productRouter.get('/stock' , authSeller, changeStock)


export default productRouter