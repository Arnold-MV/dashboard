"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import multiMonthPlugin from "@fullcalendar/multimonth";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { DateSelectArg, EventContentArg } from "@fullcalendar/core/index.js";

import axios from "axios";

import { formatDate } from "@/lib/formatDate";

import { CalendarProps } from "./Calendar.types";
import { ModalAddEvent } from "../ModalAddEvent";
import { toast } from "sonner";

export const Calendar = (props: CalendarProps) => {
  const { companies, events } = props;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [onSaveNewEvent, setOnSaveNewEvent] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DateSelectArg>();
  const [newEvent, setNewEvent] = useState({
    eventName: "",
    companieSelected: {
      name: "",
      id: "",
    },
  });

  const handleDateClick = async (selected: DateSelectArg) => {
    setOpen(true);
    setSelectedItem(selected);
  };

  useEffect(() => {
    if (onSaveNewEvent && selectedItem?.view.calendar) {
      const calendarApi = selectedItem.view.calendar;
      calendarApi.unselect();

      const newEventPrisma = {
        companyId: newEvent.companieSelected.id,
        title: newEvent.eventName,
        start: new Date(selectedItem.start),
        allDay: false,
        timeFormat: "H(:mm)",
      };

      axios
        .post(
          `/api/empresas/${newEvent.companieSelected.id}/evento`,
          newEventPrisma
        )
        .then(() => {
          toast.success("Evento creado");
          router.refresh();
        })
        .catch(() => {
          toast.error("Error al crear el evento");
        });

      setNewEvent({
        eventName: "",
        companieSelected: {
          name: "",
          id: "",
        },
      });
      setOnSaveNewEvent(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSaveNewEvent, selectedItem, events]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEventClick = async (selected: any) => {
    if (
      window.confirm(
        `Estás seguro de que quieres eliminar este evento ${selected.event.title}`
      )
    ) {
      try {
        await axios.delete(`/api/evento/${selected.event._def.publicId}`);

        toast.success("Evento eliminado");

        router.refresh();
      } catch {
        toast.error("Algo salió mal.");
      }
    }
  };

  return (
    <div>
      <div className="md:flex gap-x-3">
        <div className="w-[200px] relative">
          <div className="overflow-auto absolute top-0 left-0 h-full w-full">
            <p className="text-xl mb-3">Listado de tareas</p>
            {events.map((currentEvent) => (
              <div
                className="p-4 rounded-lg shadow-md mb-2 bg-slate-200 dark:bg-background"
                key={currentEvent.id}
              >
                <p className="font-bold">{currentEvent.title}</p>
                <p>{formatDate(currentEvent.start)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 calendar-container">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
              multiMonthPlugin,
            ]}
            headerToolbar={{
              left: "prev,next,today",
              center: "title",
              right:
                "timeGridDay,timeGridWeek,dayGridMonth,multiMonthYear,listMonth",
            }}
            height="80vh"
            initialView="dayGridMonth"
            weekends={false}
            events={events}
            eventContent={renderEventContent}
            editable={true}
            selectable={true}
            selectMirror={true}
            select={handleDateClick}
            eventClick={handleEventClick}
          />
        </div>
      </div>
      <ModalAddEvent
        companies={companies}
        open={open}
        setNewEvent={setNewEvent}
        setOnSaveNewEvent={setOnSaveNewEvent}
        setOpen={setOpen}
      />
    </div>
  );
};

function renderEventContent(eventInfo: EventContentArg) {
  return (
    <div className="bg-slate-200 dark:bg-background w-full p-1">
      <i>{eventInfo.event.title}</i>
    </div>
  );
}
