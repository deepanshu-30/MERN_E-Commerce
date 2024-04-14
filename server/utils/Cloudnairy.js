import { compareSync } from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const cloudinaryUpload = async (localFilePath) => {
    try {
        if (!localFilePath) return;
        const response = await cloudinary.uploader.upload(localFilePath,
            {
                resource_type: "auto"
            });

        fs.unlinkSync(localFilePath)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}

const deleteImageOfCategory = async (publicId) => {
    try {
        if (!publicId) return;
        const response = await cloudinary.api.delete_resources(publicId,
            { type: 'upload', resource_type: 'image' })
        return response;

    } catch (error) {
        return;
    }
}

export { cloudinaryUpload, deleteImageOfCategory }