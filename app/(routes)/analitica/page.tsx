import { redirect } from "next/navigation";

import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { CompaniesChart } from "./components/CompaniesChart";

const PageAnalytics = async () => {
  const { userId } = auth();
  if (!userId) return redirect("/");

  const companies = await db.company.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const events = await db.event.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="bg-background shadow-md rounded-lg p-4">
      <h2 className="text-2xl mb-4">Página de Análisis</h2>
      <div>
        <CompaniesChart companies={companies} events={events} />
      </div>
    </div>
  );
};

export default PageAnalytics;
