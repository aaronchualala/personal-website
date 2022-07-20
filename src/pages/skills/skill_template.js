import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../../components/layout'

const Skills = ({ pageContext, data }) => {
  const { skill } = pageContext
  const { edges, totalCount } = data.allMdx
  const skillHeader = `${skill}` //project${totalCount === 1 ? ":" : "s:"}`

  return (
    <Layout pageTitle="Skills">
      <h1>{skillHeader} ({totalCount})</h1>
        {edges.map(({ node }) => {
          const slug = node.slug
          const { projTitle } = node.frontmatter
          return (
            <p key={slug}>
              <Link to={`/projects/${slug}`}>{projTitle} </Link>
            </p>
          )
        })}
        <br></br>
        <br></br>
      <Link to="/skills">All skills</Link>
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