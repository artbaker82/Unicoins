import express from "express";
const router = express.Router();
import {
  register,
  createCategory,
  createExpense,
  getUserExpenses,
  getUserData,
  deleteCategory,
  deleteExpense,
} from "../controllers/user.js";
import pkg from "express-validator";
import { auth } from "../middleware/auth.js";

const { check } = pkg;

router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a password with 6 or more characters").isLength({ min: 6 }),
  ],
  register
);
router.put("/category", auth, createCategory);
router.delete("/category/:id", auth, deleteCategory);
router.delete("/expense/:id", auth, deleteExpense);
router.route("/expense").get(auth, getUserExpenses).put(auth, createExpense);

router.get("/", auth, getUserData);

export default router;
