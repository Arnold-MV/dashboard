import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Header } from "./components/Header";
import { CompanyInformation } from "./components/CompanyInformation";
import { FooterCompany } from "./components/FooterCompany";

const CompanyIdPage = async ({
  params,
}: {
  params: { empresasId: string };
}) => {
  const { userId } = auth();

  if (!userId) return redirect("/");

  const company = await db.company.findUnique({
    where: {
      id: params.empresasId,
      userId,
    },
  });

  if (!company) return redirect("/");

  return (
    <div>
      <Header />
      <CompanyInformation company={company} />
      <FooterCompany empresasId={company.id} />
    </div>
  );
};

export default CompanyIdPage;
