//todo

//set up express validator errors in new user endpoint

//experiment with data structure

import express from "express";
import { connectDB } from "./config/db.js";

import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js";

const app = express();
//connect to database
connectDB();

//init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

app.use("/user", userRouter);
app.use("/auth", authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
