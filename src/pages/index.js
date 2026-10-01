import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NeonLogo from "../components/space/neon-logo"
import {
  SpacePage as Page,
  SpaceHeader as Header,
  SpaceNavLink as HeaderLink,
} from "../components/space/theme"

const Welcome = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 0;
  max-width: 890px;
  font: 10px/1.8 "Courier New", monospace;
  letter-spacing: 0.04em;
  color: #91a5c2;
  span {
    flex: 0 0 6px;
    width: 6px;
    height: 6px;
    background: #e7278c;
  }
`
const Hero = styled.section`
  position: relative;
  padding: 24px 0 36px;
  h1 {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
  @media (max-width: 700px) {
    padding: 20px 0 30px;
  }
`
const Intro = styled.section`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: center;
  gap: 70px;
  padding: 36px 0 40px;
  border-top: 1px solid #7d9bc32e;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 30px 0;
  }
`
const Heading = styled.h2`
  font-family: "Montserrat", sans-serif;
  margin: 0 0 22px;
  font-weight: 800;
  font-size: clamp(26px, 3vw, 36px);
  line-height: 1.09;
  letter-spacing: -0.06em;
  color: #f0f5ff;
  span {
    display: block;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.02em;
    margin-bottom: 14px;
  }
  em {
    display: block;
    font-style: italic;
    color: #ff4ca8;
  }
`
const Paragraph = styled.p`
  max-width: 510px;
  font-size: 15px;
  line-height: 1.9;
  color: #b5c2d8;
  margin: 0;
`
const MainLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;
  margin-top: 29px;
  background: #ed3d94;
  padding: 15px 23px;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: #c92079;
    color: #fff;
    transform: translateY(-2px);
  }
`
const Features = styled.ul`
  list-style: none;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid #7d9bc32e;
  border-bottom: 1px solid #7d9bc32e;
  padding: 25px 0;
  gap: 28px;
  li {
    margin: 0;
    font-size: 12px;
    line-height: 1.85;
    color: #b5c2d8;
  }
  li + li {
    border-left: 1px solid #7d9bc329;
    padding-left: 28px;
  }
  span {
    display: block;
    margin-bottom: 10px;
    color: #68c7ff;
    font: 10px "Courier New", monospace;
    letter-spacing: 0.12em;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 19px;
    li + li {
      border-left: 0;
      border-top: 1px solid #7d9bc329;
      padding: 18px 0 0;
    }
  }
`
const Connect = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  padding: 32px 0;
  border-bottom: 1px solid #7d9bc32e;
  @media (max-width: 700px) {
    flex-wrap: wrap;
    gap: 18px;
  }
`
const SocialLink = styled.a`
  display: inline-flex;
  gap: 28px;
  align-items: center;
  color: #f0f5ff;
  font-size: 11px;
  font-weight: 700;
  padding: 8px 0;
  transition: color 0.2s;
  span {
    color: #68c7ff;
    font-size: 17px;
    font-weight: 400;
  }
  &:hover {
    color: #ff66b7;
  }
`
const Signoff = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 22px;
  padding: 24px 0 0;
  font: 10px/1.7 "Courier New", monospace;
  color: #91a5c2;
  p {
    margin: 0;
  }
  span {
    white-space: nowrap;
    color: #ff66b7;
  }
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Welcome to the Retro Web" />
      <Page>
        <Header>
          <Welcome>
            <span aria-hidden="true" />✨ Welcome to the official {siteTitle}{" "}
            cyber hub • grab a soda, power up your speakers, and enjoy the ride
            ✨
          </Welcome>
          <HeaderLink to="/about">
            About Me <span aria-hidden="true">↗</span>
          </HeaderLink>
        </Header>
        <Hero aria-label="Main logo">
          <h1>{siteTitle}</h1>
          <NeonLogo />
        </Hero>
        <Intro>
          <div>
            <Heading>
              <span>Hey there, I'm</span>The Dyslexic <em>Developer!</em>
            </Heading>
            <MainLink to="/about">
              About Me <span aria-hidden="true">↗</span>
            </MainLink>
          </div>
          <Paragraph>
            Plug in your modem and join me on a neon-soaked tour through my
            corner of the internet. I build playful experiences, tinker with
            creative code, and share stories about the journey along the way.
          </Paragraph>
        </Intro>
        <Features>
          <li>
            <span aria-hidden="true">01 / EXPLORE</span>Dial-up deep dives into
            code, art, and accessibility.
          </li>
          <li>
            <span aria-hidden="true">02 / EXPERIMENT</span>Creative experiments
            fueled by caffeine and curiosity.
          </li>
          <li>
            <span aria-hidden="true">03 / CONNECT</span>A community-minded
            builder who still loves a good easter egg.
          </li>
        </Features>
        <Connect aria-label="Social links">
          <SocialLink
            href="https://twitter.com/TheDyslexicDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter HQ <span aria-hidden="true">↗</span>
          </SocialLink>
          <SocialLink
            href="https://github.com/TheDyslexicDeveloper"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Lab <span aria-hidden="true">↗</span>
          </SocialLink>
          <SocialLink
            href="https://instagram.com/thedyslexicdeveloper"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram Gallery <span aria-hidden="true">↗</span>
          </SocialLink>
        </Connect>
        <Signoff>
          <p>Constructed with love, pixels, and a dash of nostalgia.</p>
          <span>★ &nbsp; Beep Boop &nbsp; ★</span>
        </Signoff>
      </Page>
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
