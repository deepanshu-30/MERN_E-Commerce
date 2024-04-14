import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
            unique: true
        },
        price: {
            type: Number,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        quantity: {
            type: Number,
            require: true,
        },
        isInStock: {
            type: Boolean,
            require: true,
        },
        flashSale: {
            type: Boolean,
            require: true,
        },
        bestSellingProduct: {
            type: Boolean,
            require: true
        },
        newArrivales: {
            type: Boolean,
            require: true
        },
        sku: {
            type: String,
            require: true,
            unique: true
        },
        images: {
            type: Array,
        },
        priceDiscount: {
            type: Number,
            require: true
        },
        category: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }
)

export const Product = mongoose.model("Product", productSchema)