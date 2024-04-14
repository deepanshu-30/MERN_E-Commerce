import { addCategory, updateCategory, deleteCategory, updateCategoryImage } from "../controller/category.controller.js";
import { Router } from "express";
import { upload } from "../middleware/multer.middlewre.js"

const router = Router()

router.route('/addcategory').post(
    upload.fields([
        {
            name: "categoryImage",
            maxCount: 1
        }
    ]), addCategory)
router.route('/updatecategory').post(updateCategory)
router.route('/deletecategory').post(deleteCategory)
router.route('/updateCategoryImage').patch(upload.single("categoryImage"), updateCategoryImage)

export { router }