import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Expense from "../models/Expense.js";
import config from "config";
import pkg from "express-validator";
import { getSortedDataByDate } from "../utils/sortData.js";

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
  } catch (err) {
    console.error(err.message);
    res.status(501).json({ msg: err });
  }
};

export const createCategory = async (req, res) => {
  const category = req.body;

  try {
    const user = await User.findById(req.user.id).select("-password");
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

//Delete expense category by id
export const deleteCategory = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    const id = req.params.id;
    const categories = user.categories.filter((category) => category.id !== id);
    user.categories = categories;
    await user.save();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//Delete expense by id
export const deleteExpense = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    const id = req.params.id;
    const expenses = user.expenses.filter((category) => category.id !== id);
    user.expenses = expenses;
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
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(400).json({ msg: "No user found" });
    }

    //destruture request body
    const { category } = req.body;

    //get all name values from user.category because user.categories contains objects with an id also
    const getCategoryNames = user.categories.map((category) => category.name);
    //check if category exists
    if (!getCategoryNames.includes(category)) {
      return res.status(400).json({ msg: "Category does not exist, please create it." });
    }
    //create category
    const expense = req.body;
    user.expenses.push(expense);
    await user.save();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(501).json({ msg: err });
  }
};

export const getUserExpenses = async (req, res) => {
  const { sortDate, category } = req.query;

  console.log(req.query);

  try {
    const user = await User.findById(req.user.id);
    const expenseData = {
      expenses: user.expenses,
      categories: user.categories,
    };
    //sort the data by date
    let sortedExpensesByDate = expenseData.expenses.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    const sortedExpenses = getSortedDataByDate(sortedExpensesByDate, "1w");

    console.log(sortedExpenses);
    expenseData.expenses = sortedExpenses;

    res.json(expenseData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export const getUserData = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    err.status(500).send("Server Error");
  }
};

//returning sorted data
//possible sort parameters
//date, category, amount
//what is the default for each?

//date options are 1w, 1m, 3m, 6m, 1y, all
