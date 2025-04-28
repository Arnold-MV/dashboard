"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ModalAddEventProps } from "./ModalAddEvent.types";
import { FormEvent } from "../FormEvent";

export const ModalAddEvent = (props: ModalAddEventProps) => {
  const { open, setOpen, setOnSaveNewEvent, companies, setNewEvent } = props;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Añadir un nuevo evento</DialogTitle>
        </DialogHeader>
        <FormEvent
          companies={companies}
          setNewEvent={setNewEvent}
          setOnSaveNewEvent={setOnSaveNewEvent}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  );
};
