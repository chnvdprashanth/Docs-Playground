import cloudinary from "./cloudinary"

export const getCloudinaryImageURL = async (image,folder) => {
    try{
        const result = await cloudinary.uploader.upload(image,{
            folder: folder,
            fetch_format: "auto,"
        });

        return result.secure_url;
    }catch(err){
        console.error("Error saving user data: ", err);
        res.status(500).json({ message: "Failed to save user data" });
    }
}