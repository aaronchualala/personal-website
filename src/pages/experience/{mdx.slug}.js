import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import {expContainer, tab, activeTab, contentAllText, contentDescription, contentImage } from '../../css/experience.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ExperiencePage = ({ data }) => {
  return (
    <Layout pageTitle="Experience">
      <div className={expContainer}>
        <h1>Experience</h1>
        <div className={tab}>
        {
            data.allMdx.nodes.map((node) => (
                <Link to={`/experience/${node.slug}`} key={node.id}>
                  <button className={node.id === data.mdx.id && activeTab}>
                      {node.frontmatter.tabTitle}
                  </button>
                </Link>
              )
            )
        }
        </div>

        <GatsbyImage  
          className={contentImage}
          image={getImage(data.mdx.frontmatter.backgroundImage)}
          alt={data.mdx.frontmatter.backgroundImage_alt}
          imgStyle={{objectFit: `contain`}}
          style={{gridRow: 2, gridColumn: 2, position:"relative", top:'0px'}}/>
        <main className={contentAllText}>
            <h2>{data.mdx.frontmatter.myJob}<a href={data.mdx.frontmatter.orgLink}>{data.mdx.frontmatter.orgName?" @"+data.mdx.frontmatter.orgName:""}</a></h2>
            <h3>
              {data.mdx.frontmatter.startDate?data.mdx.frontmatter.startDate+" – ":""}
              {data.mdx.frontmatter.endDate?data.mdx.frontmatter.endDate:(data.mdx.frontmatter.startDate?"Present":"")}
            </h3>
            <div className={contentDescription}> 
                <MDXRenderer>
                  {data.mdx.body}
                </MDXRenderer>
            </div>
        </main>
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      tabTitle
      orgName
      orgLink
      myJob
      startDate(formatString: "MMM YYYY")
      endDate(formatString: "MMM YYYY")
      backgroundImage {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    id
    body
  }
  allMdx(
    sort: {fields: frontmatter___endDate, order: DESC}
    filter: {fileAbsolutePath: {regex: "/experience/"}}) {
    nodes {
      frontmatter {
        tabTitle
      }
      id
      slug
    }
  }
}
`

export default ExperiencePage