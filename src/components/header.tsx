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
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
    >
      <div
      style={{
        margin: `0 auto`,
        maxWidth: 1280,
        padding: `1.45rem`,
      }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
          >
          {siteTitle}
          </Link>
        </h1>
        <div
        style={{
        margin: `0 auto`,
        maxWidth: 1280,
        paddingTop: `1.45rem`,
        }}
        >
        <Link
         to="/"
         style={{ 
          color:`white`,
          textDecoration: `none`,
          textTransform: `uppercase`,
          marginRight:`1.45rem`
         }}
        >
        Home
        </Link>
         
        <Link
         to="/about/"
         style={{ 
          color:`white`,
          textDecoration: `none`,
          textTransform: `uppercase`,
          marginRight:`1.45rem`
          
         }}
        >
        About
        </Link>
        <Link
         to="/contact/"
         style={{ 
          color:`white`,
          textDecoration: `none`,
          textTransform: `uppercase`,
          marginRight:`1.45rem`
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
