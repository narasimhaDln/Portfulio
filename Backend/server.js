import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import emailRouter from "./routes/email.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Enable JSON body parsing
app.use(express.json());

// Enable CORS (adjust origin as needed for production)
app.use(
  cors({
    origin: "http://localhost:5173", // Use your frontend URL in production
    credentials: true,
  })
);

// API route
app.use("/email/send", emailRouter);

// Serve frontend in production
const __dirname = path.resolve(); // Required when using ES modules

if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "Frontend/vite-project/dist");

  console.log("✅ Serving frontend from:", frontendPath);
  app.use(express.static(frontendPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
