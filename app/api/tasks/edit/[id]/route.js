import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(request, { params }) {
  try {
    const id = params.id;
    const { title, Status, Priority } = await request.json();
    const updateTask = await prisma.tasks.update({
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
