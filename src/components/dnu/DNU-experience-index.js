// import * as React from 'react'
// import { graphql, Link } from 'gatsby'
// import { MDXRenderer } from 'gatsby-plugin-mdx'
// import Layout from './layout'
// import {expContainer, tab, activeTab, contentAllText, contentDescription, contentImage } from '../../css/experience.module.css'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// const ExperiencePage = ({ data }) => {
//   const defaultExperience =  data.allMdx.nodes[Object.keys(data.allMdx.nodes)[0]]
//   const [view, setView] = React.useState({
//     orgName:defaultExperience.frontmatter.orgName, 
//     orgLink:defaultExperience.frontmatter.orgLink,
//     myJob:defaultExperience.frontmatter.myJob,
//     startDate:defaultExperience.frontmatter.startDate,
//     endDate:defaultExperience.frontmatter.endDate,
//     myImpact:defaultExperience.body,
//     backgroundImage: defaultExperience.frontmatter.backgroundImage,
//     backgroundImage_alt: defaultExperience.frontmatter.backgroundImage_alt
//     })
//   const [activeE,setActiveE] = React.useState(defaultExperience.id)

//   return (
//     <Layout pageTitle="Experience">
//       <div className={expContainer}>
//         <h1>Experience</h1>
//         <div className={tab}>
//         {
//             data.allMdx.nodes.map((node) => (
//               <>
//                 <Link to={`/experience/${node.slug}`} key={node.id}>
//                   {node.frontmatter.tabTitle}
//                 </Link>
//                 {/* <button 
//                   className={node.id === activeE && activeTab}
//                   key={node.id} 
//                   onClick={() => {console.log(defaultExperience);setActiveE(node.id);setView(
//                   {
//                     orgName: node.frontmatter.orgName,
//                     orgLink: node.frontmatter.orgLink,
//                     myJob: node.frontmatter.myJob,
//                     startDate: node.frontmatter.startDate,
//                     endDate: node.frontmatter.endDate,
//                     myImpact: node.body,
//                     backgroundImage:node.frontmatter.backgroundImage,
//                     backgroundImage_alt:node.frontmatter.backgroundImage_alt
//                   })}}>
//                   {node.frontmatter.tabTitle}
//                 </button> */}
//               </>
//               )
//             )
//         }
//         </div>

//         <GatsbyImage  
//           className={contentImage}
//           image={getImage(view.backgroundImage)}
//           alt={view.backgroundImage_alt}
//           imgStyle={{objectFit: `contain`}}
//           style={{gridRow: 2, gridColumn: 2, position:"relative", top:'0px'}}/>
//         <main className={contentAllText}>
//             <h2>{view.myJob}<a href={view.orgLink}>{view.orgName?" @"+view.orgName:""}</a></h2>
//             <h3>
//               {view.startDate?view.startDate+" – ":""}
//               {view.endDate?view.endDate:(view.startDate?"Present":"")}
//             </h3>
//             <div className={contentDescription}> 
//                 <MDXRenderer>
//                   {view.myImpact}
//                 </MDXRenderer>
//             </div>
//         </main>
//       </div>
//     </Layout>
//   )
// }

// export const query = graphql`
// query {
//   allMdx(
//     sort: {fields: frontmatter___endDate, order: DESC}
//     filter: {fileAbsolutePath: {regex: "/experience/"}}) {
//     nodes {
//       frontmatter {
//         tabTitle
//         orgName
//         orgLink
//         myJob
//         startDate(formatString: "MMM YYYY")
//         endDate(formatString: "MMM YYYY")
//         backgroundImage {
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//       id
//       body
//     }
//   }
// }
// `

// export default ExperiencePage