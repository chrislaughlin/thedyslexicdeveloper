import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled, { css } from "styled-components"
import InLineLink from "../components/inLineLink"

const baseHighlightStyles = css`
  font-style: italic;
  color: var(--acid);
  font-weight: 700;
`

const StyledWhoQuestion = styled.span`
  font-size: 20px;
  ${baseHighlightStyles}
`

const StyledHighLightedText = styled.span`
  ${baseHighlightStyles}
`

const StyledAboutMeSection = styled.section`
  position: relative;
  margin: 1.5rem 0;
  padding: 1.4rem;
  background: linear-gradient(
    135deg,
    rgba(0, 245, 255, 0.1),
    rgba(255, 61, 242, 0.12)
  );
  border: 1px solid rgba(255, 255, 255, 0.14);
  clip-path: polygon(0 1.1rem, 1.1rem 0, 100% 0, 100% 100%, 0 100%);

  p {
    margin-top: 10px;
  }

  &::before {
    content: "";
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 2rem;
    height: 2rem;
    background: linear-gradient(135deg, var(--pink), var(--cyan));
    clip-path: polygon(50% 0, 100% 34%, 78% 100%, 14% 82%, 0 26%);
    opacity: 0.72;
  }
`

const StyledAboutMeSectionTitle = styled.a`
  display: inline-block;
  margin-bottom: 0.5rem;
  font-family: "Orbitron", sans-serif;
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: var(--cyan);
  text-transform: uppercase;
  letter-spacing: 0.08em;
`

const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;

  li {
    position: relative;
    padding-left: 28px;
    margin-bottom: 15px;
  }

  li::before {
    content: "◆";
    position: absolute;
    left: 0;
    color: var(--pink);
  }
`

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={data.site.siteMetadata.title} />
      <h1>About Me</h1>
      <StyledAboutMeSection>
        <p>
          <StyledWhoQuestion>Who is the Dyslexic Developer?</StyledWhoQuestion>{" "}
          a great question that one one has asked. I still feel the need to
          explain.
        </p>
        <p>
          The Dyslexic Developer is{" "}
          <StyledHighLightedText>Chris Laughlin</StyledHighLightedText>, a
          software developer from{" "}
          <StyledHighLightedText> Northern Ireland </StyledHighLightedText>. He
          started his journey in the crazy world of development in 2010. Working
          with companies like{" "}
          <StyledHighLightedText> Microsoft </StyledHighLightedText>,
          <StyledHighLightedText> Asidua </StyledHighLightedText>, and{" "}
          <StyledHighLightedText> Rapid7 </StyledHighLightedText>. He spends way
          to much time on{" "}
          <StyledHighLightedText>Twitter </StyledHighLightedText> and{" "}
          <StyledHighLightedText> Github </StyledHighLightedText>
          trying to maintain some sort of open-source presence. He has a{" "}
          <StyledHighLightedText>TODO </StyledHighLightedText>
          list a mile long of things to try and learn that grows every day.
          Check out some of the adventures he's taken below.
        </p>
      </StyledAboutMeSection>
      <StyledAboutMeSection id="live-streaming">
        <StyledAboutMeSectionTitle href="#live-streaming">
          Live Streaming
        </StyledAboutMeSectionTitle>
        <p>
          I run a weekly live stream on{" "}
          <StyledHighLightedText> Twitch </StyledHighLightedText>, where I try
          out new web tech and build small projects. I always have a{" "}
          <StyledHighLightedText> drink </StyledHighLightedText> at hand to help
          me along the way. All Streams are uploaded to{" "}
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
        <StyledAboutMeSectionTitle href="#talks">
          Talks
        </StyledAboutMeSectionTitle>
        <p>
          I am a regular{" "}
          <StyledHighLightedText> speaker </StyledHighLightedText> at local
          <StyledHighLightedText> meetups </StyledHighLightedText> and have
          spoken at a number of
          <StyledHighLightedText> conferences </StyledHighLightedText>. I have
          also organized and spoken at internal work
          <StyledHighLightedText> lunch and learn </StyledHighLightedText>{" "}
          sessions.
        </p>
        <p>
          <StyledWhoQuestion>Meetups:</StyledWhoQuestion>
          <StyledList>
            <li>
              <InLineLink link="https://www.meetup.com/Belfast-JS/">
                Belfast JS
              </InLineLink>
            </li>
          </StyledList>
        </p>
        <p>
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
        </p>
      </StyledAboutMeSection>
      <StyledAboutMeSection id="publications">
        <StyledAboutMeSectionTitle href="#publications">
          Publications
        </StyledAboutMeSectionTitle>
        <p>
          I have been published on{" "}
          <StyledHighLightedText> external </StyledHighLightedText> blogs and
          contributed to
          <StyledHighLightedText> books </StyledHighLightedText>
        </p>
        <p>
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
        </p>
        <p>
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
        </p>
      </StyledAboutMeSection>
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
