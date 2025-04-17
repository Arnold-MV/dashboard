"use client";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { SidebarItem } from "../SidebarItem";

import {
  dataGeneralSidebar,
  dataToolsSidebar,
  dataSupportSidebar,
} from "./SidebarRoutes.data";

export const SidebarRoutes = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-4">
          <p className="text-slate-500 mb-2">GENERAL</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem item={item} key={item.label} />
          ))}
        </div>
        <Separator />
        <div className="p-2 md:p-3">
          <p className="text-slate-500 mb-2">HERRAMIENTAS</p>
          {dataToolsSidebar.map((item) => (
            <SidebarItem item={item} key={item.label} />
          ))}
        </div>
        <Separator />
        <div className="p-2 md:p-3">
          <p className="text-slate-500 mb-2">APOYO</p>
          {dataSupportSidebar.map((item) => (
            <SidebarItem item={item} key={item.label} />
          ))}
        </div>
      </div>
      <div>
        <div className="text-center p-3">
          <Button variant={"outline"} className="w-full">
            Plan de Actualización
          </Button>
        </div>
        <Separator />
        <footer className="mt-1 p-3 text-center">
          {year}. Todos los derechos reservados
        </footer>
      </div>
    </div>
  );
};
