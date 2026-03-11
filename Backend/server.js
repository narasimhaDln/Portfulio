import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import emailRouter from "./routes/email.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 5001;

// Enable JSON body parsing
app.use(express.json());

// Enable CORS (adjust origin as needed for production)
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      // or allow the origin to pass through for Vercel preview/production URLs
      callback(null, origin || "*");
    },
    credentials: true,
  })
);

// API route
app.use("/email/send", emailRouter);

// Serve frontend in production
if (process.env.NODE_ENV === "production" && !process.env.VERCEL) {
  const frontendPath = path.join(__dirname, "../Frontend/vite-project/dist");

  console.log("✅ Serving frontend from:", frontendPath);
  app.use(express.static(frontendPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

// Start the server
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
} else {
  // If not running in Vercel Serverless environments, still listen
  // Vercel generally sets process.env.VERCEL to "1"
  if (!process.env.VERCEL) {
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  }
}

export default app;
