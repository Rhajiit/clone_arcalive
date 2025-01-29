"use client";

import {
  requestCreationPost,
  requestDeletePost,
  requestPostList,
  requestUpdatePost,
} from "@/utils/request";

export default function Home() {
  const mongoGetTest = async () => {
    const result = await requestPostList();
    console.log(result);
  };
  const mongoPUTTest = async () => {
    await requestUpdatePost({
      id: "679a6696ad8c325f6bf2cf81",
      name: "postsName",
      content: "시험용 게시물 수정",
    });
  };
  const mongoTest = async () => {
    await requestCreationPost({
      name: "test",
      content: "test content",
    });
  };
  const mongoDeleteTest = async () => {
    await requestDeletePost({
      id: "679a6696ad8c325f6bf2cf81",
    });
  };

  return (
    <>
      <button onClick={() => mongoTest()}>mongoPost</button>
      <button onClick={() => mongoGetTest()}>mongoGet</button>
      <button onClick={() => mongoPUTTest()}>mongoPut</button>
      <button onClick={() => mongoDeleteTest()}>mongoDelete</button>
    </>
  );
}
