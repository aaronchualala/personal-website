import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const ProjectPage = ({ data }) => {
  return (
    <Layout pageTitle="Projects">
      {
        data.allMdx.nodes.map((node) => (
          <div key={node.id}>
            <h2>
              <Link to={`/projects/${node.slug}`}>
                {node.frontmatter.projTitle}
              </Link>
            </h2>
            <p>{node.frontmatter.endDate}</p>
          </div>
        ))
      }  
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(
    sort: {fields: frontmatter___endDate, order: DESC}
    filter: {fileAbsolutePath: {regex: "/projects/"}}) {
    nodes {
      frontmatter {
        endDate(formatString: "MMMM D, YYYY")
        projTitle
      }
      id
      slug
    }
  }
}
`

export default ProjectPage