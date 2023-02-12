import React, { useState } from "react"
import EmployeeList from "./EmployeeList";
import ScheduleCard from "./ScheduleCard";
import Header from "./Header";
import MyCalendar from "./MyCalendar";



function App() {
  return (
    <div className="App">
      <Header />
      <MyCalendar />
      <EmployeeList />
      <ScheduleCard />
    </div>
  );
}

export default App;
