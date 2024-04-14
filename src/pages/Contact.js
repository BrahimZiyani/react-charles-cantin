import React from 'react';
import './Contact.css';


// Define a React functional component named ContactPage
// This component renders a contact form with input fields for name, email, subject, a send button, and a textarea for a message
function ContactPage() {
  return (
    <div className='contact'>
      <h1>Contact Form</h1>
      <div className='container'>
        <div className='left-container'>
          <div className='input-container'>
            <input type='text' placeholder='Name' />
          </div>
          <div className='input-container'>
            <input type='email' placeholder='Email' />
          </div>
          <div className='input-container'>
            <input type='text' placeholder='Subject' />
          </div>
          <div className='button-container'>
            <button className='send-button'>Send</button>
          </div>
        </div>
        <div className='right-container'>
          <textarea placeholder='Message ...' />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;