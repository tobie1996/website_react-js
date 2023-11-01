import React from 'react'
import Header from '../../components/Header'
import './about.css'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
  return (
    <div>
       <Header title="About Us" image={HeaderImage}>
       This is the day that the lord has made. We will rejoice
       </Header>

       <section className='about_story'>
          <div className='container about__story-container'>
            <div className='about__section-image'>
              <img src={StoryImage} alt="Our Mission Images" />
            </div>

            <div className='about__section-content'>
                <h1>Our Mission</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sapien id tortor euismod porttitor. Etiam non rhoncus ante
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sapien id tortor euismod porttitor. Etiam non rhoncus ante
                </p>
                <p>
                  Lorem ipsum dolor Nullam commodo sapien id tortor euismod porttitor. Etiam non rhoncus ante
                </p>
            </div>
          </div>
       </section>

       <section className='about_vision'>
       <div className='container about__vision-container'>
         <div className='about__section-image'>
           <img src={VisionImage} alt="Our Vision Images" />
         </div>

         <div className='about__section-content'>
             <h1>Our Vision</h1>
             <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sapien id tortor euismod porttitor. Etiam non rhoncus ante
             </p>

             <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sapien id tortor euismod porttitor. Etiam non rhoncus ante
             </p>
         </div>
       </div>
    </section>


    <section className='about_mission'>
          <div className='container about__mission-container'>
            <div className='about__section-image'>
              <img src={MissionImage} alt="Our Mission Images" />
            </div>

            <div className='about__section-content'>
                <h1>Our Story</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sapien id tortor euismod porttitor. Etiam non rhoncus ante
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sapien id tortor euismod porttitor. Etiam non rhoncus ante
                </p>
                <p>
                  Lorem ipsum dolor Nullam commodo sapien id tortor euismod porttitor. Etiam non rhoncus ante
                </p>
            </div>
          </div>
       </section>
    </div>
  )
}

export default About
