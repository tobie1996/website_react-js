
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import Trainer from '../../components/Trainer'
import './trainers.css'

const Trainers = () => {
  return (
    <div>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sapien id tortor euismod porttitor. Etiam non rhoncus ante
      </Header>

      <section className='trainers'>
        <div className='container trainers__container'>
          {
            trainers.map(({id, image, name, job, socials}) => {
              return<Trainer key={id} image={image} name={name} job={job} socials={
                [ 
                  {icon: <AiFillInstagram/>, link: socials[0]},
                  {icon: <AiOutlineTwitter/>, link: socials[1]},
                  {icon: <FaFacebook/>, link: socials[2]},
                  {icon: <FaLinkedin/>, link: socials[3]},
                ]
              }>
               
              </Trainer>
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Trainers