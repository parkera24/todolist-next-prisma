import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(request, { params }) {
  try {
    const id = params.id;
    await prisma.tasks.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ message: "ok" });
  } catch (error) {
    console.error("Error in DELETE request", error);
  }
}
