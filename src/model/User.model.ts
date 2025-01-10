import mongoose, { Schema, Document, Model } from "mongoose";

interface IUser extends Document {
  profilePic: File | string;
  username: string;
  email: string;
  password: string;
}

const UserModel: Schema<IUser> = new Schema(
  {
    profilePic: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      minLength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
  },
  { timestamps: true }
);

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserModel);
export default User;
