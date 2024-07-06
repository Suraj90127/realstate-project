import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImagesToCloudinary = async (files) => {
  const urls = [];
  const upload = async (file) => {
    const result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
      folder: "products/images",
    });
    return result.secure_url;
  };

  if (Array.isArray(files)) {
    for (const file of files) {
      const url = await upload(file);
      urls.push(url);
    }
  } else {
    const url = await upload(files);
    urls.push(url);
  }

  return urls;
};

export const uploadVideosToCloudinary = async (files) => {
  const urls = [];
  const upload = async (file) => {
    const result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
      folder: "products/videos",
      resource_type: "video",
    });
    return result.secure_url;
  };

  if (Array.isArray(files)) {
    for (const file of files) {
      const url = await upload(file);
      urls.push(url);
    }
  } else {
    const url = await upload(files);
    urls.push(url);
  }

  return urls;
};
export const uploadImageToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.v2.uploader.upload(filePath, {
      folder: "aboutDeveloper",
    });
    console.log("url", result.secure_url);
    return result.secure_url;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    return null;
  }
};
