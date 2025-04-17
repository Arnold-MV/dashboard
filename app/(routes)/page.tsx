import { CardSummary } from "./components/CardSummary";
import { BookOpenCheck, UsersRound, Waypoints } from "lucide-react";
import { LastCustomers } from "./components/LastCustomers";
import { SalesDistributers } from "./components/SalesDistributers";
import { TotalSuscribers } from "./components/TotalSuscribers";
import { ListIntegrations } from "./components/ListIntegrations";
import { formatPrice } from "@/lib/formatPrice";

export const dataCardSummary = [
  {
    icon: UsersRound,
    total: "12.458",
    average: 15,
    title: "Empresas Creadas",
    tooltipText: "Ver todas las empresas creadas",
  },
  {
    icon: Waypoints,
    total: "86.5%",
    average: 80,
    title: "Ingresos totales",
    tooltipText: "Ver el resumen completo",
  },
  {
    icon: BookOpenCheck,
    total: formatPrice(1540.05),
    average: 30,
    title: "Tasa de Rebote",
    tooltipText: "Ver toda la tasa de rebote",
  },
];

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        {dataCardSummary.map(({ icon, total, average, title, tooltipText }) => (
          <CardSummary
            key={title}
            icon={icon}
            total={total}
            average={average}
            title={title}
            tooltipText={tooltipText}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 md:gap-x-10 mt-12">
        <LastCustomers />
        <SalesDistributers />
      </div>
      <div className="flex-col md:gap-x-10 xl:flex xl:flex-row gap-y-4 md:gap-y-0 mt-12 md:mb-10 justify-center">
        <TotalSuscribers />
        <ListIntegrations />
      </div>
    </div>
  );
}
