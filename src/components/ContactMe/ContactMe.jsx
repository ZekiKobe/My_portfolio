import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/contactForm'

function ContactMe() {
    return (
        <section className="contact-container" id='contact'>
            <h5>Contact Me</h5>
            <hr />

            <div className="contact-content">
                <div style={{flex:1}}>
                    <ContactInfoCard iconUrl="./assets/images/gmail.svg"
                    text="gagurekobe@gmail.com"
                    />
                    <ContactInfoCard iconUrl="./assets/images/phone.png"
                    text="+251993676861"
                    />
                    <div className="social-media-icons">
                        <a href="https://www.linkedin.com/in/zekarias-kobota-1695a0246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <img src="./assets/images/linkedin.svg" alt="" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61556368776937"><img src="./assets/images/facebook.svg" alt="" /></a>
                        
                        <a href="https://www.instagram.com/kobezeki?igsh=aGl6OXVnZHhmemVv"><img src="./assets/images/instagram1.svg" alt="" /></a>
                        <a href="https://www.facebook.com/profile.php?id=61556368776937">
                        <img src="./assets/images/github1.svg" alt="" />
                        </a>
                    </div>
                </div>
                <div style={{flex:1}}>
                    <ContactForm/>
                </div>
            </div>
        </section>
    )
}

export default ContactMe
