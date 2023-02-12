import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'



const localizer = momentLocalizer(moment)

function MyCalendar(props) {
    const myEventsList = [
        { date: new Date(2022, 9, 3), title: "appointment", color: "#238783" },
        { date: new Date(2022, 9, 6), title: "doctos", color: "#708898" },
        { date: new Date(2022, 9, 25), title: "bd", color: "#047106" },
        { date: new Date(2022, 9, 3), title: "second", color: "#371395" }
      ];
    return (
        <div>
               <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
        </div>
    )
}

export default MyCalendar;