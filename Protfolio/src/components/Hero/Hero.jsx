import React from 'react'
import './Hero.css'
import profile_img from '../../assets/ph2.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Hero() {
  
  
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I'm Hetvi Mungra,</span> Full Stack developer based in India.</h1>
        <p>Hi, I'm Hetvi Mungra. I'm a full-stack developer with 
            a passion for creating innovative and user-friendly
            web applications. I'm based in India and have a strong
            foundation in both front-end and back-end development.</p>
            <div className='hero-action'>
                <div className='hero-connect'> <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with Me </AnchorLink></div>
<a href="Hetvi mungra resume.pdf" style={{textDecoration:"none", color:"white"}}>    <div className="hero-resume"  >  My resume</div>
</a>                
            </div>
    </div>
  )
}
