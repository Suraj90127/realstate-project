import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./utiles/db.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import contectRoutes from "./routes/contectRoutes.js";
import fileUpload from "express-fileupload";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));
app.use("/api/properties", propertyRoutes);
app.use("/api/contect", contectRoutes);

dbConnect()
  .then(() => {
    app.listen(port, () => console.log(`Server is running on port ${port}!`));
  })
  .catch((err) => {
    console.error("Failed to connect to the database", err);
    process.exit(1);
  });
