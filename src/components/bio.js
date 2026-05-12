/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { motion } from "framer-motion"

import { rhythm } from "../utils/typography"

const BioShell = styled(motion.div)`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1.25rem;
  background: linear-gradient(
    135deg,
    rgba(0, 245, 255, 0.12),
    rgba(255, 61, 242, 0.12)
  );
  border: 1px solid rgba(255, 255, 255, 0.16);
  clip-path: polygon(
    0 1rem,
    1rem 0,
    100% 0,
    100% calc(100% - 1rem),
    calc(100% - 1rem) 100%,
    0 100%
  );

  p {
    margin: 0;
    color: var(--muted-text);
  }

  strong {
    color: var(--acid);
  }
`

const AvatarFrame = styled.div`
  flex: 0 0 auto;
  padding: 4px;
  background: linear-gradient(135deg, var(--acid), var(--cyan), var(--pink));
  clip-path: polygon(50% 0, 100% 30%, 86% 100%, 14% 100%, 0 30%);

  .gatsby-image-wrapper {
    clip-path: polygon(50% 0, 100% 30%, 86% 100%, 14% 100%, 0 30%);
  }
`

const StyledSocialLink = styled.a`
  margin-left: 5px;
  margin-right: 5px;
  font-weight: 700;
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            instagram
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata

  const variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  }

  return (
    <BioShell
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.6 }}
    >
      <AvatarFrame>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
          }}
        />
      </AvatarFrame>
      <p>
        Opinionated rambles by <strong>{author.name}</strong> {author.summary}{" "}
        Follow me on
        <StyledSocialLink
          href={`https://twitter.com/${social.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </StyledSocialLink>
        ,
        <StyledSocialLink
          href={`https://instagram.com/${social.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </StyledSocialLink>{" "}
        or
        <StyledSocialLink
          href={`https://github.com/${social.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </StyledSocialLink>{" "}
        more about me
        <StyledSocialLink href="/about">here</StyledSocialLink>
      </p>
    </BioShell>
  )
}

export default Bio
