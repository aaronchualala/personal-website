// import * as React from 'react'
// import { Link, graphql } from 'gatsby'
// import Layout from '../../components/layout'
// import {scribblesContainer, scribblesHeader, scribblesByline, scribblesBreak} from '../../css/scribbles.module.css'

// const ScribblePage = ({ data }) => {
//   return (
//     <Layout pageTitle="Scribbles">
//       <main className={scribblesContainer}>
//         <h1 className={scribblesHeader}>Scribbles</h1>
//         <h3 className={scribblesByline}> An open notepad for some of my ideas and reflections.</h3>
//         <h3>This is my attempt at <a href="https://notes.andymatuschak.org/Work_with_the_garage_door_up?stackedNotes=zqG92bvaL58AWMeL97jXaRd1Dm6hsfGvhAn"> working with the garage door up</a>.</h3>
//         <hr className={scribblesBreak}></hr>
//         {
//           data.allMdx.nodes.map((node) => (
//             <div key={node.id}>
//               <h2>
//                 <Link to={`/scribbles/${node.slug}`}>
//                   {node.frontmatter.scribbleTitle}
//                 </Link>
//               </h2>
//               <p>{node.frontmatter.publishDate}</p>
//             </div>
//           ))
//         }  
//       </main>
//     </Layout>
//   )
// }

// export const query = graphql`
// query {
//   allMdx(
//     sort: {fields: frontmatter___publishDate, order: DESC}
//     filter: {fileAbsolutePath: {regex: "/scribble/"}}) {
//     nodes {
//       frontmatter {
//         publishDate(formatString: "MMMM D, YYYY")
//         scribbleTitle
//       }
//       id
//       slug
//     }
//   }
// }
// `

// export default ScribblePage