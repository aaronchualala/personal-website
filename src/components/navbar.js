import * as React from 'react'
import { Link } from 'gatsby'
import {
    navContainer,
    navOpener,
    navSideBar,
    navSideBarItem,
    closeBtn,
    navLinks,
    navImage,
    navLinkItem,
    navLinkText,
    navLinkTextActive
  } from '../css/navbar.module.css'
import SelfPhoto from "../images/self-photo-circle.png"

const Navbar = () => {
  const [sideBar,setSideBar] = React.useState("none")
  const sections = ["","Experience","Projects", "Skills", "Scribbles"]

  const navLinkItems = (__LinkItem, __LinkText, __LinkTextActive) => sections.map((section)=>
    <li className={__LinkItem}>
      <Link 
        to={"/".concat(section.slice(section).toLowerCase())} 
        className={__LinkText}
        activeClassName={__LinkTextActive}
        partiallyActive={section?true:false}>
          {section?section:"About"}
      </Link>
    </li>
  )

  return (
    <nav className={navContainer}>

      <Link to="/">
        <img 
          alt="Aaron Profile"
          src={SelfPhoto}
          className={navImage}
        />
      </Link>

      <ul className={navLinks}>
          {navLinkItems(navLinkItem,navLinkText,navLinkTextActive)}
      </ul>
      
      <div className={navOpener} onClick={()=>setSideBar("block")} aria-hidden="true" >&#9776;</div>
      
      <div className={navSideBar} style={{display:sideBar}}>
        <button className={closeBtn} onClick={()=>setSideBar("none")} aria-hidden="true" >&times;</button>
        <ul style={{listStyle: "none"}}>
          {navLinkItems(navLinkItem,navLinkText,navLinkTextActive)}
        </ul>
      </div>


    </nav>
  )
}

export default Navbar
