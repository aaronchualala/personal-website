const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  // const projectTemplate = path.resolve("src/pages/projects/project_template.js")
  const skillTemplate = path.resolve("src/pages/skills/skill_template.js")
  const result = await graphql(`
    {
      postsRemark: allMdx(
        sort: { order: DESC, fields: [frontmatter___startDate] }
        limit: 2000
      ) {
        edges {
          node {
            slug
            frontmatter {
              skills
            }
          }
        }
      }
      skillsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___skills) {
          fieldValue
        }
      }
    }
  `)
  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const posts = result.data.postsRemark.edges
  // Create post detail pages
  // posts.forEach(({ node }) => {
  //   createPage({
  //     path: node.slug,
  //     component: projectTemplate,
  //   })
  // })
  // Extract skill data from query
  const skills = result.data.skillsGroup.group
  // Make skill pages
  skills.forEach(skill => {
    createPage({
      path: `/skills/${_.kebabCase(skill.fieldValue)}/`,
      component: skillTemplate,
      context: {
        skill: skill.fieldValue,
      },
    })
  })
}