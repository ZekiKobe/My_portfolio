import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/mobileNav';
import { Link } from 'react-scroll';
function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () =>{
        setOpenMenu(!openMenu);
    };
    const url ='./assets/PDF/Zekarias Kobota CV.pdf'
    const handleDownload = () => {
      window.open(url, '_blank');
    };

    return (
        <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
        <nav className="nav-wrapper">
            <div className="nav-content">
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
                    <button className='contact-btn' onClick={handleDownload}>Download CV</button>
                </ul>
                <button class="menu-btn" onClick={toggleMenu}>
                      <img src="/assets/images/menu.png" width={'30px'} height={'35x'} alt="" />
                </button>
            </div>
        </nav>
        </>
    )
}

export default Navbar
