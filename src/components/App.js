import React, { useState } from "react"
import EmployeeList from "./EmployeeList";
import ScheduleCard from "./ScheduleCard";
import Header from "./Header";



function App() {
  return (
    <div className="App">
      <Header />
      <EmployeeList />
      <ScheduleCard />
    </div>
  );
}

export default App;
