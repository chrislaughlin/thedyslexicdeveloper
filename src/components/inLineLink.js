import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledLink = styled.a`
  margin-left: 3px;
  margin-right: 3px;
  font-weight: 700;
`

const InLineLink = ({ link, children }) => {
  return (
    <StyledLink href={link} target="_blank" rel="noopener noreferrer">
      {children}
    </StyledLink>
  )
}

InLineLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default InLineLink
