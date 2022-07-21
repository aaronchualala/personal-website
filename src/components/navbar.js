import * as React from 'react'
import { Link } from 'gatsby'
import {
    navOpener,
    navSideBar,
    navSideBarItem,
    closeBtn,
    navContainer,
    navLinks,
    navLinkImage,
    navLinkItem,
    navLinkText,
    navLinkTextActive
  } from '../css/navbar.module.css'
import SelfPhoto from "../images/self-photo-circle.png"

const Navbar = () => {
  const [sideBar,setSideBar] = React.useState("none")
  const sections = ["Experience","Projects", "Skills", "Scribbles"]
  const sectionElements = (classItem, classLinkText, classLinkTextActive) => sections.map((section)=>
    <li className={classItem}>
      <Link 
        to={"/".concat(section.slice(section).toLowerCase())} 
        className={classLinkText}
        activeClassName={classLinkTextActive}
        partiallyActive={true}>
          {section}
      </Link>
    </li>
  )
  return (
    <>

    <span className={navOpener} onClick={()=>setSideBar("block")}>&#9776;</span>
    <div className={navSideBar} style={{display:sideBar}}>
      <a className={closeBtn} onClick={()=>setSideBar("none")}>&times;</a>
      <ul style={{listStyle: "none"}}>
        <li>
            <Link to="/" className={navSideBarItem} partiallyActive={true}>
                About
            </Link>
        </li>
        {sectionElements("",navSideBarItem,"")}
      </ul>
    </div>

    <nav className={navContainer}>
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
          {sectionElements(navLinkItem,navLinkText,navLinkTextActive)}
      </ul>
    </nav>
    </>
  )
}

export default Navbar
