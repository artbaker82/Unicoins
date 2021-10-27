import express from "express";
const router = express.Router();
import {
  register,
  createCategory,
  createExpense,
  getUserExpenses,
  getUserData,
} from "../controllers/user.js";
import pkg from "express-validator";
import { auth } from "../middleware/auth.js";

const { check } = pkg;

router.post("/register", register);
router.put("/category", auth, createCategory);
router.put("/expense", auth, createExpense);
router.get("/expense", auth, getUserExpenses);
router.get("/", auth, getUserData);

export default router;
