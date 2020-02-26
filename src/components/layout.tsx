/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../styles/layout.scss" 

interface Props {
  children: ReactNode
}
const Layout = ({ children } : Props ) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin:0,
          padding: `16px  `,
          minHeight: `100vh`,
          backgroundColor:`lightblue`,
          zIndex:10,
        }}
      >
        <main style={{
          maxWidth: 1280,
          margin:`128px auto 16px auto`,
          }}>
          {children}
        </main>
      </div>
      <Footer/>
    </>
  )
}
export default Layout
