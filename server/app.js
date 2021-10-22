//todo

//create user schema
//set up authentication endpoints

import express from "express";
import { connectDB } from "./config/db.js";

const app = express();
//connect to database
connectDB();

//init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
