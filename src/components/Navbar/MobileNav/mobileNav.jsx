import React from 'react'
import './mobileNav.css'
import { Link } from 'react-scroll';

function MobileNav({isOpen,toggleMenu}) {
  const handleDownload = () => {
    const url = './assets/pdf/Zekarias_Kobota_CV.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Zekarias_Kobota_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    return (
        <>
         <div className={`mobile-menu ${isOpen ? "active":""}`}
         onClick={toggleMenu}>
            <div className="mobile-menu-container">
                <img src="./assets/images/z.png" alt="" className="logo" />

                <ul>
                <li>
                    <Link className='menu-item'
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset as needed
            duration={500}
          >Home</Link>
                    </li>
                    <li>
                    <Link className='menu-item'
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset as needed
            duration={500}
          >Skills</Link>
                    </li>
                    <li>
                    <Link className='menu-item'
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset as needed
            duration={500}
          >Work Experience</Link>
                    </li>
                    <li>
                    <Link className='menu-item'
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset as needed
            duration={500}
          >Projects</Link>
                    </li>
                    <li>
                    <Link className='menu-item'
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset as needed
            duration={500}
          >Contact me</Link>
                    </li>

                    <button className="contact-btn" onClick={handleDownload}>Download CV</button>
                </ul>
            </div>
            </div>

            </>
    )
}

export default MobileNav
