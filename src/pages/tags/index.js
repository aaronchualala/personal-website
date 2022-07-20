import React from "react"
import kebabCase from "lodash/kebabCase"
import { Link, graphql } from "gatsby"
import Layout from '../../components/layout'

const TagsPage = ({data}) => {
  return (
    <Layout pageTitle="Scribbles">
      {
        data.allMdx.group.map((tag) => (
          <div key={tag.fieldValue}>
            <h2>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </h2>
          </div>
        ))
      } 
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default TagsPage