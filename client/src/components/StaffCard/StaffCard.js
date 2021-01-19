import React, { useState } from "react";
import { Button } from "../Button/Button";
import Modal from 'react-modal'
import "./StaffCard.css";

Modal.setAppElement("#root");

function StaffCard(props) {
  const [modalisOpen, setModalIsOpen] = useState(false);
  const [modalContent, setStaffModal] = useState({
    name: "",
    position: "",
    biography: "",
    image: ""
  })

  function buttonClick({name, position, biography, image}) {
    setStaffModal({...modalContent, name, position, biography, image})
    setModalIsOpen(true);
  }
  return (
    <div className="staff-card">
      <div className="staff-content">
        <img
          className="staff-profile"
          src={props.image}
          alt={`${props.name}-profile`}
        ></img>
      </div>
      <strong> {props.name} </strong>
      <br />
      <em className="staff-position"> {props.position} </em>
      <br />

      <br />
      {props % 2 === 0 ? (
        <Button buttonColour="whiteBtn" onClick={() => buttonClick(props)}>
          Details
        </Button>
      ) : (
        <Button buttonColour="peachBtn" onClick={() => buttonClick(props)}>
          Details
        </Button>
      )}
      <Modal className="staffModal"isOpen={modalisOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style = {
        {
          overlay: {
          backgroundColor: "grey"
          },
          // content: {
          //   textAlign: "center",
          //   width: "25em",
          //   height: "40em",
          //   margin: "auto",
          //   marginTop: "4rem",
          //   backgroundImage: " linear-gradient(to top, #ffffff 70%, #FAB96C 30% )", 

          // }
        }
      }
      >
        <img
          className="modal-profile"
          src={modalContent.image}
          alt={`${modalContent.name}-profile`}
        ></img>
        <h1 className="modal-name">{modalContent.name}</h1>
        <strong>{modalContent.position}</strong>
        <br/>
        <p className="modalText">
          {modalContent.biography}
        </p>
      </Modal>
    </div>
  );
}

export default StaffCard;
