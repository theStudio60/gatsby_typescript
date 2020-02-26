import React, { ReactNode } from "react"
import PropTypes from "prop-types"
import {  useStaticQuery, graphql} from "gatsby"
import Layout from "../components/layout"
import Template from "../templates/blogTemplate"
import SEO from "../components/seo"
interface Props {
  children: ReactNode
}
const BlogPage = ({ children } : Props ) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
        }
      }
      }
      site {
        siteMetadata {
          blog_page_title
          blog_page_subtitle
          blog_page_intro
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="{data.site.siteMetadata.blog_page_title}" />
      <h1>  {data.site.siteMetadata.blog_page_title} </h1>
      <h3>  {data.site.siteMetadata.blog_page_subtitle} </h3>
      <p>   {data.site.siteMetadata.blog_page_intro} </p>
      <div style={{ maxWidth: `960px` }}>
        {data.allMarkdownRemark.edges.map(({ node }, i) => (
          <a style={{display:`flex`}} key={i}>
            <p><strong>{node.frontmatter.title}</strong></p>
            <p style={{paddingLeft:16,}}>{node.frontmatter.date}</p>
          </a>
        ))}
      </div>   
    </Layout>
  ) 
}
export default BlogPage
 