import { currentUser } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";

import { db } from "@/db";
import { DashboardPage } from "@/components/dashboard-page";
import { CategoryPageContent } from "@/app/dashboard/category/[name]/category-page-content";

interface CategoryNamePageProps {
  params: {
    name: string | string[] | undefined;
  }
}

const CategoryNamePage = async ({
  params
}: CategoryNamePageProps) => {
  if(typeof params.name !== "string") notFound();

  const auth = await currentUser();
  if(!auth) notFound();

  const user = await db.user.findUnique({
    where: { externalId: auth.id },
  });
  if(!user) notFound();

  const category = await db.eventCategory.findUnique({
    where: {
      name_userId: {
        name: params.name,
        userId: user.id,
      },
    },
    include: {
      _count: {
        select: {
          events: true,
        },
      },
    },
  });

  if(!category) notFound();

  const hasEvents = category._count.events > 0;

  return (
    <DashboardPage
      title={`${category.emoji} ${category.name} events`}
    >
      <CategoryPageContent
        hasEvents={hasEvents}
        category={category}
      />
    </DashboardPage>
  )
}

export default CategoryNamePage;