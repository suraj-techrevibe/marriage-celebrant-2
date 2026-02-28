import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import multer from "multer";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));

// Path to JSON data
const homeDataPath = path.join(
  __dirname,
  "src/pages/home/components/data/homeData.json"
);

// Ensure assets/hero folder exists
const heroDir = path.join(__dirname, "assets/hero");
if (!fs.existsSync(heroDir)) fs.mkdirSync(heroDir, { recursive: true });

// Serve hero images
app.use("/assets/hero", express.static(heroDir));

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, heroDir),
  filename: (req, file, cb) => {
    // Add timestamp to avoid overwrite
    const ext = path.extname(file.originalname);
    const name = `hero-${Date.now()}${ext}`;
    cb(null, name);
  },
});
const upload = multer({ storage });

// GET home data
app.get("/home-data", (req, res) => {
  fs.readFile(homeDataPath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read file" });
    res.json(JSON.parse(data));
  });
});

// POST save home data
app.post("/save-home", upload.single("heroImage"), (req, res) => {
  try {
    const { heading, para } = req.body;

    // Read existing JSON
    const existing = JSON.parse(fs.readFileSync(homeDataPath, "utf8"));

    // Determine hero image path
    let heroImage = existing.heroImage || "/assets/hero/default-hero.jpg";
    if (req.file) heroImage = `/assets/hero/${req.file.filename}`;

    const newData = { heading, para, heroImage };

    fs.writeFileSync(homeDataPath, JSON.stringify(newData, null, 2));
    res.json({ success: true, data: newData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save data" });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));