
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import kebabCase from "lodash/kebabCase"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {projectContainer} from '../../css/projects.module.css'

const ProjectPage = ({data}) => {
  const image = getImage(data.mdx.frontmatter.backgroundImage)
  const skills = data.mdx.frontmatter.skills?data.mdx.frontmatter.skills.map((skill)=>
    <span>
      <Link to={"/skills/"+kebabCase(skill)}>
          #{kebabCase(skill)} {" "} 
      </Link>
    </span>
  ):""

  return (
    <Layout pageTitle={data.mdx.frontmatter.projTitle}>
      <div className={projectContainer}>
          <h1>{data.mdx.frontmatter.projTitle}</h1>
          <div>______________</div>
          <div></div>
          <div>Timeline:</div>
          <div>{data.mdx.frontmatter.startDate} — {data.mdx.frontmatter.endDate}</div>
          <br></br>
          <div>Skills: </div>
          <div style={{textAlign: "center"}}>{skills}</div>
        <div>______________</div>
        <br></br>
        <div>
          <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.backgroundImage_alt}
          imgStyle={{objectFit: `contain`}}
          style={{width:"100%", orderRadius:"3%"}}
          />
        </div>
        <p>
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
query($id: String) {
  mdx(id: {eq: $id}) {
    body
    frontmatter {
      projTitle
      startDate(formatString: "MMMM YYYY")
      endDate(formatString: "MMMM YYYY")
      skills
      backgroundImage_alt
      backgroundImage {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`
export default ProjectPage

// {
//   childImageSharp {
//     gatsbyImageData(aspectRatio: 1.5)
//   }}