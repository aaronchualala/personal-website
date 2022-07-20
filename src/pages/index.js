import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { aboutContainer, column, row, text, name, byline, iconBar, intro, image } from '../css/index.module.css'

const AboutPage = () => {
  return (
    <Layout>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div class={aboutContainer}>
        <div class={row}>
          <div class={column + " " + text}>
            <p class={name}>Aaron Chua</p>
            <p class={byline}>Business Analyst Intern @ Accenture</p>
            <div class={iconBar}>
              <a href="https://www.linkedin.com/in/aaron-chua1/"><i class="fa fa-linkedin" aria-label="linkedin"></i></a> 
              <a href="https://github.com/aaronchualala"><i class="fa fa-github" aria-label="github"></i></a> 
              <a href="https://aaronchua.tech"><i class="fa fa-globe" aria-label="website"></i></a>
            </div>
            <p class={intro}>I am a rising second-year student in the <a href="https://www.ntu.edu.sg/education/undergraduate-programme/renaissance-engineering-programme-(rep)">Renaissance Engineering Programme</a> at Nanyang Technological University. My goal is to understand, appreciate and improve complex systems so they can better serve the needs of their users and stewards. At present, I focus on using enterprise technologies to solve hard business problems.</p>
          </div>
          <div class={column + " " + image}>
            <StaticImage
              alt="Aaron Profile"
              src="../images/self-photo-circle.png"/>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default AboutPage