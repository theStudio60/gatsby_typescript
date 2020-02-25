import React, { ReactNode } from "react"
import PropTypes from "prop-types"
import {  useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

interface Props {
  children: ReactNode
}

const ContactPage = ({ children } : Props ) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          contact_page_title
          contact_page_subtitle
          contact_page_intro
        }
      }
    }
  `)


  return (
    <Layout>
      <SEO title="Contact" />
      <h1>  {data.site.siteMetadata.contact_page_title} </h1>
      <h3>  {data.site.siteMetadata.contact_page_subtitle} </h3>
      <p>   {data.site.siteMetadata.contact_page_intro} </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ContactPage
