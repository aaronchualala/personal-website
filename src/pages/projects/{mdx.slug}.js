
import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const ProjectPage = ({data}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.name}>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage
      image={image}
      alt={data.mdx.frontmatter.hero_image_alt}
      />
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
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
      name
      date(formatString: "MMMM DD, YYYY")
      hero_image_alt
      hero_image_credit_link
      hero_image_credit_text
      hero_image {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.5)
        }
      }
    }
  }
}
`

export default ProjectPage