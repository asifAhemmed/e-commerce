import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import connectDB from "./config/db.js";

// load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;



//connect to database
connectDB();

// CORS configuration

// increase body size limit for JSO N and URL-encoded data
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);

// API documentation


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Client URL: ${process.env.CLIENT_URL}`);
    console.log(`Admin URL : ${process.env.ADMIN_URL}`)
});