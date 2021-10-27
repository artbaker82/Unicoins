import mongoose from "mongoose";
const Schema = mongoose.Schema;

const categorySchema = new mongoose.Schema({ type: String });

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
    expenses: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    categories: [],
  },
  {
    timestamps: true,
  }
);

//assign the model only if it hasnt been assigned already
//had error Cannot overwrite `User` model once compiled.
export default mongoose.models.User || mongoose.model("User", UserSchema);
