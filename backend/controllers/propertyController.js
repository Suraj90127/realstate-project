import Property from "../models/propertyModel.js";
import {
  uploadImagesToCloudinary,
  uploadVideosToCloudinary,
  uploadImageToCloudinary,
} from "../utiles/cloudinary.js";
import formidable from "formidable";

export const createProperty = async (req, res) => {
  try {
    let {
      name,
      city,
      qut,
      location,
      apartments,
      bhk,
      area,
      price,
      date,
      launch,
      discription,
      service,
      resourcetype,
    } = req.body;

    const existingProperty = await Property.findOne({ name });

    if (existingProperty) {
      return res
        .status(400)
        .json({ message: "Property with this name already exists." });
    }

    name = name.trim();
    const nameslug = name.split(" ").join("-");

    city = city.trim();
    const cityslug = city.split(" ").join("-");

    const images =
      req.files && req.files.images
        ? await uploadImagesToCloudinary(req.files.images)
        : [];
    const amenitiesimages =
      req.files && req.files.amenitiesimages
        ? await uploadImagesToCloudinary(req.files.amenitiesimages)
        : [];
    const gallery =
      req.files && req.files.gallery
        ? await uploadImagesToCloudinary(req.files.gallery)
        : [];
    const floorplan =
      req.files && req.files.floorplan
        ? await uploadImagesToCloudinary(req.files.floorplan)
        : [];

    const videos =
      req.files && req.files.videos
        ? await uploadVideosToCloudinary(req.files.videos)
        : [];

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
      service,
      resourcetype,
      images,
      amenitiesimages,
      gallery,
      floorplan,
      discription,
      videos,
    });

    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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

// Make sure you have this utility function

export const addAboutDeveloper = async (req, res) => {
  try {
    const { id } = req.params;
    const { exp, project, client, about } = req.body;
    const image = req.files.image;
    console.log("data", exp, project, client, about);
    console.log("image", image);

    if (!image) {
      return res.status(400).json({ message: "Image file is required" });
    }

    // Upload image to Cloudinary
    const imageUrl = await uploadImageToCloudinary(image.tempFilePath);

    if (!imageUrl) {
      return res.status(400).json({ message: "Image upload failed" });
    }

    // Update property with new aboutdevelor data
    const updatedProperty = await Property.findByIdAndUpdate(
      id,
      {
        $push: {
          aboutdevelor: { exp, project, client, about, image: imageUrl },
        },
      },
      { new: true }
    );

    if (!updatedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.status(200).json(updatedProperty);
  } catch (error) {
    console.error("Error adding about developer:", error);
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
