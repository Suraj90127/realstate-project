import Property from "../models/propertyModel.js";
import fs from "fs/promises";
import cloudinary from "../utiles/cloudinary.js"; // Import the Cloudinary config

export const createProperty = async (req, res) => {
  try {
    const {
      name,
      nameslug,
      city,
      cityslug,
      qut,
      location,
      apartments,
      bhk,
      area,
      price,
      date,
      launch,
      discription,
    } = req.body;

    const images = req.files.images
      ? await uploadImagesToCloudinary(req.files.images)
      : [];
    const amenitiesimages = req.files.amenitiesimages
      ? await uploadImagesToCloudinary(req.files.amenitiesimages)
      : [];
    const gallery = req.files.gallery
      ? await uploadImagesToCloudinary(req.files.gallery)
      : [];
    const floorplan = req.files.floorplan
      ? await uploadImagesToCloudinary(req.files.floorplan)
      : [];

    const videos = req.files.video
      ? await uploadImagesToCloudinary(req.files.video)
      : [];

      
    console.log("video", videos);
    let allVideoUrl = [];
    if (videos && videos.length > 0) {
      for (let i = 0; i < videos.length; i++) {
        try {
          console.log(`Uploading video: ${videos[i].filepath}`); // Debug: Log file path
          const result = await cloudinary.uploader.upload(videos[i].filepath, {
            folder: "products/videos",
            resource_type: "video",
          });
          allVideoUrl.push(result.url);
        } catch (uploadErr) {
          console.error(
            `Error uploading video ${videos[i].filepath}:`,
            uploadErr
          ); // Log specific upload error
        }
      }
    }

    const newProperty = new Property({
      name,
      nameslug,
      city,
      cityslug,
      qut,
      location,
      apartments,
      bhk,
      area,
      price,
      date,
      launch,
      images,
      amenitiesimages,
      gallery,
      floorplan,
      discription,
      videos: allVideoUrl,
    });

    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const uploadImagesToCloudinary = async (files) => {
  const urls = [];
  const upload = async (file) => {
    const result = await cloudinary.v2.uploader.upload(file.tempFilePath);
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

// controllers/propertyController.js

export const addHighlightPoint = async (req, res) => {
  try {
    const { id } = req.params;
    const { highlightspoint } = req.body;

    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    property.highlights.push({ highlightspoint });
    await property.save();

    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ messagennn: error.message });
  }
};

// controllers/propertyController.js

export const addLocationAdvantagePoint = async (req, res) => {
  try {
    const { id } = req.params;
    const { locationadvantagepoint } = req.body;

    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    property.locationadvantage.push({ locationadvantagepoint });
    await property.save();

    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// controllers/propertyController.js

export const addQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const { que, ans } = req.body;

    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    property.questions.push({ que, ans });
    await property.save();

    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const createProperty = async (req, res) => {
//   try {
//     const propertyData = req.body;

//     const images = await uploadImagesToCloudinary(req.files.images || []);
//     const amenitiesimages = await uploadImagesToCloudinary(
//       req.files.amenitiesimages || []
//     );
//     const gallery = await uploadImagesToCloudinary(req.files.gallery || []);
//     const floorplan = await uploadImagesToCloudinary(req.files.floorplan || []);

//     propertyData.images = images;
//     propertyData.amenitiesimages = amenitiesimages;
//     propertyData.gallery = gallery;
//     propertyData.floorplan = floorplan;

//     const newProperty = new Property(propertyData);
//     await newProperty.save();
//     res.status(201).json(newProperty);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Get all properties
export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a property by ID
export const getPropertyById = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await Property.findById(id);
    if (!property)
      return res.status(404).json({ message: "Property not found" });
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a property by ID
export const updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const propertyData = req.body;

    // Upload new images if provided
    if (propertyData.images)
      propertyData.images = await uploadImages(propertyData.images);
    if (propertyData.amenitiesimages)
      propertyData.amenitiesimages = await uploadImages(
        propertyData.amenitiesimages
      );
    if (propertyData.gallery)
      propertyData.gallery = await uploadImages(propertyData.gallery);
    if (propertyData.floorplan)
      propertyData.floorplan = await uploadImages(propertyData.floorplan);

    const updatedProperty = await Property.findByIdAndUpdate(id, propertyData, {
      new: true,
    });
    if (!updatedProperty)
      return res.status(404).json({ message: "Property not found" });
    res.status(200).json(updatedProperty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a property by ID
export const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProperty = await Property.findByIdAndDelete(id);
    if (!deletedProperty)
      return res.status(404).json({ message: "Property not found" });
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
