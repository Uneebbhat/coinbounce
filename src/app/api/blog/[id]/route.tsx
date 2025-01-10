import dbConnect from "@/config/dbConnect";
import Blog from "@/model/Blog.model";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const { id } = params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json(
        {
          message: "Blog not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Blog found",
        data: blog,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
