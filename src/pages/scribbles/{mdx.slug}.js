
import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const ScribblePage = ({data}) => {

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <h1>{data.mdx.frontmatter.scribbleTitle}</h1>
      <p>Posted: kajsflkas{data.mdx.frontmatter.publishDate}</p>
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
      scribbleTitle
      publishDate(formatString: "MMMM DD, YYYY")
    }
  }
}
`

export default ScribblePage