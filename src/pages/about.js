import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import styled, { css } from "styled-components"
import InLineLink from "../components/inLineLink"
import NeonLogo from "../components/space/neon-logo"
import { SpacePage, SpaceHeader, SpaceNavLink } from "../components/space/theme"

const baseHighlightStyles = css`
  font-style: italic;
  color: #ff66b7;
`
const StyledWhoQuestion = styled.span`
  display: inline;
  font-size: 16px;
  font-weight: 600;
  ${baseHighlightStyles}
`
const StyledHighLightedText = styled.span`
  ${baseHighlightStyles}
`
const LogoHomeLink = styled(Link)`
  display: block;
  width: 130px;
  flex-shrink: 0;
  margin: -18px 0 -12px;
`
const AboutHero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
  padding: 65px 0 48px;
  h1 {
    color: #f0f5ff;
    font: 800 clamp(44px, 6vw, 72px) / 1.1 "Montserrat", sans-serif;
    letter-spacing: -0.06em;
    margin: 0;
  }
  em {
    color: #ff4ca8;
  }
  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding-bottom: 8px;
  }
  nav a {
    color: #91a5c2;
    font: 11px/1.8 "Courier New", monospace;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  nav a:hover {
    color: #ff66b7;
  }
  @media (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
    padding: 40px 0 30px;
    gap: 24px;
    nav {
      gap: 12px 18px;
      padding: 0;
    }
  }
`
const StyledAboutMeSection = styled.section`
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  column-gap: 65px;
  border-top: 1px solid #7d9bc32e;
  padding: 38px 0;
  scroll-margin-top: 24px;
  color: #b5c2d8;
  font-size: 15px;
  line-height: 1.9;
  > p,
  > div {
    grid-column: 2;
    margin: 0 0 18px;
  }
  > :last-child {
    margin-bottom: 0;
  }
  h2 {
    grid-column: 1;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    line-height: 1.3;
  }
  &.intro > p:first-child {
    grid-column: 1;
  }
  &.intro > p:last-child {
    grid-column: 2;
    grid-row: 1;
  }
  a {
    color: #68c7ff;
    text-decoration: underline;
    text-decoration-color: #68c7ff55;
    text-underline-offset: 4px;
  }
  a:hover {
    color: #ff66b7;
    text-decoration-color: currentColor;
  }
  @media (max-width: 850px) {
    grid-template-columns: 190px minmax(0, 1fr);
    column-gap: 35px;
  }
  @media (max-width: 700px) {
    display: block;
    padding: 28px 0;
    h2 {
      margin-bottom: 22px;
    }
  }
`
const StyledAboutMeSectionTitle = styled.a`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.04em;
  && {
    color: #f0f5ff;
    text-decoration: none;
  }
  &&:hover {
    color: #ff66b7;
  }
`
const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 12px 0 0;
  li {
    position: relative;
    padding-left: 20px;
    margin: 0 0 15px;
    overflow-wrap: anywhere;
  }
  li::before {
    content: "↗";
    position: absolute;
    left: 0;
    color: #ff66b7;
    font-size: 12px;
  }
`

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle} space>
      <SEO title={data.site.siteMetadata.title} />
      <SpacePage>
        <SpaceHeader>
          <LogoHomeLink to="/" aria-label="The Dyslexic Developer homepage">
            <NeonLogo compact />
          </LogoHomeLink>
          <SpaceNavLink to="/">
            Home <span aria-hidden="true">↗</span>
          </SpaceNavLink>
        </SpaceHeader>
        <AboutHero>
          <h1>
            About <em>Me</em>
          </h1>
          <nav aria-label="About sections">
            <a href="#live-streaming">Live Streaming</a>
            <a href="#talks">Talks</a>
            <a href="#publications">Publications</a>
          </nav>
        </AboutHero>
        <StyledAboutMeSection className="intro">
          <p>
            <StyledWhoQuestion>
              Who is the Dyslexic Developer?
            </StyledWhoQuestion>{" "}
            a great question that one one has asked. I still feel the need to
            explain.
          </p>
          <p>
            The Dyslexic Developer is{" "}
            <StyledHighLightedText>Chris Laughlin</StyledHighLightedText>, a
            software developer from{" "}
            <StyledHighLightedText> Northern Ireland </StyledHighLightedText>.
            He started his journey in the crazy world of development in 2010.
            Working with companies like{" "}
            <StyledHighLightedText> Microsoft </StyledHighLightedText>,
            <StyledHighLightedText> Asidua </StyledHighLightedText>, and{" "}
            <StyledHighLightedText> Rapid7 </StyledHighLightedText>. He spends
            way to much time on{" "}
            <StyledHighLightedText>Twitter </StyledHighLightedText> and{" "}
            <StyledHighLightedText> Github </StyledHighLightedText>
            trying to maintain some sort of open-source presence. He has a{" "}
            <StyledHighLightedText>TODO </StyledHighLightedText>
            list a mile long of things to try and learn that grows every day.
            Check out some of the adventures he's taken below.
          </p>
        </StyledAboutMeSection>
        <StyledAboutMeSection id="live-streaming">
          <h2>
            <StyledAboutMeSectionTitle href="#live-streaming">
              Live Streaming
            </StyledAboutMeSectionTitle>
          </h2>
          <p>
            I run a weekly live stream on{" "}
            <StyledHighLightedText> Twitch </StyledHighLightedText>, where I try
            out new web tech and build small projects. I always have a{" "}
            <StyledHighLightedText> drink </StyledHighLightedText> at hand to
            help me along the way. All Streams are uploaded to{" "}
            <StyledHighLightedText> Youtube </StyledHighLightedText> after
          </p>
          <p>
            You can subscribe to the channel
            <InLineLink link="https://www.twitch.tv/chrislaughlin">
              here
            </InLineLink>{" "}
            and see all previous coding videos
          </p>
          <p>
            You can see all previous coding videos
            <InLineLink link="https://www.youtube.com/channel/UCMsliAfPkd00UdKJVAOzWWw/">
              here
            </InLineLink>
          </p>
        </StyledAboutMeSection>
        <StyledAboutMeSection id="talks">
          <h2>
            <StyledAboutMeSectionTitle href="#talks">
              Talks
            </StyledAboutMeSectionTitle>
          </h2>
          <p>
            I am a regular{" "}
            <StyledHighLightedText> speaker </StyledHighLightedText> at local
            <StyledHighLightedText> meetups </StyledHighLightedText> and have
            spoken at a number of
            <StyledHighLightedText> conferences </StyledHighLightedText>. I have
            also organized and spoken at internal work
            <StyledHighLightedText>
              {" "}
              lunch and learn{" "}
            </StyledHighLightedText>{" "}
            sessions.
          </p>
          <div>
            <StyledWhoQuestion>Meetups:</StyledWhoQuestion>
            <StyledList>
              <li>
                <InLineLink link="https://www.meetup.com/Belfast-JS/">
                  Belfast JS
                </InLineLink>
              </li>
            </StyledList>
          </div>
          <div>
            <StyledWhoQuestion>Conferences:</StyledWhoQuestion>
            <StyledList>
              <li>
                <InLineLink link="https://youtu.be/8GCRPffeAB8">
                  WFH Conf 2020: Protecting your npm dependencies
                </InLineLink>
              </li>
              <li>
                <InLineLink link="https://youtu.be/EsEnOdqVukQ">
                  ReactiveConf 2019: Protecting your npm dependencies
                </InLineLink>
              </li>
              <li>
                <InLineLink link="https://youtu.be/f8U1hoOlBUk">
                  JSDayIE 2019: Protecting your npm dependencies
                </InLineLink>
              </li>
              <li>
                <InLineLink link="https://youtu.be/g-Mb-XlteAY">
                  NI Dev Conf 2019: All your packages are belong to us -
                  Protecting your npm dependencies
                </InLineLink>
              </li>
              <li>
                <InLineLink link="https://youtu.be/K7EIiHqV7r0">
                  NI Dev Conf 2018: There’s no Imposters Here
                </InLineLink>
              </li>
              <li>
                <InLineLink link="https://2017.nidevconf.com/sessions/chrislaughlin/">
                  NI Dev Conf 2017: Top 5 Chrome Developer Tools Features
                </InLineLink>
              </li>
            </StyledList>
          </div>
        </StyledAboutMeSection>
        <StyledAboutMeSection id="publications">
          <h2>
            <StyledAboutMeSectionTitle href="#publications">
              Publications
            </StyledAboutMeSectionTitle>
          </h2>
          <p>
            I have been published on{" "}
            <StyledHighLightedText> external </StyledHighLightedText> blogs and
            contributed to
            <StyledHighLightedText> books </StyledHighLightedText>
          </p>
          <div>
            <StyledWhoQuestion>Blogs:</StyledWhoQuestion>
            <StyledList>
              <li>
                <InLineLink link="https://www.sitepoint.com/style-react-components-styled-components/">
                  SitePoint 2017: Styling in React: From External CSS to Styled
                  Components
                </InLineLink>
              </li>
              <li>
                <InLineLink link="https://www.sitepoint.com/getting-started-with-codemods/">
                  SitePoint 2017: Refactor Code in Your Lunch Break: Getting
                  Started with Codemods
                </InLineLink>
              </li>
            </StyledList>
          </div>
          <div>
            <StyledWhoQuestion>Books:</StyledWhoQuestion>
            <StyledList>
              <li>
                <InLineLink link="https://www.amazon.com/Understanding-Internet-Applications-Information-Professional/dp/1843344998">
                  Chandos Publishing 2009: Understanding the Internet: A Glimpse
                  into the Building Blocks, Applications, Security and Hidden
                  Secrets of the Web
                </InLineLink>
              </li>
            </StyledList>
          </div>
        </StyledAboutMeSection>
      </SpacePage>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
