
import { useState, useEffect } from "react";
import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import * as dragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "./Calendar.css";

// date fns localizer
const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const DnDCalendar = dragAndDrop.default.default(Calendar);


export default function ApptCalendar() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAppointments()
      .then((response) => {
        const formatted = response.data.map((appt) => {
          const start = new Date(appt.date);
          const end = new Date(start.getTime() + 60 * 60 * 1000); 

          return {
            id: appt._id,
            title: `${appt.pet?.name ?? "Unknown pet"} - ${appt.visitType ?? "Visit"}`,
            start,
            end,
            allDay: false,
          };
        });
        setEvents(formatted);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

   const moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
    const { allDay } = event;
    let updatedAllDay = allDay;

    if (!allDay && droppedOnAllDaySlot) {
      updatedAllDay = true;
    } else if (allDay && !droppedOnAllDaySlot) {
      updatedAllDay = false;
    }

    // reflect the move immediately on screen- need updating
    setEvents((prev) =>
      prev.map((ev) =>
        ev.id === event.id ? { ...ev, start, end, allDay: updatedAllDay } : ev
      )
    );

    
    updateAppointment(event.id, { date: start }).catch((err) => {
      console.error("Failed to save new appointment time:", err);
      
      setEvents((prev) =>
        prev.map((ev) =>
          ev.id === event.id ? { ...ev, start: event.start, end: event.end } : ev
        )
      );
    });
  };

  const resizeEvent = ({ event, start, end }) => {
    
    setEvents((prev) =>
      prev.map((ev) => (ev.id === event.id ? { ...ev, start, end } : ev))
    );

    updateAppointment(event.id, { date: start }).catch((err) => {
      console.error("Failed to save resized appointment:", err);
      setEvents((prev) =>
        prev.map((ev) =>
          ev.id === event.id ? { ...ev, start: event.start, end: event.end } : ev
        )
      );
    });
  };

  if (loading) return <p>Loading calendar...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <div className="calendar-app">
         <DnDCalendar
        localizer={localizer}
        events={events}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        resizable
        selectable
        defaultView="month"
        style={{ height: '100%' }}
      />
    </div>
  );
}