"use client";

import { useRouter } from "next/navigation";

import axios from "axios";
import { Trash } from "lucide-react";

import { Button } from "@/components/ui/button";

import { FooterCompanyProps } from "./FooterCompany.types";
import { toast } from "sonner";

export const FooterCompany = (props: FooterCompanyProps) => {
  const { empresasId } = props;

  const router = useRouter();

  const onDeleteCompany = async () => {
    try {
      axios.delete(`/api/empresas/${empresasId}`);
      toast.success("Empresa eliminada");
      router.push("/empresas");
    } catch {
      toast.error("Algo salió mal");
    }
  };

  return (
    <div className="flex justify-end mt-5">
      <Button variant="destructive" onClick={onDeleteCompany}>
        <Trash className="h-4 w-4 mr-2" />
        Eliminar empresa
      </Button>
    </div>
  );
};
