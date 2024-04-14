import mongoose, { Schema } from "mongoose";

const addressSchema = new Schema(
    {
        street: {
            type: String,
            require: true
        },
        city: {
            type: String,
            require: true,
            maxLength: 80,
        },
        country: {
            type: String,
            require: true,
            maxLength: 80,
        },
        pincode: {
            type: Number,
            require: true,
        }

    },
    {
        timestamps: true
    }
)

export const Address = mongoose.model('User_Address', addressSchema)