import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
import { saltRounds } from "../constrain.js";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
    {
        firstname: {
            type: String,
            require: true,
            lowercase: true,
            trim: true
        },
        lastname: {
            type: String,
            require: true,
            lowercase: true,
            trim: true
        },
        email: {
            type: String,
            require: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            require: [true, 'Password is required']

        },
        phoneno: {
            type: Number,
            require: true,
        },
        address: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User_Address"

        },
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, saltRounds)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {

    return await bcrypt.compare(password, this.password)
}

userSchema.methods.genrateAccessToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    )

}
userSchema.methods.genrateRefreshToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    )
}

export const User = mongoose.model('User', userSchema);