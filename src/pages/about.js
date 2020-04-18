import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled, { css } from 'styled-components';
import InLineLink from "../components/inLineLink"

const baseHighlightStyles = css`
  font-style: italic;
  color: #C94660;
`;

const StyledWhoQuestion = styled.span`
    font-size: 20px;
    ${baseHighlightStyles}
`;

const StyledHighLightedText = styled.span`
  ${baseHighlightStyles}
`;

const StyledAboutMeSection = styled.section`
  p {
    margin-top: 10px;
  }
`;

const StyledAboutMeSectionTitle = styled.a`
  font-size: 20px;
`;

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={data.site.siteMetadata.title} />
      <h1>
        About Me
      </h1>
      <StyledAboutMeSection>
        <p>
          <StyledWhoQuestion>Who is the Dyslexic Developer?</StyledWhoQuestion> a great question that one one has asked.
          I still feel the need to explain.
        </p>
        <p>
          The Dyslexic Developer is <StyledHighLightedText>Chris Laughlin</StyledHighLightedText>, a software developer
          from <StyledHighLightedText> Northern Ireland </StyledHighLightedText>. He started his journey in the crazy world
          of development in 2010. Working with companies like <StyledHighLightedText> Microsoft </StyledHighLightedText>,
          <StyledHighLightedText> Asidua </StyledHighLightedText>, and <StyledHighLightedText> Rapid7 </StyledHighLightedText>.
          He spends way to much time on <StyledHighLightedText>Twitter </StyledHighLightedText> and <StyledHighLightedText> Github </StyledHighLightedText>
          trying to maintain some sort of open-source presence. He has a <StyledHighLightedText>TODO </StyledHighLightedText>
          list a mile long of things to try and learn that grows every day. Check out some of the adventures
          he's taken below.
        </p>
      </StyledAboutMeSection>
      <StyledAboutMeSection
        id="live-streaming"
      >
        <StyledAboutMeSectionTitle
          href="#live-streaming"
        >
          Live Streaming
        </StyledAboutMeSectionTitle>
        <p>
          I run a weekly live stream on <StyledHighLightedText> YouTube </StyledHighLightedText>, where I try out new web
          tech and build small projects. I always have a <StyledHighLightedText> drink  </StyledHighLightedText> at hand to
          help me along the way.
        </p>
        <p>
          You can subscribe to the channel
          <InLineLink
            link="https://www.youtube.com/channel/UCMsliAfPkd00UdKJVAOzWWw/"
          >
            here
          </InLineLink> and see all previous coding videos
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
