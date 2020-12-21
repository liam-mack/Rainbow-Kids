import React from "react";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import BannerImage from "../../components/BannerImage/BannerImage";
import ContactForm from "../../components/ContactForm/ContactForm"
import {contactObjOne, contactObjTwo} from "./ContactData"

function Contact(props) {
  return (
    <div>
      <BannerImage name='hero' banner="ContactBanner" alt="Contact banner"/>
      <HeroComponent {...contactObjOne} />
      <HeroComponent {...contactObjTwo} />
      <ContactForm />
    </div>
  );
}

export default Contact;
