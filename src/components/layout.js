import React from "react"
import styled, { keyframes } from "styled-components"

import Title from "./title"

const floatShard = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(14px, -18px, 0) rotate(8deg);
  }
`

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 22px 22px 0 rgba(255, 61, 242, 0.32), -18px -18px 0 rgba(0, 245, 255, 0.22), 0 28px 80px rgba(0, 0, 0, 0.48);
  }
  50% {
    box-shadow: 28px 28px 0 rgba(216, 255, 0, 0.25), -24px -24px 0 rgba(255, 61, 242, 0.22), 0 34px 100px rgba(0, 245, 255, 0.2);
  }
`

const OuterShell = styled.div`
  width: min(1080px, calc(100% - 2rem));
  margin: 3rem auto;
  padding: clamp(1.5rem, 4vw, 3.5rem);
  color: var(--text-color);
  position: relative;
  isolation: isolate;
  background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.13),
      transparent 22%
    ),
    linear-gradient(315deg, rgba(0, 245, 255, 0.14), transparent 28%),
    var(--panel-color);
  border: 1px solid rgba(255, 255, 255, 0.18);
  clip-path: polygon(
    0 3rem,
    3rem 0,
    100% 0,
    100% calc(100% - 3rem),
    calc(100% - 3rem) 100%,
    0 100%
  );
  backdrop-filter: blur(16px);
  animation: ${pulseGlow} 7s ease-in-out infinite;

  &::before,
  &::after {
    content: "";
    position: absolute;
    pointer-events: none;
    z-index: -1;
  }

  &::before {
    inset: 0;
    background: linear-gradient(
        128deg,
        transparent 0 41%,
        rgba(255, 255, 255, 0.16) 41% 41.3%,
        transparent 41.3% 100%
      ),
      linear-gradient(
        42deg,
        transparent 0 63%,
        rgba(216, 255, 0, 0.18) 63% 63.35%,
        transparent 63.35% 100%
      );
    clip-path: inherit;
  }

  &::after {
    right: -2.8rem;
    top: 5rem;
    width: 8.5rem;
    height: 8.5rem;
    background: linear-gradient(
      135deg,
      var(--acid),
      var(--orange) 48%,
      var(--pink)
    );
    clip-path: polygon(50% 0, 100% 34%, 78% 100%, 18% 82%, 0 24%);
    filter: drop-shadow(0 0 24px rgba(216, 255, 0, 0.55));
    opacity: 0.82;
    animation: ${floatShard} 6s ease-in-out infinite;
  }
`

const Content = styled.main`
  position: relative;
  z-index: 1;
`

const FooterBar = styled.footer`
  margin-top: 3rem;
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 245, 255, 0.35);
  color: var(--muted-text);
  font-size: 0.82rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;

  span:last-child {
    color: var(--acid);
    font-family: "Orbitron", sans-serif;
  }
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <OuterShell>
      <Title isIndexPage={location.pathname === rootPath} text={title} />
      <Content>{children}</Content>
      <FooterBar>
        <span>© {new Date().getFullYear()} The Dyslexic Developer</span>
        <span>Low-poly Y2K mode online</span>
      </FooterBar>
    </OuterShell>
  )
}

export default Layout
