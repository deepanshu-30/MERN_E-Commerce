import {
    createProduct, updateProduct, deleteProduct, updateProductImage, updateQuantityCsv, getFlashSaleProduct, getBestSellingProduct,
    getProductById, getAllProduct
} from "../controller/product.controller.js";
import { Router } from "express";
import { upload } from "../middleware/multer.middlewre.js"

const router = Router()

router.route('/createproduct').post(
    upload.fields([
        {
            name: "productImage",
            maxCount: 6
        }
    ]), createProduct)
router.route('/updateProduct').post(updateProduct)
router.route('/deleteProduct').post(deleteProduct)
router.route('/updateProductImage').patch(upload.single("productImage"), updateProductImage)
router.route('/updateQuantityCsv').post(upload.single("quntatityupdate"), updateQuantityCsv)
router.route('/getFlashSaleProduct').get(getFlashSaleProduct)
router.route('/getBestSellingProduct').get(getBestSellingProduct)
router.route('/getProductById').post(getProductById)
router.route('/getAllProduct').get(getAllProduct)


export { router }