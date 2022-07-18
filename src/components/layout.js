import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    container,
    navLinks,
    navLinkItem,
    navLinkText
  } from '../css/layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const sections = ["🧑🏻‍💼 Experience","🛠 Projects", "✍🏼 Scribbles"]
  const sectionElements = sections.map((section)=>
    <li className={navLinkItem}>
    <Link to={"/".concat(section.slice(section.indexOf(" ")+1).toLowerCase())} className={navLinkText}>
      {section}
    </Link>
    </li>
  )
  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
                👋 About
            </Link>
          </li>
          {sectionElements}
        </ul>
      </nav>
      <main>
      <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
