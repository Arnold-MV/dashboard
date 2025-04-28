"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormContact } from "./FormContact";

export const NewContact = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Agregar nuevo contacto</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] ">
        <DialogHeader>
          <DialogTitle>Agregar nuevo contacto</DialogTitle>
          <DialogDescription>
            Crea tus contactos para administrarlos después.
          </DialogDescription>
        </DialogHeader>
        <FormContact setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};
