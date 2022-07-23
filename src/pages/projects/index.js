import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {projectsContainer, projectWrapper, contentImage, projectTitle, projectDate} from '../../css/projects.module.css'

const ProjectPage = ({ data }) => {
  return (
    <Layout pageTitle="Projects">
      <div className={projectsContainer}>
      <h1>Projects</h1>
      {
        data.allMdx.nodes.map((node) => (
          <Link to={`/projects/${node.slug}`} key={node.id} className={projectWrapper}>
              <GatsbyImage  
              className={contentImage}
              image={getImage(node.frontmatter.backgroundImage)}
              alt={node.frontmatter.backgroundImage_alt}
              imgStyle={{objectFit: `cover`}}
              style={{position:"absolute", width:"100%"}}/>
              <div></div>
              <p className={projectTitle}>
                  {node.frontmatter.projTitle}
              </p>
              <p className={projectDate}>{node.frontmatter.endDate}</p>
              <div></div>
          </Link>
        ))
      }  
      </div>
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
        backgroundImage_alt
        backgroundImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
      slug
    }
  }
}
`

export default ProjectPage