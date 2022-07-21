import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import { tab, tabcontent } from '../../css/experience.module.css'


const ExperiencePage = ({ data }) => {
  const [view, setView] = React.useState({orgName:"", orgLink:"",myJob:"",startDate:"",endDate:"",myImpact:""})

  return (
    <Layout pageTitle="Experience">
      <div className={tab}>
      {
          data.allMdx.nodes.map((node) => (
            <>
              <button key={node.id} onClick={() => setView(
                {
                  orgName: node.frontmatter.orgName,
                  orgLink: node.frontmatter.orgLink,
                  myJob: node.frontmatter.myJob,
                  startDate: node.frontmatter.startDate,
                  endDate: node.frontmatter.endDate,
                  myImpact: node.body
                }
              )}>
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
        {view.myImpact && 
          <MDXRenderer>
            {view.myImpact}
          </MDXRenderer>}
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