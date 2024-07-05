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
} from "../controllers/propertyController.js";
import multer from "multer";
// import formidable from "express-formidable";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", createProperty);
router.put("/:id/highlight", addHighlightPoint);
router.put("/:id/locationadvantage", addLocationAdvantagePoint);
router.put("/:id/question", addQuestion);
router.put("/:id/aboutdeveloper", upload.single("image"), addAboutDeveloper);

// Configure multer for file uploads

// router.post('/properties/:propertyId/aboutdeveloper', upload.single('image'), addAboutDeveloper);

router.get("/get-properties", getProperties);
router.get("/get-properties/:id", getPropertyById);
router.put("/:id", updateProperty);
router.delete("/:id", deleteProperty);

export default router;

// routes/propertyRoutes.js
