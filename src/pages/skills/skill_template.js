import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../../components/layout'
import startCase from 'lodash/startCase'
import {skillContainer, skillByline, seeOther} from '../../css/skills.module.css'


const Skills = ({ pageContext, data }) => {
  const { skill } = pageContext
  const { edges, totalCount } = data.allMdx
  const skillHeader = `${skill}` 

  return (
    <Layout pageTitle="Skills">
      <div className={skillContainer}>
        <h1>{startCase(skillHeader.toLowerCase())} </h1>
        <div>______________</div>
        <div></div>
        <div className={skillByline}>{totalCount} project{totalCount===1 ? "" : "s"}:
        {edges.map(({ node }) => {
          const slug = node.slug
          const { projTitle } = node.frontmatter
          return (
            <p key={slug} style={{marginTop:"4vh", marginBottom:"0px"}}>
              <Link to={`/projects/${slug}`}>{projTitle} </Link>
            </p>
            )
          })}
          </div>
          <div>______________</div>
          <br></br>
          <br></br>
      <Link className={seeOther} to="/skills">check out my other skills! ➜</Link>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($skill: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___startDate], order: DESC }
      filter: { frontmatter: { skills: { in: [$skill] } } }
    ) {
      totalCount
      edges {
        node {
          slug
          frontmatter {
            projTitle
          }
        }
      }
    }
  }
`

export default Skills