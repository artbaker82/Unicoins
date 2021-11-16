import User from "../models/user.js";
import mongoose from "mongoose";

const categories = ["transportation", "food/groceries", "restaurants", "misc", "entertainment"];

//input is how many expenses to create
//generate a random array of objects containing the properties specified in the expense schema
//end result
//   const data = [
//       {
//           category: "transportation",
//           amount: 15,
//           description: "sample data",
//           date: getRandomDate(),
//       }
//   ]

const getRandomCategory = () => {
  let num = Math.floor(Math.random() * categories.length);
  return categories[num];
};

const generateRandomDate = (weeks) => {
  //input is hoe many weeks in the past to generate
  //generate how many milliseconds between weeks and now
  // now(milliseconds) - weeks(milliseconds)

  //convert weeks to milliseconds

  const msWeeks = 604800000 * weeks;

  //generate date range range is ms
  const bottomRange = Date.now() - msWeeks;
  const rangeToGenerate = Date.now() - bottomRange;

  //generate random number in that range
  const randomMs = Math.floor(Math.random() * rangeToGenerate);
  //subtract from now
  const randomDate = Date.now() - randomMs;
  //convert to date string
  const randomDateConverted = new Date(randomDate).toLocaleString();
  return randomDateConverted;
};

export const generateExpenses = (num) => {
  let expenses = [];
  //get random category
  for (let i = 0; i < num; i++) {
    expenses[i] = {};
    expenses[i].category = getRandomCategory();
    //need to think about how the date needs to be formated
    expenses[i].date = generateRandomDate(52);
    expenses[i].amount = Math.floor(Math.random() * 100);
    expenses[i].description = "sample data";
  }
  return expenses;
  // console.log(expenses);
};

//put this in the database

const connectDB = async (db) => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    //exit process with failure
    process.exit(1);
  }
};

const start = async () => {
  try {
    await connectDB();

    //passing in the array of products
    //get user
    let user = await User.find({ email: "sampledata@gmail.com" });
    categories.forEach((item) => {
      user[0].categories.push({ name: item });
    });
    const expensesToAdd = generateExpenses();
    expensesToAdd.forEach((item) => {
      user[0].expenses.push(item);
    });
    // console.log(user[0]);

    await user[0].save();
    //put sample data in expenses
    //dont forget to input categories data too
    //quit the process when it is successful
    // process.exit(0);
    // console.log("success");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
