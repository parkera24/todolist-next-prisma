import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

let prisma = new PrismaClient();

export async function DELETE({ params }) {
  try {
    const id = params.id;
    const deleteTask = await prisma.task.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json(deleteTask);
  } catch (error) {
    console.error("Error in DELETE request", error);
  }
}
