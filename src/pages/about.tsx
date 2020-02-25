import React, { ReactNode } from "react"
import PropTypes from "prop-types"
import {  useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
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
    }
  `)
  return (
    <Layout>
      <SEO title="About" />
      <h1>  {data.site.siteMetadata.about_page_title} </h1>
      <h3>  {data.site.siteMetadata.about_page_subtitle} </h3>
      <p>   {data.site.siteMetadata.about_page_intro} </p>
    </Layout>
  )
}

export default AboutPage
