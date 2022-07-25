import * as React from 'react'
import { Link } from 'gatsby'
import {
    navContainer,
    navOpener,
    navSideBar,
    closeBtn,
    navLinks,
    navImage,
    navLinkItem,
    navLinkText,
    navLinkTextActive
  } from '../css/components/navbar.module.css'
import SelfPhoto from "../images/favicon.ico"

const Navbar = ({data}) => {
  const [sideBar,setSideBar] = React.useState("none")
  const sections = ["","Experience","Projects", "Skills"]

  const navLinkItems = (__LinkItem, __LinkText, __LinkTextActive) => sections.map((section)=>
    <li className={__LinkItem}>
      <Link 
        to={"/".concat(section.slice(section).toLowerCase())} //.concat(section==="Experience"?"/ntu":"")} 
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

// GRAPHQL DOESN'T WORK IN COMPONENTS APPARENTLY. SO I WILL JUST HARDCODE THE NAVBAR LINK FOR EXPERIENCE
// export const query = graphql`
// query {
//   allMdx(
//     sort: {fields: frontmatter___endDate, order: DESC}
//     filter: {fileAbsolutePath: {regex: "/experience/"}}) {
//     nodes {
//       slug
//     }
//   }
// }
// `

export default Navbar
