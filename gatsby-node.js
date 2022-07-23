const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const skillTemplate = path.resolve("src/pages/skills/skill_template.js")
  const result = await graphql(`
    {
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
  const skills = result.data.skillsGroup.group
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