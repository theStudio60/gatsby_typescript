import React, { ReactNode } from "react"
import PropTypes from "prop-types"
import {  useStaticQuery, graphql} from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
interface Props {
  children: ReactNode
}
const IndexPage = ({ children } : Props ) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          homepage_title
          homepage_subtitle
          homepage_intro
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>  {data.site.siteMetadata.homepage_title} </h1>
      <h3>  {data.site.siteMetadata.homepage_subtitle} </h3>
      <p>   {data.site.siteMetadata.homepage_intro} </p>
      <br/>
      <div style={{ maxWidth: `960px`, position:`relative`,}}>
        <Image />
      </div>
    </Layout>
  ) 
}
export default IndexPage
