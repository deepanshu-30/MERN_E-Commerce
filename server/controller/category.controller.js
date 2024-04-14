import { Category } from "../model/category.model.js"
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { cloudinaryUpload, deleteImageOfCategory } from "../utils/cloudnairy.js";

const addCategory = async (req, res) => {
    try {
        const { name, description } = req.body
        if (!name || !description) throw new ApiError(400, "All fields are required")
        const existCategory = Category.findOne({ name })
        if (!existCategory) throw new ApiError(409, "Category already  exists")
        const categoryImagePath = req.files.categoryImage[0].path
        if (!categoryImagePath) throw new ApiError(400, "categoryImagePath file is required")
        const categoryImageUrl = await cloudinaryUpload(categoryImagePath)
        if (!categoryImageUrl) throw new ApiError(400, "categoryImagePath file is required")
        const createCategory = await Category.create({
            name,
            imageUrl: categoryImageUrl.url,
            description,
            publicId: categoryImageUrl.public_id
        })

        if (!createCategory) {
            throw new ApiError(500, "Something went wrong while creating  the category")
        }
        return res.status(201).json(
            new ApiResponse(200, createCategory, "Category Created Successfully")
        )
    } catch (error) {
        return res.status(500).json(
            new ApiError(500, "Something went wrong while creating  the category")
        )

    }
}
const updateCategory = async (req, res) => {
    try {
        const { name, description } = req.body
        if (!req.body.id) throw new ApiError(400, "Can not Update this Catergory")
        const updatedCatagory = await Category.findByIdAndUpdate
            (
                req.body.id,
                {
                    $set: {
                        name,
                        description
                    }
                }, { new: true }
            )
        if (!updatedCatagory) throw new ApiError(500, "Can not Update this Catergory")
        return res
            .status(200)
            .json(new ApiResponse(200, updatedCatagory, "Category is  updated successfully"))
    } catch (error) {
        return res.status(500).json(
            new ApiError(500, "Something went wrong while updating  the category")
        )
    }
}
const deleteCategory = async (req, res) => {
    try {
        const { id } = req.body
        if (!id) throw new ApiError(400, "Error while delete this category")

        const publicId = await Category.findById(id).select('publicId -_id')
        const deleteOldImage = await deleteImageOfCategory(publicId.publicId)
        const deleteCategory = await Category.findByIdAndDelete(id)
        if (!deleteCategory || deleteOldImage) ApiError(400, "Error while delete this category")
        return res
            .status(200)
            .json(new ApiResponse(200, deleteCategory, "Category  is  deleted successfully"))

    } catch (error) {
        return res.status(500).json(
            new ApiError(500, "Something went wrong while deleting the category")
        )
    }

}
const updateCategoryImage = async (req, res) => {
    try {
        const categoryImagePath = req.files.path
        if (!categoryImagePath) {
            throw new ApiError(400, "Category file is missing")
        }

        const publicId = await Category.findOne(req.id).select('publicId -_id')
        const deleteOldImage = await deleteImageOfCategory(publicId.publicId)

        if (!deleteOldImage) throw new ApiError(400, "Error while deleting on Image")

        const categoryImageUrl = await cloudinaryUpload(categoryImagePath)
        if (!categoryImageUrl) throw new ApiError(400, "Error while uploading on Image")

        const updatedCatagory = await Category.findByIdAndUpdate
            (
                req.id,
                {
                    $set: {
                        imageUrl: categoryImageUrl.url,
                        publicId: categoryImageUrl.public_id
                    }
                }, { new: true }
            )
        if (!updatedCatagory) throw new ApiError(500, "Error while uploading on Image")
        return res
            .status(200)
            .json(new ApiResponse(200, updatedCatagory, "Category File is  updated successfully"))

    } catch (error) {
        return res.status(500).json(
            new ApiError(500, "Something went wrong while updating  the category")
        )
    }

}

export { addCategory, updateCategory, deleteCategory, updateCategoryImage }