import dbConnect from "@/config/dbConnect";
import User from "@/model/User.model";
import UserSchema from "@/schema/UserSchema.schema";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import cloudinary from "cloudinary";
import { DEFAULT_IMG } from "@/config/constants";

export async function POST(req: Request) {
  try {
    await dbConnect();
    console.log("Database connected successfully.");

    const body = await req.json();
    console.log("Received body:", body);

    const validateRequest = UserSchema.parse(body);
    console.log("Validated request:", validateRequest);

    const { username, email, password } = validateRequest;

    const existingUser = await User.findOne({ email });
    console.log("Existing user:", existingUser);

    if (existingUser) {
      return NextResponse.json(
        { message: "Email already in use" },
        { status: 400 }
      );
    }

    let profilePicUrl: string = DEFAULT_IMG as string;
    // if (profilePic) {
    //   const result = await cloudinary.v2.uploader.upload(profilePic, {
    //     folder: "coinbounce/profile_pic",
    //   });
    //   profilePicUrl = result.secure_url;
    //   console.log("Uploaded profile pic URL:", profilePicUrl);
    // }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password:", hashedPassword);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      profilePic: profilePicUrl,
    });
    console.log("New user created:", newUser);

    return NextResponse.json(
      {
        message: "User created successfully",
        newUser,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error details:", error.stack || error.message || error);
    return NextResponse.json(
      {
        message: "Something went wrong",
        error: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
