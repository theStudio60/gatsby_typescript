import React from "react"
import { useStaticQuery, graphql } from "gatsby"

     



interface Props {
  children: ReactNode
}

const Footer = ({ children } : Props ) => {
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
      <footer>
        <div
        style={{
          margin: `0 auto`,
          maxWidth: 1280,
          padding: `1.45rem`,
          backgroundColor:`#eeeeee`,
        }}
        >
          © {new Date().getFullYear()} - Created by <a href="https://studio60.ch"> {data.site.siteMetadata.author} </a>
          {` `}
          <br/>
          <a href="https://www.gatsbyjs.org">Gatsby JS</a>
          |
          <a href="https://www.typescriptlang.org/">Typescript Language</a>
          |
          <a href="https://www.reactjs.org/">React JS</a>
        </div>
      </footer>
    </>
  )
}


export default Footer
