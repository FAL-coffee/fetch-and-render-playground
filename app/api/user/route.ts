import { NextRequest, NextResponse } from "next/server";
import { getExampleUsers } from "@/src/server/getExampleUsers";

export async function GET(req: NextRequest) {
  const searchParams = new URL(req.url).searchParams;
  const ft = searchParams.get("ft");
  const ftNum = Number(ft);
  const parsedFt = isNaN(ftNum) ? 1 : ftNum;

  await new Promise((resolve) => setTimeout(resolve, parsedFt * 1000));
  return NextResponse.json(getExampleUsers());
}
