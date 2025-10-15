import React from "react"
import styled, { keyframes } from "styled-components"

import Title from "./title"

const glow = keyframes`
  0% {
    box-shadow: 0 0 18px rgba(255, 0, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.45);
  }
  50% {
    box-shadow: 0 0 26px rgba(255, 255, 0, 0.7), 0 0 45px rgba(0, 255, 255, 0.65);
  }
  100% {
    box-shadow: 0 0 18px rgba(255, 0, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.45);
  }
`

const OuterShell = styled.div`
  margin: 3rem auto;
  max-width: 960px;
  padding: 3rem 3.5rem 2.5rem;
  border: 5px double #ff00ff;
  background: rgba(10, 10, 10, 0.85);
  color: var(--text-color);
  position: relative;
  overflow: hidden;
  animation: ${glow} 6s ease-in-out infinite;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 0.07) 50%, rgba(0, 0, 0, 0.05) 50%);
    background-size: 100% 4px;
    mix-blend-mode: overlay;
    pointer-events: none;
    opacity: 0.35;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 18px;
    border: 2px dashed rgba(0, 255, 255, 0.45);
    pointer-events: none;
  }
`

const Content = styled.main`
  position: relative;
  z-index: 1;
`

const RetroFooter = styled.footer`
  margin-top: 2.5rem;
  position: relative;
  z-index: 1;
  text-align: center;
  font-family: "Press Start 2P", cursive;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #ffff00;
  text-shadow: 0 0 6px rgba(0, 255, 255, 0.9);

  a {
    color: #00ffff;
  }
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <OuterShell>
      <Title isIndexPage={location.pathname === rootPath} text={title} />
      <Content>{children}</Content>
      <RetroFooter>
        © {new Date().getFullYear()} • Powered by Gatsby & good vibes
      </RetroFooter>
    </OuterShell>
  )
}

export default Layout
