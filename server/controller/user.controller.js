import { User } from "../model/user.model.js";
import { Address } from "../model/address.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessAndRefereshTokens = async (userId) => {
    try {
        const user = await User.findById(userId)

        const accessToken = await user.genrateAccessToken()
        const refreshToken = await user.genrateRefreshToken()
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false })
        return { accessToken, refreshToken }

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}
const registerUser = async (req, res) => {
    try {
        const { firstname, lastname, email, password, phoneno, address } = req.body;
        // Validate address fields
        const { street, city, country, pincode } = address;
        if ([firstname, lastname, email, password, phoneno].some(field => { typeof field === 'string' && field?.trim() == "" })) {
            throw new ApiError(400, "All fields are required")
        }
        if ([street, city, country, pincode].some(field => typeof field === 'string' && field?.trim() == "")) {
            throw new ApiError(400, "All fields are required")
        }
        const existUser = await User.findOne({ email })

        if (existUser) {
            throw new ApiError(409, "User with email or username already exists")
        }
        const customerAddress = await Address.create({
            street,
            city,
            country,
            pincode
        })

        if (!customerAddress) {
            throw new ApiError(500, "Something went wrong while registering the user address")
        }

        const user = await User.create({
            firstname,
            lastname,
            email,
            password,
            phoneno,
            address: customerAddress._id
        })
        const createdUser = await User.findById(user._id).select('-password')

        if (!createdUser) {
            await Address.deleteOne({ _id: customerAddress._id })
            throw new ApiError(500, "Something went wrong while registering the user");
        }

        return res.status(200).json(
            new ApiResponse(200, createdUser, "User registered Successfully")
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

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new ApiError(400, "All fields are required");
        }

        const user = await User.findOne({ email })
        if (!user) throw new ApiError(404, "User does not exist");
        const isPasswordVaild = await user.isPasswordCorrect(password)
        if (!isPasswordVaild) throw new ApiError(401, "Invalid user credentials");

        const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(user._id)
        const loggedInUser = await User.findById(user._id).select("-password -refreshToken").populate('address')

        return res
            .status(200)
            .cookie("accessToken", accessToken)
            .cookie("refreshToken", refreshToken)
            .json(
                new ApiResponse(
                    200,
                    {
                        user: loggedInUser, accessToken, refreshToken
                    },
                    "User logged In Successfully"
                )
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

export { registerUser, loginUser }