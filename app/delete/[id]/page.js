import { DeleteForm } from "./DeleteForm";
import prisma from "@/lib/prisma";

export default async function page({ params }) {
  const tasks = await prisma.tasks.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <DeleteForm taskData={tasks} />
      </div>
    </div>
  );
}
