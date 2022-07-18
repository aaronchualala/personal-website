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
                {node.frontmatter.name}
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
    filter: {fileAbsolutePath: {regex: "/projects/"}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        name
      }
      id
      slug
    }
  }
}
`

export default ProjectPage