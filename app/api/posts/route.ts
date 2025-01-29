"use server";

import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextRequest } from "next/server";

export async function GET() {
  const client = await connectDB;
  const db = client.db("clone-arcalive");
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
    const requestBody = await request.json();

    const client = await connectDB;
    const db = client.db("clone-arcalive");
    const result = await db.collection("posts").insertOne(requestBody);

    if (result.acknowledged === false)
      throw new Error("예상치 못한 이유로 등록을 할 수 없었습니다.");

    return new Response(JSON.stringify(result), {
      status: 200,
      statusText: "OK",
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(request: NextRequest) {
  const modifiedContent = await request.json();
  console.log(modifiedContent.id);

  try {
    const client = await connectDB;
    const db = client.db("clone-arcalive");
    const result = await db.collection("posts").updateOne(
      { _id: new ObjectId(modifiedContent.id) }, // 필터 조건
      {
        $set: { name: modifiedContent.name, content: modifiedContent.content },
      },
    );

    if (result.acknowledged === false)
      throw new Error("예상치 못한 이유로 수정을 실패하였습니다.");

    return new Response(JSON.stringify(result), {
      status: 200,
      statusText: "OK",
    });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const deleteTarget = await request.json();

  try {
    const client = await connectDB;
    const db = client.db("clone-arcalive");
    const result = await db
      .collection("posts")
      .deleteOne({ _id: new ObjectId(deleteTarget.id) });

    if (result.acknowledged === false)
      throw new Error("예상치 못한 이유로 삭제을 실패하였습니다.");

    return new Response(null, { status: 200, statusText: "OK" });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
}
