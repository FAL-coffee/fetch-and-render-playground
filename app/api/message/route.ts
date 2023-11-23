import { NextRequest, NextResponse } from "next/server";
import { getExampleMessages } from "@/src/server/getExampleMessages";

export async function GET(req: NextRequest) {
  const searchParams = new URL(req.url).searchParams;
  const mt = searchParams.get("mt");
  const mtNum = Number(mt);
  const parsedMt = isNaN(mtNum) ? 1 : mtNum;

  await new Promise((resolve) => setTimeout(resolve, parsedMt * 1000));
  return NextResponse.json(getExampleMessages());
}
