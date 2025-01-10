import { NEWS_URL, NEWS_API_KEY } from "@/config/constants";
import axios from "axios";
import { NextResponse } from "next/server";

let cachedNewsData: any = null;
let lastFetched: number = 0;
const CACHE_EXPIRY_TIME = 10 * 60 * 1000;

export async function GET() {
  try {
    const currentTime = Date.now();
    if (cachedNewsData && currentTime - lastFetched < CACHE_EXPIRY_TIME) {
      console.log("Returning cached news data");
      return NextResponse.json(cachedNewsData);
    }

    const newsData = await axios.get(
      `${NEWS_URL}?country=us&apiKey=${NEWS_API_KEY}`
    );

    cachedNewsData = newsData.data.articles;
    lastFetched = currentTime;

    console.log("Returning fresh news data");
    return NextResponse.json(cachedNewsData);
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
