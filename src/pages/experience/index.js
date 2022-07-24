import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import {expContainer, tab, activeTab, contentAllText, contentDescription, contentImage } from '../../css/experience.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ExperiencePage = ({ data }) => {
  const defaultExperience = data.allMdx.nodes[0]
  const checkExp = (node) => {return !node.fileAbsolutePath.includes('project-')}
  const checkProj = (node) => {return defaultExperience.frontmatter.projects.includes(node.slug)}
  
  return (
    <Layout pageTitle="Experience">
      <div className={expContainer}>
        <h1>Experience</h1>
        <div className={tab}>
        {
            data.allMdx.nodes.filter(checkExp).map((node) => (
                <Link to={`/experience/${node.slug}`} key={node.id}>
                  <button className={node.id === defaultExperience.id && activeTab}>
                      {node.frontmatter.tabTitle}
                  </button>
                </Link>
              )
            )
        }
        </div>

        <GatsbyImage  
          className={contentImage}
          image={getImage(defaultExperience.frontmatter.backgroundImage)}
          alt={defaultExperience.frontmatter.backgroundImage_alt}
          imgStyle={{objectFit: `contain`}}
          style={{gridRow: 2, gridColumn: 2, position:"relative", top:'0px'}}/>
        <main className={contentAllText}>
            <h2>{defaultExperience.frontmatter.myJob}<a href={defaultExperience.frontmatter.orgLink}>{defaultExperience.frontmatter.orgName?" @"+defaultExperience.frontmatter.orgName:""}</a></h2>
            <h3>
              {defaultExperience.frontmatter.startDate?defaultExperience.frontmatter.startDate+" – ":""}
              {defaultExperience.frontmatter.endDate?defaultExperience.frontmatter.endDate:(defaultExperience.frontmatter.startDate?"Present":"")}
            </h3>
            <div className={contentDescription}> 
                <MDXRenderer>
                  {defaultExperience.body}
                </MDXRenderer>
            </div>

            <div>
              <h4>
              {data.allMdx.nodes.filter(checkProj).length > 1?"Related Projects ":(data.allMdx.nodes.filter(checkProj).length===1?"Related Project ":"")}
              </h4>
              {data.allMdx.nodes.filter(checkProj).map((node, index, array) => (
                <>
                  <Link to={`/projects/${node.slug}`} style={{fontSize:"3vh"}}>
                    {node.frontmatter.projTitle}
                  </Link>
                  <span>{index+1!==array.length?" / ":""}</span>
                </>
              ))}
            </div>

        </main>
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(
    sort: {fields: frontmatter___endDate, order: DESC}) {
    nodes {
      frontmatter {
        tabTitle
        projTitle
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
        projects
      }
      id
      body
      slug
      fileAbsolutePath
    }
  }
}
`

export default ExperiencePage