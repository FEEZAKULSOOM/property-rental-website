import React from 'react';
import "./Contact.css";
import { MdSend } from "react-icons/md";
import { useRef } from 'react';

function Contact() {
    const formRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);

        try {
            const response = await fetch("https://formspree.io/f/xrealjdz", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                // Clear the form
                formRef.current.reset();

                // Redirect to Formspree success page
                window.location.href = "https://formspree.io/thanks";
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div id="contact">
            <form ref={formRef} onSubmit={handleSubmit}>
                <span id="contactTitle">Contact Us</span>

                <div className="list">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>

                <div className="list">
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" id="email" required />
                </div>

                <div className="list">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        style={{
                            width: '90%',
                            backgroundColor: '#fff',
                            padding: '3px',
                            boxSizing: 'border-box',
                            outline: 'none',
                            fontSize: '15px',
                            fontWeight: '300',
                            borderTop: 'none',
                            borderRight: 'none',
                            borderLeft: 'none',
                            borderBottom: '1px solid #0A1F33',
                            fontFamily: 'inherit',
                            resize: 'vertical'
                        }}
                        onFocus={(e) => {
                            e.target.style.border = '2px solid #C89B3C';
                        }}
                        onBlur={(e) => {
                            e.target.style.border = 'none';
                            e.target.style.borderBottom = '1px solid #0A1F33';
                        }}
                    ></textarea>
                </div>

                <button type="submit" id="contactBtn">
                    Submit <MdSend />
                </button>

            </form>
        </div>
    )
}

export default Contact;