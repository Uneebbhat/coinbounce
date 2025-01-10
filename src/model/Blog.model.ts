import mongoose, { Schema, Document, Model, Types } from "mongoose";

interface IBlog extends Document {
  title: string;
  description: string;
  tags: string;
  author: {
    authorId: Types.ObjectId;
    authorName: string;
    authorPic: string;
  };
}

const BlogModel: Schema<IBlog> = new Schema(
  {
    author: {
      authorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      authorName: {
        type: String,
        required: true,
      },
      authorPic: {
        type: String,
        required: true,
      },
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
    },
  },
  { timestamps: true }
);

const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogModel);
export default Blog;
