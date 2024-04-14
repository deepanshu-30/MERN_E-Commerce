import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
    {
        name: {
            type: String,
            require: true,
            unique: true
        },
        imageUrl: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        publicId: {
            type: String,
        }

    },
    { timestamps: true }
)

export const Category = mongoose.model('Category', categorySchema)