
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