import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../../components/layout'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${tag}` //project${totalCount === 1 ? ":" : "s:"}`

  return (
    <Layout pageTitle="Tags">
      <h1>{tagHeader}</h1>
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
      <Link to="/tags">All tags</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___startDate], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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

export default Tags