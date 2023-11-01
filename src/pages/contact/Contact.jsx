import React from 'react'
import './contact.css'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import Header from '../../components/Header'


const Contact = () => {
  return (
    <div>
        <Header title="Get In Touch" image={HeaderImage}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sapien id tortor euismod porttitor. Etiam non rhoncus ante
        </Header>
        <section className='contact'>
          <div className='container contact__container'>
            <div className='contact__wrapper'>
              <a href="mailto:tobiemba@gmail.com" target="_blank" rel='noreferrer noopener' ><MdEmail/></a>
              <a href="http://m.me" target="_blank" rel='noreferrer noopener' ><BsMessenger/></a>
              <a href="https://wa.me/+237691690285" target="_blank" rel='noreferrer noopener' ><IoLogoWhatsapp/></a>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Contact
