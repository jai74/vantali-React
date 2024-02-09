import React from 'react'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <nav className={`navbar-navbar ${props.rootClassName} `}>
      <img
        alt="Planical7012"
        src={props.brandingLogo}
        className="navbar-branding-logo"
      />
      <h1 className="navbar-text">
        <span className="">Vantali</span>
        <br className=""></br>
      </h1>
    </nav>
  )
}

Navbar.defaultProps = {
  imageAlt: 'image',
  imageSrc1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  imageSrc: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  imageAlt1: 'image',
  heading1: 'Heading',
  text: 'Text',
  rootClassName: '',
  heading: 'Heading',
  brandingLogo: '/vantali_logo_black-1500h.png',
}

Navbar.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt1: PropTypes.string,
  heading1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  brandingLogo: PropTypes.string,
}

export default Navbar
