/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from 'styled-components';
import { motion } from "framer-motion"

import { rhythm } from "../utils/typography"

const StyledSocialLink = styled.a.attrs({
  target: '_blank'
})`
  margin-left: 5px;
  margin-right: 5px;
`;



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
    hidden: { scale: 0.2 },
    visible: { scale: 1 },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5)
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Opinionated rambles by <strong>{author.name}</strong> {author.summary}
        {` `}
        Follow me on
        <StyledSocialLink href={`https://twitter.com/${social.twitter}`}>
           Twitter
        </StyledSocialLink>
        ,
        <StyledSocialLink href={`https://instagram.com/${social.instagram}`}>
          Instagram
        </StyledSocialLink>
        or
        <StyledSocialLink href={`https://github.com/${social.github}`}>
          Github
        </StyledSocialLink>
      </p>
    </motion.div>
  )
}

export default Bio
