import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import { expContainer,tab, tabcontent, activetab, tabtext, image,tabwrapper } from '../../css/experience.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ExperiencePage = ({ data }) => {
  const defaultExperience =  data.allMdx.nodes[Object.keys(data.allMdx.nodes)[0]]
  const [view, setView] = React.useState({
    orgName:defaultExperience.frontmatter.orgName, 
    orgLink:defaultExperience.frontmatter.orgLink,
    myJob:defaultExperience.frontmatter.myJob,
    startDate:defaultExperience.frontmatter.startDate,
    endDate:defaultExperience.frontmatter.endDate,
    myImpact:defaultExperience.body,
    backgroundImage: defaultExperience.frontmatter.backgroundImage,
    backgroundImage_alt: defaultExperience.frontmatter.backgroundImage_alt
    })
  const [activeE,setActiveE] = React.useState(defaultExperience.id)

  return (
    <Layout pageTitle="Experience">
        <h1>Experience</h1>
        <div className={tab}>
        {
            data.allMdx.nodes.map((node) => (
              <>
                <button 
                  className={node.id === activeE && activetab}
                  key={node.id} 
                  onClick={() => {console.log(defaultExperience);setActiveE(node.id);setView(
                  {
                    orgName: node.frontmatter.orgName,
                    orgLink: node.frontmatter.orgLink,
                    myJob: node.frontmatter.myJob,
                    startDate: node.frontmatter.startDate,
                    endDate: node.frontmatter.endDate,
                    myImpact: node.body,
                    backgroundImage:node.frontmatter.backgroundImage,
                    backgroundImage_alt:node.frontmatter.backgroundImage_alt
                  })}}>
                  {node.frontmatter.tabTitle}
                </button>
              </>
              )
            )
        }
        </div>
        

        <div className={tabwrapper}>
          <GatsbyImage  
            className={image}
            image={getImage(view.backgroundImage)}
            alt={view.backgroundImage_alt}
            imgStyle={{objectFit: `contain`}}/>
          <main className={tabcontent}>
              <h2>{view.myJob}<a href={view.orgLink}>{view.orgName?" @"+view.orgName:""}</a></h2>
              <h4>
                {view.startDate?view.startDate+" – ":""}
                {view.endDate?view.endDate:(view.startDate?"Present":"")}
              </h4>
              <div className={tabtext}> 
                  <MDXRenderer>
                    {view.myImpact}
                  </MDXRenderer>
              </div>
          </main>
        </div>
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(
    sort: {fields: frontmatter___endDate, order: DESC}
    filter: {fileAbsolutePath: {regex: "/experience/"}}) {
    nodes {
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
  }
}
`

export default ExperiencePage