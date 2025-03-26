import { NextResponse } from "next/server";
import sanityClient from "@/lib/sanityClient";

export async function GET() {
  try {
    const orders = await sanityClient.fetch(`*[_type == "order"] | order(_createdAt desc)`);
    return NextResponse.json({ success: true, orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch orders" });
  }
}
