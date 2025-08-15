import { NextResponse } from "next/server";
import { getTodos, addTodo } from "@/lib/todos";

export async function GET() {
  return NextResponse.json(getTodos());
}

export async function POST(req) {
  const body = await req.json();
  const newTodo = {
    id: Date.now().toString(),
    title: body.title,
    completed: false
  };
  addTodo(newTodo);
  return NextResponse.json(newTodo, { status: 201 });
}
