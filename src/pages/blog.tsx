import React, { ReactNode } from "react"
import PropTypes from "prop-types"
import {  useStaticQuery, graphql} from "gatsby"
import Layout from "../components/layout"
 
import SEO from "../components/seo"
interface Props {
  children: ReactNode
}
const BlogPage = ({ children } : Props ) => {
  const data = useStaticQuery(graphql`
    query {
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
      <SEO title="Home" />
      <h1>  {data.site.siteMetadata.blog_page_title} </h1>
      <h3>  {data.site.siteMetadata.blog_page_subtitle} </h3>
      <p>   {data.site.siteMetadata.blog_page_intro} </p>
    </Layout>
  ) 
}
export default BlogPage
