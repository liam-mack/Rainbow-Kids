import React, { useState } from "react";
import Modal from "react-modal";
import { Button } from "../../components/Button/Button";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount/ScrollToTopOnMount";
import Footer from "../../components/Footer/Footer";
import UpcomingEvent from "../../components/UpcomingEvent/UpcomingEvent";
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import Carousel from "../../components/Carousel/Carousel";
import { newsObjOne } from "./NewsData.js";
import "./News.css";

Modal.setAppElement("#root");

// Fix: Light text to picture descriptions
function About() {
  const [modalisOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  // const gapi = window.gapi;
  // const CLIENT_ID = "848448063852-m1va03bbkkmj01sjfpomkf8moqsvaspd.apps.googleusercontent.com";
  // const API_KEY = "AIzaSyD2R3k96hTSUteE9ohEWQXYEsNPk86nLls";
  // const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
  // const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

  return (
    <div>
      <ScrollToTopOnMount />
      <div className="container">
        <h1>News</h1>
      </div>
      <Carousel />
      <div className="container eventSection">
        <h1>Upcoming Events</h1>
        <div className="upcomingWrapper">
          <UpcomingEvent day="08" title="Team Meeting"/>
          <UpcomingEvent day="15" title="Team Meeting"/>
          <UpcomingEvent day="16" title="Speaker - Sara Fortier"/>
        </div>
        <Button
          buttonColour="greyBtn"
          onClick={openModal}
          style={{ margin: "auto" }}
        >
          Full Calendar
        </Button>
        <Modal
          className="calendarModal"
          isOpen={modalisOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <div className="responsiveCal">
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FToronto&amp;src=NDdiMWNkMWc2dGk2ZWYxZzc2ZmtuNWxlcDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%239E69AF&amp;showTitle=0&amp;showNav=1&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;showPrint=0"
              width="800"
              height="600"
              frameborder="0"
              scrolling="no"
            ></iframe>{" "}
          </div>
        </Modal>
      </div>
      <PrimaryComponent {...newsObjOne} />

      <Footer />
    </div>
  );
}

export default About;
