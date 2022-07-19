import * as React from 'react'
import { Link } from 'gatsby'
import {
    navLinks,
    navLinkImage,
    navLinkItem,
    navLinkText,
    navLinkTextActive
  } from '../css/navbar.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import SelfPhoto from "../images/self-photo-circle.jpg"

const Navbar = () => {
  const sections = ["Experience","Projects", "Scribbles"]
  const sectionElements = sections.map((section)=>
    <li className={navLinkItem}>
    <Link 
      to={"/".concat(section.slice(section).toLowerCase())} 
      className={navLinkText}
      activeClassName={navLinkTextActive}
      partiallyActive={true}>
        {section}
    </Link>
    </li>
  )
  return (
    <nav>
      <Link to="/" className={navLinkImage}>
        <img 
          alt="Aaron Profile"
          src={SelfPhoto}
          style={{maxWidth: "100%"}}
        />
      </Link>
      <ul className={navLinks}>
          <li className={navLinkItem}>
          <Link 
              to="/" 
              className={navLinkText}
              activeClassName={navLinkTextActive}>
              About
          </Link>
          </li>
          {sectionElements}
      </ul>
    </nav>
  )
}

export default Navbar
