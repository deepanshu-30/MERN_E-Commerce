import { Product } from "../model/product.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { cloudinaryUpload, deleteImageOfCategory } from "../utils/cloudnairy.js";

const createProduct = async (req, res) => {
    try {
        console.log(req.files)
        const { name, price, description, quantity, isInStock, flashSale, bestSellingProduct, newArrivales, sku, priceDiscount, category } = req.body
        const requiredFields = ['name', 'price', 'description', 'quantity', 'isInStock', 'flashSale', 'bestSellingProduct', 'newArrivales', 'sku', 'priceDiscount', 'category'];

        if (requiredFields.some(field => !(field in req.body))) {

            throw new ApiError(400, "All fields are required");
        }

        const existProduct = await Product.findOne({ name })
        if (existProduct) throw new ApiError(409, "Product already  exists")

        const productImagePath = req.files.productImage;
        console.log("hey", productImagePath)

        if (!productImagePath) throw new ApiError(400, "ProductImagePath file is required");
        const productImageUrl = await Promise.all(productImagePath.map((productImageData) => {
            return cloudinaryUpload(productImageData.path)

        }))
        const allProductImageUrl = productImageUrl.map((product) => {
            let data = { public_id: '', url: '' }
            data.public_id = product.public_id
            data.url = product.url
            return data;
        })
        const createNewProduct = await Product.create({
            name,
            price,
            description,
            quantity,
            isInStock,
            flashSale,
            bestSellingProduct,
            newArrivales,
            sku,
            priceDiscount,
            category,
            images: allProductImageUrl
        })
        if (!createProduct) {
            throw new ApiError(500, "Something went wrong while creating  the Product")
        }
        return res.status(201).json(
            new ApiResponse(200, createNewProduct, "Product Created Successfully")
        )


    } catch (error) {
        if (error instanceof ApiError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                errors: error.errors
            });
        } else {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Something went wrong while logging in"
            });
        }
    }

}

const updateProduct = async (req, res) => {
    try {
        const { name, price, description, quantity, isInStock, flashSale, bestSellingProduct, newArrivals, sku, priceDiscount, category } = req.body
        if (!req.body.id) throw new ApiError(400, "Can not Update this Catergory")
        const updatedProduct = await Product.findByIdAndUpdate
            (
                req.body.id,
                {
                    $set: {
                        name,
                        price,
                        description,
                        quantity,
                        isInStock,
                        flashSale,
                        bestSellingProduct,
                        newArrivals,
                        sku,
                        priceDiscount,
                        category,
                    }
                }, { new: true }
            )
        if (!updatedProduct) throw new ApiError(500, "Can not Update this Product")
        return res
            .status(200)
            .json(new ApiResponse(200, updatedProduct, "Product is  updated successfully"))
    } catch (error) {
        return res.status(500).json(
            new ApiError(500, "Something went wrong while updating  the Product")
        )
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.body
        if (!id) throw new ApiError(400, "Error while delete this Product")
        const images = await Product.findById(id).select('images')

        const deleteOldImage = await Promise.all(images.map((image) => {
            return deleteImageOfCategory(image.publicId)

        }))
        const deleteProduct = await Product.findByIdAndDelete(id)
        if (!deleteProduct || deleteOldImage) ApiError(400, "Error while delete this Product")
        return res
            .status(200)
            .json(new ApiResponse(200, deleteProduct, "Product  is  deleted successfully"))

    } catch (error) {
        if (error instanceof ApiError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                errors: error.errors
            });
        } else {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Something went wrong while logging in"
            });
        }
    }

}

const updateProductImage = async (req, res) => {
    try {
        const productImagePath = req.files.path
        if (!productImagePath) {
            throw new ApiError(400, "Product file is missing")
        }

        const images = await Product.findOne(req.id).select('images')
        const deleteOldImage = await Promise.all(images.map((image) => {
            return deleteImageOfCategory(image.publicId)

        }))
        if (!deleteOldImage) throw new ApiError(400, "Error while deleting on Image")

        const productImageUrl = await Promise.all(productImagePath.map((productImageData) => {
            return cloudinaryUpload(productImageData.path)

        }))
        const allProductImageUrl = productImageUrl.map((product) => {
            let data = { public_id: '', url: '' }
            data.public_id = product.public_id
            data.url = product.url
            return data;
        })

        if (!productImageUrl) throw new ApiError(400, "Error while uploading on Image")

        const updatedProduct = await Product.findByIdAndUpdate
            (
                req.id,
                {
                    $set: {
                        images: allProductImageUrl
                    }
                }, { new: true }
            )
        if (!updatedProduct) throw new ApiError(500, "Error while uploading on Image")
        return res
            .status(200)
            .json(new ApiResponse(200, updatedProduct, "Product File is  updated successfully"))

    } catch (error) {
        if (error instanceof ApiError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                errors: error.errors
            });
        } else {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Something went wrong while logging in"
            });
        }
    }

}

const updateQuantityCsv = async (req, res) => {
    try {

        return res
            .status(200)

    } catch (error) {
        if (error instanceof ApiError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                errors: error.errors
            });
        } else {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Something went wrong while logging in"
            });
        }
    }
}
const getFlashSaleProduct = async (req, res) => {
    try {

        const flashSaleProduct = await Product.find({ flashSale: true })
        if (!flashSaleProduct) {
            throw new ApiError(500, "Error while uploading on Image OR No Product Found")
        }
        console.log("hey" + flashSaleProduct)

        return res.status(200).json({
            success: true,
            message: "Products found",
            data: flashSaleProduct
        });

    } catch (error) {
        if (error instanceof ApiError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                errors: error.errors
            });
        } else {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Something went wrong while sending in"
            });
        }
    }
}

const getBestSellingProduct = async (req, res) => {
    try {

        const bestSellingProducts = await Product.find({ bestSellingProduct: true })

        if (!bestSellingProducts) {
            throw new ApiError(500, "Error while uploading on Image OR No Product Found")
        }


        return res.status(200).json({
            success: true,
            message: "Products found",
            data: bestSellingProducts
        });

    } catch (error) {
        if (error instanceof ApiError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                errors: error.errors
            });
        } else {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Something went wrong while logging in"
            });
        }
    }
}
const getProductById = async (req, res) => {
    try {
        const { id } = req.body
        if (!id) {
            throw new ApiError(500, "Id not find")
        }
        const productById = await Product.findById({ _id: id })
        console.log("got")
        if (!productById) {
            throw new ApiError(500, "Error while uploading on Image OR No Product Found")
        }
        console.log("hey" + productById)

        return res.status(200).json({
            success: true,
            message: "Products found",
            data: productById
        });

    } catch (error) {
        if (error instanceof ApiError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                errors: error.errors
            });
        } else {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Something went wrong while findin product in"
            });
        }
    }
}

const getAllProduct = async (req, res) => {
    try {
        const allProduct = await Product.find()
        console.log("got")
        if (!allProduct) {
            throw new ApiError(500, "Error while uploading on Image OR No Product Found")
        }
        console.log("hey" + allProduct)

        return res.status(200).json({
            success: true,
            message: "Products found",
            data: allProduct
        });

    } catch (error) {
        if (error instanceof ApiError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                errors: error.errors
            });
        } else {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Something went wrong while findin product in"
            });
        }
    }
}

export {
    createProduct, updateProduct, deleteProduct, updateProductImage, updateQuantityCsv,
    getFlashSaleProduct, getBestSellingProduct, getProductById, getAllProduct
}
