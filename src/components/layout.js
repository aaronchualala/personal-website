import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {container} from '../css/layout.module.css'
import Navbar from './navbar'
import Footer from './footer'

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
  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>      
      <Navbar/>
      <main>
      {/* <h1>{pageTitle}</h1> */}
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
