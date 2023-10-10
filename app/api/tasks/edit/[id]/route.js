import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

let prisma = new PrismaClient();

export async function PATCH(request, { params }) {
  try {
    const id = params.id;
    const { title, Status, Priority } = await request.json();
    const updateTask = await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        Status: Status,
        Priority: Priority,
      },
    });
    return NextResponse.json(updateTask);
  } catch (error) {
    console.error("Error in DELETE request", error);
  }
}
