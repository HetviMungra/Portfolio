import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/ph3.jpg'


export default function About() {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"60%"}} /> </div>
                    <div className="about-skill"><p>React JS</p> <hr style={{width:"65%"}} /> </div>
                    <div className="about-skill"><p>JavaScript</p> <hr style={{width:"58%"}} /> </div>
                    <div className="about-skill"><p>Jquery</p> <hr style={{width:"70%"}} /> </div>
                    <div className="about-skill"><p>Bootstrap</p> <hr style={{width:"90%"}} /> </div>
                    <div className="about-skill"><p>C</p> <hr style={{width:"50%"}} /> </div>
                    <div className="about-skill"><p>C++ </p> <hr style={{width:"40%"}} /> </div>
                    <div className="about-skill"><p>DSA </p> <hr style={{width:"60%"}} /> </div>
                    



                </div>
            </div>
        </div>
        <div className='about-achievements'>
            <div className="about-achievement">
                <h1>7+</h1>
                <p>Practices Hours</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>30+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            
        </div>
    </div>
  )
}
