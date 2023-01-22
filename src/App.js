import React, { useState } from "react"
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css"
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import DatePicker from "react-datepicker"
import './App.css';


const locales = {
  "en-US": require("date-fns/locale/en-US")
}
const localizer = dateFnsLocalizer({
  format, 
  parse,
  startOfWeek,
  getDay, 
  locales

})

const events = [
  {
    title: "Big Meeting",
    allDay: true, 
    start: new Date(2023,1,1),
    end: new Date(2023,2,2)
  },
  {
    title: "Other Big Meeting",
    allDay: true, 
    start: new Date(2023,1,6),
    end: new Date(2023,2,2)
  }
]

function App() {
  return (
    <div className="App">
  
    <Calendar 
      localizer={localizer} 
      events={events} 
      startAccessor="start" 
      endAccessor="end"
      style={{height: 500}}
    />

    </div>
  );
}

export default App;
