import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import icon_linkedin from '../../assets/icon_linkedin.svg'

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8f85fc28-3627-4022-b310-538ead5db202");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src= {theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
               <img src={mail_icon} alt="" />
              <p>hetvipatel00100@gmail.com</p>            
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Movdi, Rajkot, India </p>           
             </div>
            {/* <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p> +91 9033197427</p>           
              </div> */}
              <div className="contact-detail">
              <img src={icon_linkedin} alt="" />
              <p><a style={{color:'white'}} href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">Hetvi Mungra
              </a></p>         
              </div>

          </div>
        </div>
        <form onSubmit={onSubmit} action="" className='contact-right'>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter Your Name' name='name' />

          <label htmlFor="">Youe Email</label>
          <input type="email"  placeholder='Enter Your Email' name='email' />

          <label htmlFor="">Write your message here</label>
          <textarea name="message" id="" rows={8} placeholder='Enter your message'></textarea>

          <button className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}



   
  
 
