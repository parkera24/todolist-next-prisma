import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginBtn from "./components/loginBtn";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <main>
      <h1>Placeholder</h1>
      <LoginBtn />
    </main>
  );
}
