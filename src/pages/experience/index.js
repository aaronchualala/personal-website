import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import { tab, tabcontent, activetab, tabtext } from '../../css/experience.module.css'


const ExperiencePage = ({ data }) => {
  const defaultExperience =  data.allMdx.nodes[Object.keys(data.allMdx.nodes)[0]]
  const [view, setView] = React.useState({
    orgName:defaultExperience.frontmatter.orgName, 
    orgLink:defaultExperience.frontmatter.orgLink,
    myJob:defaultExperience.frontmatter.myJob,
    startDate:defaultExperience.frontmatter.startDate,
    endDate:defaultExperience.frontmatter.endDate,
    myImpact:defaultExperience.body})
  const [activeE,setActiveE] = React.useState(defaultExperience.id)

  return (
    <Layout pageTitle="Experience">
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
                  myImpact: node.body
                }
              )}}>
                {node.frontmatter.tabTitle}
              </button>
            </>
            )
          )
      }
      </div>
      

      <div className={tabcontent}>
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
      }
      id
      slug
      body
    }
  }
}
`

export default ExperiencePage