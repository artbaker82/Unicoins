import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Expense from "../models/Expense.js";
import config from "config";
import pkg from "express-validator";

const { validationResult } = pkg;
//register a new user
export const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, password } = req.body;
  try {
    //check for existing user
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    user = new User({
      name,
      email,
      password,
    });

    //encrypt password
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    //add to database
    await user.save();

    //return token
    //initialize payload which includes id added to the User object by mongoose
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, config.get("jwtSecret"), { expiresIn: 36000 }, (err, token) => {
      if (err) throw err;

      res.json({ token });
    });
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

export const createCategory = async (req, res) => {};

//enter a new expense
export const createExpense = async (req, res) => {
  try {
    const newExpense = new Expense({
      category: req.body.category,
      amount: req.body.amount,
      user: req.user.id,
    });

    const expense = await newExpense.save();
    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export const getUserExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id });

    res.json(expenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
