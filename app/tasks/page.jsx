import { columns } from "./columns";
import { default as DataTable } from "./data-table";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

async function getData(id) {
  const posts = await prisma.tasks.findMany({
    where: {
      userId: id,
    },
  });
  return posts;
}

export default async function page() {
  const session = await getServerSession(authOptions);
  let userid = session.id;

  const data = await getData(userid);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
