import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = req.body;
  console.log("___ /api route body: ", body);

  //   if (!body.fullName || !body.email) {
  //     return res.status(400).json({ data: "First or last name not found" });
  //   }

  return NextResponse.json({ msg: "all ok!" });
  // return NextResponse.redirect("/about");
  // redirect issue: https://github.com/vercel/next.js/issues/49964
};
