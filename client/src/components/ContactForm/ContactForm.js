import React from 'react'
import "./ContactForm.css"

function Contact() {
    return (
        <form
            id="contactForm"
            action="https://formspree.io/xqkyrlvg"
            method="POST"
        >
            <label for="Name">Name:</label>
            <input
                type="text"
                id="name"
                name="Name"
                placeholder="Please enter your name..."
                required
            />
            <label for="Email">Email:</label>
            <input
                type="email"
                id="email"
                name="Email"
                placeholder="Please enter your email..."
                required
            />
            <label for="Purpose">Purpose:</label>
            <select id="purpose" name="Purpose" required>
                <option value="Resume">Registration</option>
                <option value="Job">Job/Volunteer Position</option>
                <option value="Other">Other</option>
            </select>
            <label for="elaborate">Message:</label>
            <textarea
                name="elaborate"
                id="elaborate"
                cols="20"
                rows="10"
            ></textarea>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Contact
