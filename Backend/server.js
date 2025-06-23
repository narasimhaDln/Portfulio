import express from "express";
import cors from "cors";

import dotenv from "dotenv";
import path from "path";
import emailRouter from "./routes/email.routes.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/email/send", emailRouter);
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/Frontend/vite-project/dist")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "Frontend", "vite-project", "dist", "index.html")
    );
  });
}
app.listen(PORT, () => {
  console.log(`Server running at port=${PORT}`);
});
