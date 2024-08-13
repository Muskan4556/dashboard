import { useState } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import Heading from "../../components/Heading";

const Calender = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // array of events (calendar)
  const [currentEvent, setCurrentEvent] = useState([]);

  const handleDateClick = (selected) => {
    console.log(selected);
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event ${selected.event.title}`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Heading title={`CALENDAR`} subtitle={`Full Calendar Interactive Page`} />

      <Box display="flex" justifyContent="space-between">
        {/* Calendar Sidebar (events) */}
        {/* flex = grow shrink width */}
        <Box
          flex="1 1 20%"
          bgcolor={colors.primary[400]}
          padding="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          {/* Map through currentEvent, thats why we initialize currentEvent to be an empty array */}
          <List>
            {currentEvent.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography> // func provided by full calendar
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Calendar */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth" // default - month calendar
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick} // event handler for when the date is clicked
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvent(events)} // save event that we have created
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2024-08-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2024-08-28",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calender;

/*
- **`dateStr`**: A string representation of the clicked date in ISO format (e.g., `2023-08-23`).
- **`startStr`**: The start date/time of the selected date range or event, as a string in ISO format.
- **`endStr`**: The end date/time of the selected date range or event, as a string in ISO format.
- **`allDay`**: A boolean indicating whether the event spans the entire day or just a specific time period.
- **`view`**: An object representing the current view of the calendar, which includes the `calendar` API.
*/
