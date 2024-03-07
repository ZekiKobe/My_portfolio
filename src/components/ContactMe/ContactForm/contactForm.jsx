import React from 'react'
import './contactForm.css'

function ContactForm() {


    return (
      <div className="contact-form-content">
        <form action="" onSubmit={()=>{}}>
            <div className="name-container">
                <input type="text" name='firstname' placeholder='First Name' />
                <input type="text" name='lastname' placeholder='Last Name' />
            </div>
            <input type="email" name='email' placeholder='E-mail' />
            <textarea type="text" name="message" rows={3} placeholder='Message'/>

            <button>SEND</button>
        </form>
      </div>  
    )
}

export default ContactForm
