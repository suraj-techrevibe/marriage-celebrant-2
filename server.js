import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors({ origin: "http://localhost:5173" })); // Vite dev server
app.use(express.json());

const homeDataPath = path.join(
  __dirname,
  "src/pages/home/components/data/homeData.json"
);

// GET home data
app.get("/home-data", (req, res) => {
  fs.readFile(homeDataPath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read file" });
    res.json(JSON.parse(data));
  });
});

// POST save data
app.post("/save-home", (req, res) => {
  fs.writeFile(homeDataPath, JSON.stringify(req.body, null, 2), (err) => {
    if (err) return res.status(500).json({ error: "Failed to save file" });
    res.json({ success: true });
  });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));