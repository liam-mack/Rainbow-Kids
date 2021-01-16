import React from "react";
import { Button } from "../Button/Button";
import "./StaffCard.css";

function StaffCard({ id, name, position, biography, image }) {
  // let photoUrl = (name.replace(/\s+/g, ''));
  return (
    <div className="staff-card">
      <div className="staff-content">
        <img
          className="staff-profile"
          src={image}
          alt={`${name}-profile`}
        ></img>
      </div>
      <strong> {name} </strong>
      <br />
      <em className="staff-position"> {position} </em>
      <strong> {biography} </strong>
      <br />
      {id % 2 === 0 ? (
        <Button buttonColour="whiteBtn">Details</Button>
      ) : (
        <Button buttonColour="peachBtn">Details</Button>
      )}
    </div>
  );
}

export default StaffCard;
