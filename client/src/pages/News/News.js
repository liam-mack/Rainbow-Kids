import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount/ScrollToTopOnMount";
import Footer from "../../components/Footer/Footer";
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import Carousel from "../../components/Carousel/Carousel";
import { newsObjOne } from "./NewsData.js";
import "./News.css";


// Fix: Light text to picture descriptions
function About() {

  // const gapi = window.gapi;
  // const CLIENT_ID = "848448063852-m1va03bbkkmj01sjfpomkf8moqsvaspd.apps.googleusercontent.com";
  // const API_KEY = "AIzaSyD2R3k96hTSUteE9ohEWQXYEsNPk86nLls";
  // const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
  // const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

  return (
    <div>
      <ScrollToTopOnMount />
      <div className="container">
        <h1 className="newsTitle">News</h1>
      </div>
      <Carousel />
      <div className="container eventSection">
        {/* <h1 style={{textAlign:"center"}}>Keep up with us</h1> */}
        <h1 style={{textAlign:"center"}}>Events Calendar</h1>
          <div className="responsiveCal">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=b5uqj9osvtsstl8ggtk1bie2dc%40group.calendar.google.com&ctz=America%2FToronto&amp;showTitle=0&amp;showNav=1&amp;showTabs=0showCalendars=0&amp;showTz=0&amp;showPrint=0"
              width="800"
              height="600"
              frameborder="0"
              scrolling="no"
            ></iframe>{" "}
          </div>
      </div>
      <PrimaryComponent {...newsObjOne} />

      <Footer />
    </div>
  );
}

export default About;
