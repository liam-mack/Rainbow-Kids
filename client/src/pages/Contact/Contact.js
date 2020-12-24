import React from "react";
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import BannerImage from "../../components/BannerImage/BannerImage";
import ContactForm from "../../components/ContactForm/ContactForm"
import {contactObjOne, contactObjTwo} from "./ContactData"

function Contact(props) {
  return (
    <div>
      <BannerImage name='hero' banner="ContactBanner" alt="Contact banner"/>
      <PrimaryComponent {...contactObjOne} />
      <PrimaryComponent {...contactObjTwo} />
      <ContactForm />
    </div>
  );
}

export default Contact;
