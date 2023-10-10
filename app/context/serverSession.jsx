import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function ServerSession() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
