import express from "express";
import {
  createProperty,
  addHighlightPoint,
  addLocationAdvantagePoint,
  addQuestion,
  addAboutDeveloper,
  getProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
  getPropertiesByCity,
} from "../controllers/propertyController.js";
import multer from "multer";
// import formidable from "express-formidable";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", createProperty);
router.put("/highlight/:id", addHighlightPoint);
router.put("/locationadvantage/:id", addLocationAdvantagePoint);
router.put("/question/:id", addQuestion);
router.put("/aboutdeveloper/:id", addAboutDeveloper);
// Configure multer for file uploads

// router.post('/properties/:propertyId/aboutdeveloper', upload.single('image'), addAboutDeveloper);

router.get("/get-properties", getProperties);
router.get("/get-properties/:id", getPropertyById);
router.get("/properties_by_city/:city", getPropertiesByCity);
router.put("/update/:id", updateProperty);
router.delete("/delete/:id", deleteProperty);

export default router;

// routes/propertyRoutes.js
