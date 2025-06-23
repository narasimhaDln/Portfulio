import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASS,
      },
    });
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MY_EMAIL,
      subject: `New Message from ${name}`,
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px; background-color: #f9f9f9;">
      <h2 style="color: #007bff;">📬 New Contact Form Submission</h2>
      
      <p><strong>👤 Name:</strong> ${name}</p>
      <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>📝 Message:</strong></p>
      <div style="background: #fff; padding: 10px 15px; border-left: 4px solid #007bff; margin-top: 10px;">
        ${message.replace(/\n/g, "<br>")}
      </div>

      <hr style="margin: 20px 0; border: none; border-top: 1px solid #ccc;" />
      <p style="font-size: 0.9em; color: #888;">This message was sent from your portfolio contact form.</p>
    </div>
      `,
    });

    res.status(200).json({ success: true, message: "Email sent" });
  } catch (error) {
    console.error("Email sending error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
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
