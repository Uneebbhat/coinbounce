import dbConnect from "@/config/dbConnect";
import BlogSchema from "@/schema/BlogSchema.schema";
import Blog from "@/model/Blog.model";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();

    console.log(body);

    const validateRequest = BlogSchema.parse(body);

    const { title, description, tags, author } = validateRequest;

    console.log(validateRequest);

    const newBlog = await Blog.create({
      title,
      description,
      tags,
      author: {
        authorId: author.authorId,
        authorName: author.authorName,
        authorPic: author.authorPic,
      },
    });

    if (!newBlog) {
      return NextResponse.json(
        {
          message: "Failed to create a new blog",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Blog created successfully",
        data: newBlog,
      },
      { status: 201 }
    );
  } catch (error: any) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          message: "Validation Error",
          details: error.errors,
        },
        { status: 400 }
      );
    }
    console.error(error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();

    const blog = await Blog.find();
    if (!blog) {
      return NextResponse.json(
        {
          message: "No blog found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "All blogs",
        data: blog,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
