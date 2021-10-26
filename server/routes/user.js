import express from "express";
const router = express.Router();
import { register, createCategory, createExpense, getUserExpenses } from "../controllers/user.js";
import pkg from "express-validator";
import { auth } from "../middleware/auth.js";

const { check } = pkg;

router.post("/register", register);
router.post("/category", auth, createCategory);
router.post("/expense", auth, createExpense);
router.get("/expense", auth, getUserExpenses);

export default router;
