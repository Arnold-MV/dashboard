import { CustomIcon } from "@/components/CustomIcon";
import { GraphicSuscribers } from "@/components/GraphicSuscribers";
import { BarChart } from "lucide-react";

export const SalesDistributers = () => {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5">
      <div className="flex gap-x-2 items-center">
        <CustomIcon icon={BarChart} />
        <p className="text-xl">Distribución de Ventas</p>
      </div>
      <GraphicSuscribers />
    </div>
  );
};
