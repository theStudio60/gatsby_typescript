import React from "react"
import { useStaticQuery, graphql, a } from "gatsby"
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
      <div style={{
      background: `white`,
      padding: 16,
      color: `black`,
      }}
      >
        <strong style={{ paddingBottom:16, }}>
          {data.site.siteMetadata.title} - © {new Date().getFullYear()} - <a href="https://studio60.ch"> {data.site.siteMetadata.author} </a>
        </strong>
        {` `}
        <a
         href="https://www.gatsbyjs.org"
         style={{  margin:`0.7rem`  }}
        >
         Gatsby JS
        </a>
        <a
         href="https://www.typescriptlang.org/"
         style={{  margin:`0.7rem`  }}
        >
         Typescript Language
        </a>
        <a
         href="https://www.reactjs.org/"
         style={{  margin:`0.7rem`  }}
        >
         React JS
        </a>  
        <a
         href="https://github.com/theStudio60/gatsby_typescript"
         style={{  margin:`0.7rem`,  }}
        >
         See this project repository on github !
        </a>   
      </div>
    </footer>
    </>
  )
}
export default Footer