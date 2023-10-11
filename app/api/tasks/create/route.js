import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request) {
  try {
    const { title, Status, Priority, userId } = await request.json();
    const addTask = await prisma.tasks.create({
      data: {
        title: title,
        Status: Status,
        Priority: Priority,
        userId: userId,
      },
    });

    return NextResponse.json(addTask);
  } catch (error) {
    console.error("Error in Post request", error);
  }
}
