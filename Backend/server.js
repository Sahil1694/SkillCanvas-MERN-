import app from "./app.js";
import { connectDB } from "./config/database.js";
import { v2 as cloudinary } from "cloudinary";
import RazorPay from "razorpay";
import nodeCron from "node-cron";
import { Stats } from "./models/Stats.js";

connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

export const instance = new RazorPay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZOR_API_SECRET,
});

// Schedule job (optional)
// nodeCron.schedule("0 0 0 5 * *", async () => {
//   try {
//     await Stats.create({});
//   } catch (error) {
//     console.log(error);
//   }
// });

// Start the server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on: ${port}`);
});

// Export app for Vercel
export default app;
