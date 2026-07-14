import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const ArticleShell = styled.article`
  padding: clamp(1.25rem, 3vw, 2.25rem);
  background: rgba(0, 0, 0, 0.22);
  border: 1px solid rgba(255, 255, 255, 0.14);
  clip-path: polygon(0 1.4rem, 1.4rem 0, 100% 0, 100% 100%, 0 100%);

  header p {
    color: var(--acid);
    font-family: "Orbitron", sans-serif;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  blockquote {
    margin-left: 0;
    padding-left: 1.25rem;
    border-left: 4px solid var(--pink);
    color: var(--muted-text);
  }
`

const PostNav = styled.nav`
  margin-top: 2rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    list-style: none;
    padding: 0;
  }

  li {
    max-width: 48%;
  }

  @media (max-width: 640px) {
    li {
      max-width: 100%;
    }
  }
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <ArticleShell>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </ArticleShell>

      <PostNav>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </PostNav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
