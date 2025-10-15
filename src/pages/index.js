import React from "react"
import { graphql } from "gatsby"
import styled, { css, keyframes } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const marquee = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`

const flicker = keyframes`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    opacity: 1;
  }
  20%, 24%, 55% {
    opacity: 0.35;
  }
`

const MarqueeShell = styled.div`
  overflow: hidden;
  border: 3px dashed #ffff00;
  background: rgba(0, 0, 0, 0.75);
  padding: 0.75rem 0;
  margin-bottom: 2rem;
  box-shadow: 0 0 12px #00ffff inset, 0 0 20px rgba(255, 0, 255, 0.6);
`

const MarqueeText = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: ${marquee} 18s linear infinite;
  font-family: "Press Start 2P", cursive;
  font-size: 0.9rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #ffff00;
  text-shadow: 0 0 8px #ff00ff;
`

const RetroPanel = styled.section`
  position: relative;
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.25));
  border: 4px double #00ffff;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 0 25px rgba(255, 0, 255, 0.7), inset 0 0 20px rgba(0, 0, 0, 0.6);
  color: var(--text-color);
  text-shadow: 0 0 6px rgba(0, 255, 255, 0.9);

  &::after {
    content: "";
    position: absolute;
    inset: 10px;
    border: 2px dotted rgba(255, 255, 0, 0.5);
    pointer-events: none;
  }
`

const RetroHeading = styled.h2`
  font-family: "Press Start 2P", cursive;
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  line-height: 1.8rem;
  text-transform: uppercase;
  color: #ffff00;
  text-shadow: 0 0 10px #ff00ff, 0 0 20px rgba(0, 255, 255, 0.8);
  animation: ${flicker} 4s infinite;
`

const RetroParagraph = styled.p`
  font-size: 1.5rem;
  margin: 0 auto 1.5rem;
  max-width: 32rem;
  line-height: 1.4;
`

const RetroList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem auto;
  max-width: 32rem;
  font-size: 1.4rem;

  li {
    position: relative;
    padding-left: 2.5rem;
    margin-bottom: 1rem;
  }

  li::before {
    content: "✶";
    position: absolute;
    left: 0.75rem;
    color: #00ffff;
    text-shadow: 0 0 8px #ff00ff;
  }
`

const buttonStyles = css`
  display: inline-block;
  padding: 1.1rem 1.75rem;
  border: 3px solid #ff00ff;
  border-radius: 8px;
  background: repeating-linear-gradient(135deg, rgba(255, 0, 255, 0.25) 0, rgba(255, 0, 255, 0.25) 12px, rgba(0, 255, 255, 0.25) 12px, rgba(0, 255, 255, 0.25) 24px);
  color: #ffff00;
  text-decoration: none;
  font-family: "Press Start 2P", cursive;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  box-shadow: 0 0 18px rgba(255, 0, 255, 0.8), inset 0 0 12px rgba(0, 255, 255, 0.5);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover,
  &:focus {
    transform: translateY(-6px) rotate(-1.5deg);
    box-shadow: 0 0 25px rgba(255, 255, 0, 0.9), inset 0 0 14px rgba(0, 255, 255, 0.8);
    color: #ffffff;
  }

  &:active {
    transform: translateY(2px) scale(0.98);
  }
`

const RetroLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
`

const SocialLink = styled.a`
  ${buttonStyles}
`

const RetroSticker = styled.div`
  margin-top: 2.5rem;
  padding: 1rem 1.5rem;
  border: 3px dashed #00ffff;
  background: rgba(0, 0, 0, 0.65);
  display: inline-block;
  font-size: 1.2rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
`

const SparkleRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
  font-size: 1.5rem;
  color: #ffff00;
  text-shadow: 0 0 12px #ff00ff;
`

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Welcome to the Retro Web" />
      <MarqueeShell>
        <MarqueeText>
          ✨ Welcome to the official {siteTitle} cyber hub • grab a soda, power up your speakers, and enjoy the ride ✨
        </MarqueeText>
      </MarqueeShell>
      <RetroPanel>
        <RetroHeading>Hey there, I'm The Dyslexic Developer!</RetroHeading>
        <RetroParagraph>
          Plug in your modem and join me on a neon-soaked tour through my corner of the internet. I build playful
          experiences, tinker with creative code, and share stories about the journey along the way.
        </RetroParagraph>
        <RetroList>
          <li>Dial-up deep dives into code, art, and accessibility.</li>
          <li>Creative experiments fueled by caffeine and curiosity.</li>
          <li>A community-minded builder who still loves a good easter egg.</li>
        </RetroList>
        <RetroLinks>
          <SocialLink href="https://twitter.com/TheDyslexicDev" target="_blank" rel="noopener noreferrer">
            Twitter HQ
          </SocialLink>
          <SocialLink href="https://github.com/TheDyslexicDeveloper" target="_blank" rel="noopener noreferrer">
            GitHub Lab
          </SocialLink>
          <SocialLink href="https://instagram.com/thedyslexicdeveloper" target="_blank" rel="noopener noreferrer">
            Instagram Gallery
          </SocialLink>
          <SocialLink href="/about">
            About Me
          </SocialLink>
        </RetroLinks>
        <SparkleRow>
          <span>★</span>
          <span>Beep Boop</span>
          <span>★</span>
        </SparkleRow>
        <RetroSticker>Constructed with love, pixels, and a dash of nostalgia.</RetroSticker>
      </RetroPanel>
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
