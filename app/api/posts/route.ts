"use server";

import { connectDB } from "@/utils/database";
import { NextRequest } from "next/server";

export async function GET() {
  const client = await connectDB;
  const db = client.db("posts_db");
  const result = (await db.collection("posts").find().toArray()).map(
    (item) => ({ ...item, _id: item._id.toString() }),
  );

  return new Response(JSON.stringify(result), {
    status: 200,
    statusText: "OK",
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: NextRequest) {
  try {
    if (request.body === null)
      throw new Error("보내고자 하는 내용이 없습니다.");
    const requestBody = request.body;

    const client = await connectDB;
    const db = client.db("posts_db");
    const result = await db.collection("posts").insertOne(requestBody);

    if (result.acknowledged === false)
      throw new Error("예상치 못한 이유로 등록을 할 수 없었습니다.");

    return new Response(JSON.stringify(result), {
      status: 200,
      statusText: "OK",
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }

  return Response.json({ message: "hello! POST!" });
}

export async function PUT() {
  return Response.json({ message: "hello! PUT!" });
}

export async function DELETE() {
  return Response.json({ message: "hello! DELETE!" });
}
