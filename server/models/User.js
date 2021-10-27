import mongoose from "mongoose";
const Schema = mongoose.Schema;

const categorySchema = new mongoose.Schema({ name: { type: String } });
const expenseSchema = new mongoose.Schema({
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
  description: {
    type: String,
  },
});

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    //expenses: [{ categorySchema: [expenseSchema] }],
    expenses: [expenseSchema],

    categories: [categorySchema],
  },
  {
    timestamps: true,
  }
);

//assign the model only if it hasnt been assigned already
//had error Cannot overwrite `User` model once compiled.
export default mongoose.models.User || mongoose.model("User", UserSchema);
