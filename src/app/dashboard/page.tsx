import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const DashboardPage =  async () => {
  const auth = await currentUser();

  if(!auth) {
    redirect("/sign-in");
  }

  return (
    <div>
      DashboardPage
    </div>
  )
}

export default DashboardPage;