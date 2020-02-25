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
      //marginTop: `1.45rem`,
      marginBottom: `0rem`,
      padding: `1.45rem`,
      color: `black`,
      }}
      >
        <strong style={{
          paddingBottom:16,
        }}>
          {data.site.siteMetadata.title} - © {new Date().getFullYear()} - <a href="https://studio60.ch"> {data.site.siteMetadata.author} </a>
        </strong>
        <br/>
        {` `}

        <a
         href="https://www.gatsbyjs.org"
         style={{  marginRight:`0.7rem`  }}
        >
         Gatsby JS
        </a>
        <a
         href="https://www.typescriptlang.org/"
         style={{  marginRight:`0.7rem`  }}
        >
         Typescript Language
        </a>
        <a
         href="https://www.reactjs.org/"
         style={{  marginRight:`0.7rem`  }}
        >
         React JS
        </a>  
        <br/>      
        <a
         href="https://github.com/theStudio60/gatsby_typescript"
         style={{  marginRight:`0.7rem`  }}
        >
         See this project repository on github !
        </a>   
        
        </div>
    </footer>
    </>
  )
}


export default Footer
