import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./utiles/db.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import contectRoutes from "./routes/contectRoutes.js";
import fileUpload from "express-fileupload";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

// app.use(express.static(path.join(__dirname, "../frontend/build")));

app.use(express.json());
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));
app.use("/api/properties", propertyRoutes);
app.use("/api/contect", contectRoutes);

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
// });

const port = process.env.PORT || 5000;

dbConnect()
  .then(() => {
    app.listen(port, () => console.log(`Server is running on port ${port}!`));
  })
  .catch((err) => {
    console.error("Failed to connect to the database", err);
    process.exit(1);
  });
