
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import kebabCase from "lodash/kebabCase"

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
      <h1>{data.mdx.frontmatter.projTitle}</h1>
      <p>Posted: {data.mdx.frontmatter.startDate}</p>
      <div>
        <span>Skills: </span>
        {skills}
      </div>
      <GatsbyImage
      image={image}
      alt={data.mdx.frontmatter.backgroundImage_alt}
      />
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
query($id: String) {
  mdx(id: {eq: $id}) {
    body
    frontmatter {
      projTitle
      startDate(formatString: "MMMM DD, YYYY")
      backgroundImage_alt
      backgroundImage 
      skills
    }
  }
}
`
export default ProjectPage

// {
//   childImageSharp {
//     gatsbyImageData(aspectRatio: 1.5)
//   }}