import React, { useState,useContext } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
//require('dotenv').config()
// import 'dotenv/config'
import "./contact.css"
import { ThemeContext } from '../../context';


const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm("service_8v7caw8", "template_jtzu5am", formRef.current,"user_bD1TKEuWqxDHIm3MGhCzz")
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }

  return <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
          <div className="c-left">
              <h1 className="c-title">
                Let's plan out something together
              </h1>
              <div className="c-info">
                  <div className="c-info-item">
                      <img src="https://img.icons8.com/dusk/64/000000/apple-phone.png" className='c-icon'/>
                      9439371397
                  </div>
              </div>
              <div className="c-info-item">
                  <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-email-cyber-security-kiranshastry-lineal-color-kiranshastry-1.png" className='c-icon' alt=""/>
                  debasmitbiswal@outlook.com
              </div>
              <div className='c-info-item'>
                  <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-address-user-interface-flatart-icons-flat-flatarticons.png" className='c-icon' alt=""/>
                  Back of Sambedana Enclave,Telenga Sahi,Balasore
              </div>
          </div>
          <div className="c-right">
              <p className="c-desc">
                <b>What’s your story?</b> Get in touch. Always available for
                freelancing if the right project comes along. me.
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                  <input style={{backgroundColor:darkMode && "#333" ,color:darkMode && "#fff"}} type="text" placeholder='Name' name="user_name" />
                  <input style={{backgroundColor:darkMode &&  "#333",color:darkMode &&"#fff"}} type="text" placeholder='Subject' name="user_subject" />
                  <input style={{backgroundColor:darkMode && "#333",color:darkMode &&  "#fff"}} type="email" placeholder='Email' name="user_email" />
                  <textarea rows="5" placeholder='Message' name="message" style={{backgroundColor:darkMode && "#333",color:darkMode && "#fff"}}/>
                  <button type='submit'>Submit</button>
                  {done && "Thank You..."}
              </form>
          </div>
      </div>
  </div>;
};

export default Contact;
