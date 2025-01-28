export async function GET() {
  return Response.json({ message: "hello! GET!" });
}

export async function POST() {
  return Response.json({ message: "hello! POST!" });
}

export async function PUT() {
  return Response.json({ message: "hello! PUT!" });
}

export async function DELETE() {
  return Response.json({ message: "hello! DELETE!" });
}
