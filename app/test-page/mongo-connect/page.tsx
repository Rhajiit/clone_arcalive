"use client";

import dbTest from "@/utils/test-page-only/db-connect";

export default function Home() {
  const mongoTest = async () => {
    const result = await dbTest();
    console.log(result);
  };

  return <button onClick={() => mongoTest()}>asdfasdf</button>;
}
