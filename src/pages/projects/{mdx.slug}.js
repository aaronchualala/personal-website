
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import kebabCase from "lodash/kebabCase"
import startCase from "lodash/startCase"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {projectContainer, projectInfo, mdxContent} from '../../css/projects.module.css'

const ProjectPage = ({data}) => {
  const checkExp = (node) => {return data.mdx.frontmatter.experience?data.mdx.frontmatter.experience[0].toLowerCase() === node.slug.toLowerCase():""}
  const image = getImage(data.mdx.frontmatter.backgroundImage)
  const skills = data.mdx.frontmatter.skills?data.mdx.frontmatter.skills.map((skill, index, array)=>
    <>
      <Link to={"/skills/"+kebabCase(skill)}>
          {startCase(skill.toLowerCase())}
      </Link>
      {index+1!==array.length?(<br></br>):""}
    </>
  ):""

  return (
    <Layout pageTitle={data.mdx.frontmatter.projTitle}>
      <div className={projectContainer}>
          <h1>{data.mdx.frontmatter.projTitle}</h1>
          <div>______________</div>
          <div></div>
          <div className={projectInfo}>Experience:</div>
          <div className={projectInfo}>{data.allMdx.nodes.filter(checkExp).map((node)=>(
            <Link to={`/experience/${node.slug}`}>{node.frontmatter.tabTitle}</Link>))}
          </div>
          <br></br>
          <div className={projectInfo}>Skills: </div>
          <div className={projectInfo} style={{textAlign: "center", maxWidth:"80vw"}} >{skills}</div>
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
        <div className={mdxContent}>
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </div>
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
      experience
      skills
      backgroundImage_alt
      backgroundImage {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
  allMdx(
    sort: {fields: frontmatter___endDate, order: DESC}
    filter: {fileAbsolutePath: {regex: "/experience/"}}) {
    nodes {
      frontmatter{
        tabTitle
      }
      id
      slug
    }
  }
}
`
export default ProjectPage

// {
//   childImageSharp {
//     gatsbyImageData(aspectRatio: 1.5)
//   }}