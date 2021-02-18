import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React from 'react'
import PropTypes from 'prop-types'
import { IntlContextConsumer } from 'gatsby-plugin-intl'

const Link = ({ to, language, children, onClick, ...rest }) => (
  <IntlContextConsumer>
    {intl => {
      const languageLink = language || intl.language
      const link = intl.routed || language ? `/${languageLink}${to}` : `${to}`

      const handleClick = e => {
        if (language) {
          window.localStorage.setItem('gatsby-intl-language', language)
        }
        if (onClick) {
          onClick(e)
        }
      }

      return (
        <AnchorLink {...rest} to={link} onClick={handleClick}>
          {children}
        </AnchorLink>
      )
    }}
  </IntlContextConsumer>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  language: PropTypes.string
}

Link.defaultProps = {
  to: ''
}

export default Link