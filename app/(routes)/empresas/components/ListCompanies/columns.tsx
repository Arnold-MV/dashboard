"use client";

import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react";

import { Company } from "@/lib/generated/prisma";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";

export const columns: ColumnDef<Company>[] = [
  {
    accessorKey: "profileImage",
    header: "Imagen de Perfil",
    cell: ({ row }) => {
      const image = row.getValue("profileImage");
      return (
        <div className="flex items-center space-x-3">
          <Image
            src={typeof image === "string" ? image : "/images/company-icon.png"}
            alt="Imagen"
            width={40}
            height={40}
            className="h-auto w-auto"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre de la empresa
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "cif",
    header: "CIF",
  },
  {
    accessorKey: "phone",
    header: "Teléfono",
  },
  {
    accessorKey: "country",
    header: "País",
  },
  {
    accessorKey: "website",
    header: "Sitio Web",
  },
  {
    id: "actions",
    header: "Acciones",
    cell: ({ row }) => {
      const { id } = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-4 w-8 p-0">
              <span className="sr-only">Abrir Menú</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <Link href={`/empresas/${id}`}>
              <DropdownMenuItem className="cursor-pointer">
                <Pencil className="mr-2 h-4 w-4" />
                Editar
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const Columns = () => {
  return <div>columns</div>;
};
