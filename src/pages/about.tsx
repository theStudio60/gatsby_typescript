import React, { ReactNode } from "react"
import PropTypes from "prop-types"
import {  useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
interface Props {
  children: ReactNode
}
const AboutPage = ({ children } : Props ) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          about_page_title
          about_page_subtitle
          about_page_intro 
        }
      }
      placeholderImage: file(relativePath: { eq: "image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return (
    <Layout>
      <SEO title="about" />
      <h1>  {data.site.siteMetadata.about_page_title} </h1>
      <h3>  {data.site.siteMetadata.about_page_subtitle} </h3>
      <p>   {data.site.siteMetadata.about_page_intro} </p>
     <div style={{ maxWidth: `960px`, position:`relative`,}}>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    </Layout>
  )

}
export default AboutPage



 
