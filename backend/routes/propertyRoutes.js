import express from "express";
import {
  createProperty,
  addHighlightPoint,
  addLocationAdvantagePoint,
  addQuestion,
  getProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
} from "../controllers/propertyController.js";
// import formidable from "express-formidable";

const router = express.Router();

router.post("/properties", createProperty);
router.put("/properties/:id/highlight", addHighlightPoint);
router.put("/properties/:id/locationadvantage", addLocationAdvantagePoint);
router.put("/properties/:id/question", addQuestion);
router.get("/", getProperties);
router.get("/:id", getPropertyById);
router.put("/:id", updateProperty);
router.delete("/:id", deleteProperty);

export default router;

// routes/propertyRoutes.js
