import { CRYPTO_URL } from "@/config/constants";
import axios from "axios";
import { NextResponse } from "next/server";
import NodeCache from "node-cache";

const cache = new NodeCache();

export async function GET() {
  try {
    let cryptoData = cache.get("crypto");
    if (!cryptoData) {
      const response = await axios.get(`${CRYPTO_URL}`);
      cryptoData = response.data;
      cache.set("crypto", cryptoData);
      console.log("Fetched new data:", cryptoData);
    } else {
      console.log("Serving from cache");
    }
    return NextResponse.json(cryptoData);
  } catch (error: any) {
    console.error("Error fetching data:", error.message);
    return NextResponse.json(
      { message: "Failed to fetch crypto data", error: error.message },
      { status: 500 }
    );
  }
}
