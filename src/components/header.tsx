import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

interface Props {
  siteTitle : string
}
export default class Header extends React.Component<Props> {
  render() {
    const {siteTitle} = this.props
    return(
    <header
    style={{
      background: `white`, 
        position:`fixed`,
        width:`100vw`,
        zIndex:100,
    }}
    >
      <div style=
      {{
        margin: 0,
        maxHeight:64,
        maxWidth:960,
        padding:16,
        display:`flex`,
      }}
      >
        <h1 style={{ margin: 0 , fontSize:32}}>
          <Link to="/" style={{color:`#000`,}}>
            {siteTitle}
          </Link>
        </h1>
        <div
        style={{
         marginTop:8,
         marginLeft:`0.7rem`,
        }}
        >
          <Link
          to="/" 
          style={{
             marginRight:`0.7rem`,
             fontSize:16, 
           }}
          >
          Home
          </Link>
          <Link
          to="/about/" 
          style={{ 
              marginRight:`0.7rem`,
              fontSize:16,  
           }} 
          >
          about
          </Link>
          <Link
          to="/blog/" 
          style={{ 
              marginRight:`0.7rem`,
              fontSize:16,  
           }} 
          >
          blog
          </Link>
          <Link
          to="/contact/" 
          style={{
             marginRight:`0.7rem`,
             fontSize:16, 
            }}
          >
          Contact
          </Link>          
        </div> 
      </div>
    </header>
    )
  }
}
