import React from "react";
import "./ContactForm.css";

function Contact() {
  return (
    <div className="row primary__hero-row">
      <div className="col">
        <form
          id="contactForm"
          action="https://formspree.io/xqkyrlvg"
          method="POST"
        >
          <label for="Name">First Name (required)</label>
          <input className="contactData"type="text" id="name" name="Name" required />
          <label for="LastName">Last Name (required)</label>
          <input className="contactData"type="name" id="lastname" name="LastName" required />
          <label for="Email">Your Email (required)</label>
          <input className="contactData"type="email" id="Email" name="Email" required />
          <label for="elaborate">Your Message</label>
          <textarea
            className="contactData"
            name="elaborate"
            id="elaborate"
            cols="20"
            rows="10"
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="col">
        <div className="primary__hero-img-wrapper">
          <img src="/images/swingSet.jpg" alt="swingSet" className="primary__hero-img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
