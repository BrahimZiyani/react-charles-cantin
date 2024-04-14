import React from 'react';
import { useForm } from '@formspree/react';
import './Contact.css';


// Define a React functional component named ContactPage
// This component renders a contact form with input fields for name, email, subject, a send button, and a textarea for a message
function ContactPage() {
  const [state, handleSubmit] = useForm("mjvnpzpr");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }


  return (
    <div className='contact'>
      <h1>Contact Form</h1>
      <form action='https://formspree.io/f/mjvnpzpr' className='container' onSubmit={handleSubmit} method='POST'>
        <div className='left-container'>
          <div className='input-container'>
            <input name='name' type='text' placeholder='Name' />
          </div>
          <div className='input-container'>
            <input name='email' type='email' placeholder='Email' />
          </div>
          <div className='input-container'>
            <input name='subject' type='text' placeholder='Subject' />
          </div>
          <div className='button-container'>
            <button type="submit" className='send-button'>Send</button>
          </div>
        </div>
        <div className='right-container'>
          <textarea placeholder='Message ...' />
        </div>
      </form>
    </div>
  );
}

export default ContactPage;