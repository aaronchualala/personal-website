import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      {
        data.allMdx.nodes.map((node) => (
          <div key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>{node.frontmatter.date}</p>
          </div>
        ))
      }  
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {fileAbsolutePath: {regex: "/blog/"}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      id
      slug
    }
  }
}
`

export default BlogPage