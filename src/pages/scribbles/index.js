import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const ScribblePage = ({ data }) => {
  return (
    <Layout pageTitle="Scribbles">
      {
        data.allMdx.nodes.map((node) => (
          <div key={node.id}>
            <h2>
              <Link to={`/scribbles/${node.slug}`}>
                {node.frontmatter.scribbleTitle}
              </Link>
            </h2>
            <p>{node.frontmatter.publishDate}</p>
          </div>
        ))
      }  
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(
    sort: {fields: frontmatter___publishDate, order: DESC}
    filter: {fileAbsolutePath: {regex: "/scribble/"}}) {
    nodes {
      frontmatter {
        publishDate(formatString: "MMMM D, YYYY")
        scribbleTitle
      }
      id
      slug
    }
  }
}
`

export default ScribblePage