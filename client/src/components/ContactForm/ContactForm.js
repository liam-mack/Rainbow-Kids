import React from "react";
import "./ContactForm.scss";

// Formspree currently has a form handler & Thank You page, but it should be redirected
function Contact() {
  return (
    <div className="container contact">
      <h1>Message us!</h1>
    <div className="row primary__hero-row">
      <div className="contactCol">
        <form id="contactForm" action="https://formspree.io/xqkyrlvg" method="POST">
          <label>First Name (required)</label>
          <input className="contactData"type="text" id="name" name="Name" required />
          <label>Last Name (required)</label>
          <input className="contactData"type="name" id="lastname" name="LastName" required />
          <label>Your Email (required)</label>
          <input className="contactData"type="email" id="Email" name="Email" required />
          <label>Your Message</label>
          <textarea className="contactData" name="elaborate" id="elaborate" cols="20"rows="10"></textarea>
          <input className="submitBtn" type="submit" value="Submit"/>
        </form>
      </div>
      <div className="col">
        <div className="primary__hero-img-wrapper">
          <img src="/images/swingSet.jpg" alt="swingSet" className="primary__pic-img" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
