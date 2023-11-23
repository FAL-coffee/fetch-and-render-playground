import { NextRequest, NextResponse } from "next/server";
import { getExampleUser } from "@/src/server/getExampleUser";

export async function GET(req: NextRequest) {
  const searchParams = new URL(req.url).searchParams;
  const pt = searchParams.get("pt");
  const ptNum = Number(pt);
  const parsedPt = isNaN(ptNum) ? 1 : ptNum;

  await new Promise((resolve) => setTimeout(resolve, parsedPt * 1000));
  return NextResponse.json(getExampleUser());
}
