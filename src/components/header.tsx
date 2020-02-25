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
     // marginBottom: 64,
    }}
    >
      <div
      style={{
        margin: `0  `,
        maxHeight:64,
        maxWidth:960,
        padding:`16px 16px 0px 16px`,
      }}
      >
        <h1 style={{ margin: 0 , fontSize:32}}>
          <Link to="/" style={{color:`#000`,}}>
            {siteTitle}
          </Link>
        </h1>
        <div
        style={{
        margin: `0 auto`, 
        paddingTop: `1.45rem`,
        
        }}
        >
          <Link to="/" style={{ marginRight:`0.7rem`  }} >
          Home
          </Link>
          <Link to="/about/" style={{   marginRight:`0.7rem`   }} >
          about
          </Link>
          <Link to="/blog/" style={{   marginRight:`0.7rem`   }} >
          blog
          </Link>
          <Link to="/contact/" style={{ marginRight:`0.7rem`   }}>
          Contact
          </Link>          
        </div> 
      </div>
    </header>
    )
  }
}
