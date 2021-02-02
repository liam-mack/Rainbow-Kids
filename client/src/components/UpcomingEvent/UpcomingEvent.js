import React from "react";
import "./UpcomingEvent.scss";

function UpcomingEvent({ month, day, title}) {
  return (
    <div className="upcomingEventCard">
      <div className="calendarEvent">
        <div className="dateTriangle">
          <span className="dateText eventMonth">FEB</span>
          <span className="dateText eventDay">{day}</span>
        </div>
      </div>
      <h2 className="upcomingTitle">{title}</h2>
      <small className="upcomingDesc">Description...</small>
    </div>
  );
}

export default UpcomingEvent;
