import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"


const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sapien id tortor euismod porttitor. Etiam non rhoncus ante
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com" target="_blank" rel='noreferrer noopener'>
                        <FaLinkedin/>
                    </a>

                    <a href="https://facebook.com" target="_blank" rel='noreferrer noopener'>
                        <FaFacebook/>
                    </a>

                    <a href="https://twitter.com" target="_blank" rel='noreferrer noopener'>
                        <AiOutlineTwitter/>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel='noreferrer noopener'>
                        <AiFillInstagram/>
                    </a>
                </div>
            </article>

            <article>
                <h4>Permalink</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>

            <article>
                <h4>Permalink</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>

            <article>
                <h4>Permalink</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2023 EGATOR TUTORIALS &copy; All Right Reserved</small>
        </div>
    </footer>
  )
}

export default Footer