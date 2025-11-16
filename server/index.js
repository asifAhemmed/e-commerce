import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Client URL: ${process.env.CLIENT_URL}`);
    console.log(`Admin URL : ${process.env.ADMIN_URL}`)
});