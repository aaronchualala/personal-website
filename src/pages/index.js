import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      
      <StaticImage
        alt="Aaron Profile"
        src="../images/self-photo-circle.jpg"
      />
    </Layout>
  )
}
export default AboutPage