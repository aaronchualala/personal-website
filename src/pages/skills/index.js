import React from "react"
import kebabCase from "lodash/kebabCase"
import { Link, graphql } from "gatsby"
import Layout from '../../components/layout'
import {skillsContainer} from '../../css/skills.module.css'

const SkillsPage = ({data}) => {
  return (
    <Layout pageTitle="Scribbles">
      <h1>Skills</h1>
      <main className={skillsContainer}>
      {
        data.allMdx.group.map((skill) => (
          <div key={skill.fieldValue}>
            <h2>
              <Link to={`/skills/${kebabCase(skill.fieldValue)}/`}>
                {skill.fieldValue} ({skill.totalCount})
              </Link>
            </h2>
          </div>
        ))
      } 
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___skills) {
        fieldValue
        totalCount
      }
    }
  }
`

export default SkillsPage