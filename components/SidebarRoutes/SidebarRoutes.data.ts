import {
  BarChart4,
  Building2,
  PanelsTopLeft,
  Settings,
  ShieldCheck,
  CircleHelpIcon,
  Calendar,
} from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: PanelsTopLeft,
    label: "Panel",
    href: "/",
  },
  {
    icon: Building2,
    label: "Empresas",
    href: "/empresas",
  },
  {
    icon: Calendar,
    label: "Calendario",
    href: "/tarea",
  },
];

export const dataToolsSidebar = [
  {
    icon: CircleHelpIcon,
    label: "Preguntas Frecuentes",
    href: "/preguntas-frecuentes",
  },
  {
    icon: BarChart4,
    label: "Analítica",
    href: "/analitica",
  },
];

export const dataSupportSidebar = [
  {
    icon: Settings,
    label: "Ajustes",
    href: "/ajustes",
  },
  {
    icon: ShieldCheck,
    label: "Seguridad",
    href: "/seguridad",
  },
];
