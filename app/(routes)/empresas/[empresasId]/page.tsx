import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Header } from "./components/Header";
import { CompanyInformation } from "./components/CompanyInformation";
import { FooterCompany } from "./components/FooterCompany";

// Tipado correcto según App Router de Next.js
interface CompanyIdPageProps {
  params: {
    empresasId: string;
  };
}

const CompanyIdPage = async ({ params }: CompanyIdPageProps) => {
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
