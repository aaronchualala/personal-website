import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

const ExperiencePage = ({ data }) => {
  return (
    <Layout pageTitle="Experience">
      {
        data.allMdx.nodes.map((node) => (
          <div key={node.id}>
            <h2>
                {node.frontmatter.organisation}
            </h2>
            <p>{node.frontmatter.duration}</p>
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
    filter: {fileAbsolutePath: {regex: "/experience/"}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        organisation
      }
      id
      slug
    }
  }
}
`

export default ExperiencePage