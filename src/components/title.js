import React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const StyledNonIndexTitle = styled.h3`
  font-family: "Press Start 2P", cursive;
  margin-top: 0;
  font-size: 1.2rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-align: center;
  color: #ffff00;
  text-shadow: 0 0 10px #ff00ff, 0 0 12px rgba(0, 255, 255, 0.8);

  a {
    box-shadow: none;
    color: inherit;
    text-decoration: none;
  }
`

const RetroTitle = styled(motion.h1)`
  font-family: "Press Start 2P", cursive;
  font-size: 2.65rem;
  line-height: 3.25rem;
  margin: 0 0 2.75rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  background: linear-gradient(90deg, #ffff00, #ff00ff, #00ffff, #ffff00);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientShift} 14s linear infinite;
  text-shadow: 0 0 16px rgba(255, 0, 255, 0.8);

  a {
    box-shadow: none;
    color: inherit;
    text-decoration: none;
  }
`

const variants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: { opacity: 1, y: 0 },
}

const Title = ({ isIndexPage, text }) => {
  if (isIndexPage) {
    return (
      <RetroTitle initial="hidden" animate="visible" variants={variants} transition={{ duration: 1.2 }}>
        <Link to={`/`}>{text}</Link>
      </RetroTitle>
    )
  }

  return (
    <StyledNonIndexTitle>
      <Link to={`/`}>{text}</Link>
    </StyledNonIndexTitle>
  )
}

export default Title
