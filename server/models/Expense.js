import mongoose from "mongoose";
const Schema = mongoose.Schema;

//original separate schema for expenses, not being used.
const ExpenseSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  description: {
    type: String,
  },
});

export default mongoose.model("Expense", ExpenseSchema);
