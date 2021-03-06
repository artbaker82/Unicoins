//todo

//set up express validator errors in all endpoints
//password confirmation frontend?
//what should happen to expenses of a specific category when that category is deleted?
//Create random expenses (algorithm to generate random data up to a year in the past)

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import bodyParser from "body-parser";
import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js";

const app = express();
//connect to database
connectDB();
app.use(cors());

//init middleware
app.use(express.json({ extended: false }));
//need this to parse text from http body
app.use(express.text());

app.get("/", (req, res) => res.send("API Running"));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
