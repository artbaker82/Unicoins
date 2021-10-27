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

export const createCategory = async (req, res) => {
  const category = req.body;

  try {
    const user = await User.findOne({ user: req.user.id }).select("-password");

    //check if category exists
    const getCategoryNames = user.categories.map((category) => category.name);
    if (getCategoryNames.includes(req.body.name)) {
      return res.json({ msg: "Category already exists" });
    }

    user.categories.push(category);
    await user.save();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//enter a new expense
export const createExpense = async (req, res) => {
  try {
    const user = await User.findOne({ user: req.user.id }).select("-password");

    if (!user) {
      return res.status(400).json({ msg: "No user found" });
    }

    //destruture request body
    const { category } = req.body;

    //get all name values from user.category because user.categories contains objects with an id also
    const getCategoryNames = user.categories.map((category) => category.name);

    //check if category exists
    if (!getCategoryNames.includes(category)) {
      return res.json({ msg: "Category does not exist, please create it." });
    }
    const expense = req.body;
    user.expenses.push(expense);
    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

//get expenses by user, expense Schema no longer being used
export const getUserExpenses = async (req, res) => {
  try {
    //query database by userId (available in req.user.id from auth middleware)
    const expenses = await Expense.find({ user: req.user.id });
    res.json(expenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export const getUserData = async (req, res) => {
  const user = await User.findOne({ user: req.user.id });
  res.json(user);
};
