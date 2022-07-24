import React from "react"
import kebabCase from "lodash/kebabCase"
import startCase from 'lodash/startCase'
import { Link, graphql } from "gatsby"
import Layout from '../../components/layout'
import {sectionContainer, sectionHeader, skillBox, skillName} from '../../css/skills.module.css'

const SkillsPage = ({data}) => {
  return (
    <Layout pageTitle="Skills">
      <div className={sectionContainer}>
        <h1 className={sectionHeader}>Skills</h1>
        {
          data.allMdx.group.map((skill) => (
          <Link className={skillName} to={`/skills/${kebabCase(skill.fieldValue)}/`}>
            <div className={skillBox} key={skill.fieldValue}>
                {startCase(skill.fieldValue.toLowerCase())} ({skill.totalCount})
            </div>
          </Link>
          ))
        } 
      </div>
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