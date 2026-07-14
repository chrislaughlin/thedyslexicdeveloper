import React from "react"
import { graphql } from "gatsby"
import styled, { css, keyframes } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const scanner = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`

const hoverShard = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-14px) rotate(9deg);
  }
`

const MarqueeShell = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
  padding: 0.8rem 1rem;
  border: 1px solid rgba(216, 255, 0, 0.6);
  background: rgba(0, 0, 0, 0.3);
  clip-path: polygon(
    0 0,
    calc(100% - 1.3rem) 0,
    100% 50%,
    calc(100% - 1.3rem) 100%,
    0 100%,
    1.3rem 50%
  );

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.35),
      transparent
    );
    animation: ${scanner} 4s linear infinite;
  }
`

const MarqueeText = styled.div`
  white-space: nowrap;
  font-family: "Orbitron", sans-serif;
  font-size: clamp(0.78rem, 2vw, 0.95rem);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--acid);
  text-shadow: 0 0 10px rgba(216, 255, 0, 0.55);
`

const HeroGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
  gap: 2rem;
  align-items: stretch;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

const GlassPanel = styled.div`
  position: relative;
  padding: clamp(1.5rem, 4vw, 3rem);
  background: linear-gradient(135deg, rgba(255, 61, 242, 0.2), transparent 28%),
    linear-gradient(315deg, rgba(0, 245, 255, 0.2), transparent 34%),
    rgba(5, 3, 32, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.18);
  clip-path: polygon(
    0 2rem,
    2rem 0,
    100% 0,
    100% calc(100% - 2rem),
    calc(100% - 2rem) 100%,
    0 100%
  );
  box-shadow: inset 0 0 35px rgba(255, 255, 255, 0.05),
    0 24px 55px rgba(0, 0, 0, 0.34);

  &::before {
    content: "";
    position: absolute;
    inset: 0.8rem;
    border: 1px solid rgba(0, 245, 255, 0.28);
    clip-path: inherit;
    pointer-events: none;
  }
`

const HeroHeading = styled.h2`
  margin-top: 0;
  margin-bottom: 1.25rem;
  font-size: clamp(2rem, 5vw, 4.6rem);
  color: var(--text-color);
  text-shadow: 0.08em 0.08em 0 var(--pink), -0.04em -0.04em 0 var(--cyan);
`

const HeroCopy = styled.p`
  max-width: 42rem;
  font-size: clamp(1.05rem, 2vw, 1.28rem);
  color: var(--muted-text);
`

const FeatureList = styled.ul`
  display: grid;
  gap: 0.85rem;
  list-style: none;
  padding: 0;
  margin: 2rem 0;

  li {
    position: relative;
    padding: 0.9rem 1rem 0.9rem 3rem;
    background: rgba(255, 255, 255, 0.06);
    border-left: 4px solid var(--cyan);
    clip-path: polygon(
      0 0,
      calc(100% - 1rem) 0,
      100% 50%,
      calc(100% - 1rem) 100%,
      0 100%
    );
  }

  li::before {
    content: "◆";
    position: absolute;
    left: 1rem;
    color: var(--acid);
    text-shadow: 0 0 12px var(--acid);
  }
`

const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3.2rem;
  padding: 0.9rem 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: linear-gradient(
    135deg,
    rgba(216, 255, 0, 0.95),
    rgba(0, 245, 255, 0.9) 48%,
    rgba(255, 61, 242, 0.95)
  );
  color: #12002f;
  font-family: "Orbitron", sans-serif;
  font-size: 0.82rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  clip-path: polygon(0.8rem 0, 100% 0, calc(100% - 0.8rem) 100%, 0 100%);
  box-shadow: 0 10px 0 rgba(255, 61, 242, 0.38), 0 20px 30px rgba(0, 0, 0, 0.22);
  transform: translateY(0);
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;

  &:hover,
  &:focus {
    color: #12002f;
    filter: saturate(1.3) brightness(1.08);
    transform: translateY(-6px) rotate(-1deg);
    box-shadow: 0 16px 0 rgba(0, 245, 255, 0.28), 0 30px 42px rgba(0, 0, 0, 0.3);
  }
`

const LinkGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

const SocialLink = styled.a`
  ${buttonStyles}
`

const SceneCard = styled.aside`
  position: relative;
  min-height: 28rem;
  overflow: hidden;
  background: radial-gradient(
      circle at 50% 35%,
      rgba(216, 255, 0, 0.24),
      transparent 9rem
    ),
    linear-gradient(180deg, rgba(0, 245, 255, 0.15), rgba(255, 61, 242, 0.15)),
    rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(255, 255, 255, 0.16);
  clip-path: polygon(
    0 0,
    calc(100% - 2rem) 0,
    100% 2rem,
    100% 100%,
    2rem 100%,
    0 calc(100% - 2rem)
  );
`

const PolyShard = styled.span`
  position: absolute;
  display: block;
  width: ${props => props.size};
  height: ${props => props.size};
  left: ${props => props.left};
  top: ${props => props.top};
  background: ${props => props.gradient};
  clip-path: ${props => props.shape};
  filter: drop-shadow(0 18px 20px rgba(0, 0, 0, 0.25));
  animation: ${hoverShard} ${props => props.speed} ease-in-out infinite;
  animation-delay: ${props => props.delay};
`

const SceneLabel = styled.div`
  position: absolute;
  left: 1.25rem;
  right: 1.25rem;
  bottom: 1.25rem;
  padding: 1rem;
  background: rgba(3, 0, 26, 0.74);
  border: 1px solid rgba(216, 255, 0, 0.45);
  color: var(--acid);
  font-family: "Orbitron", sans-serif;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Low-poly Y2K Web Developer" />
      <MarqueeShell>
        <MarqueeText>
          Low-poly portal initialized • neon mesh loaded • welcome to{" "}
          {siteTitle}
        </MarqueeText>
      </MarqueeShell>
      <HeroGrid>
        <GlassPanel>
          <HeroHeading>
            Code, streams, and glitches from the future past.
          </HeroHeading>
          <HeroCopy>
            I build playful web experiences with a sharp edge: accessible
            interfaces, creative tooling, open-source experiments, and the
            occasional digital easter egg rendered in full Y2K chrome.
          </HeroCopy>
          <FeatureList>
            <li>
              Low-poly thoughts on JavaScript, React, security, and creative
              code.
            </li>
            <li>
              Livestream-friendly builds with curiosity, caffeine, and community
              at the center.
            </li>
            <li>
              Accessibility-minded systems with nostalgic energy and modern
              craft.
            </li>
          </FeatureList>
          <LinkGrid>
            <SocialLink
              href="https://twitter.com/TheDyslexicDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </SocialLink>
            <SocialLink
              href="https://github.com/TheDyslexicDeveloper"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </SocialLink>
            <SocialLink
              href="https://instagram.com/thedyslexicdeveloper"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </SocialLink>
            <SocialLink href="/about">About</SocialLink>
          </LinkGrid>
        </GlassPanel>
        <SceneCard aria-label="Decorative low-poly 3D Y2K scene">
          <PolyShard
            size="11rem"
            left="18%"
            top="12%"
            speed="7s"
            delay="0s"
            shape="polygon(50% 0, 100% 36%, 80% 100%, 20% 100%, 0 36%)"
            gradient="linear-gradient(135deg, var(--acid), var(--orange))"
          />
          <PolyShard
            size="8rem"
            left="54%"
            top="20%"
            speed="6s"
            delay="-2s"
            shape="polygon(0 0, 100% 18%, 72% 100%, 14% 70%)"
            gradient="linear-gradient(135deg, var(--cyan), var(--violet))"
          />
          <PolyShard
            size="13rem"
            left="28%"
            top="44%"
            speed="8s"
            delay="-4s"
            shape="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"
            gradient="linear-gradient(135deg, var(--pink), var(--violet), var(--cyan))"
          />
          <PolyShard
            size="5rem"
            left="68%"
            top="62%"
            speed="5s"
            delay="-1s"
            shape="polygon(50% 0, 100% 100%, 0 78%)"
            gradient="linear-gradient(135deg, var(--acid), var(--cyan))"
          />
          <SceneLabel>Polygon dream machine</SceneLabel>
        </SceneCard>
      </HeroGrid>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
