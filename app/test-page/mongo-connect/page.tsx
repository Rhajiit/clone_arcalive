"use client";

import { requestCreationPost, requestPostList } from "@/utils/request";

export default function Home() {
  const mongoGetTest = async () => {
    const result = await requestPostList();
    console.log(result);
  };
  const mongoTest = async () => {
    await requestCreationPost({
      name: "test",
      content: "test content",
    });
  };

  return (
    <>
      <button onClick={() => mongoTest()}>mongoPost</button>
      <button onClick={() => mongoGetTest()}>mongoGet</button>
    </>
  );
}
