import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled, { css } from 'styled-components';

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

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={data.site.siteMetadata.title} />
      <h1>
        About Me
      </h1>
      <section>
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
      </section>
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
