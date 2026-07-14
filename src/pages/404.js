import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ErrorPanel = styled.section`
  min-height: 22rem;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 2rem;
  background: radial-gradient(
      circle at 50% 0,
      rgba(255, 61, 242, 0.28),
      transparent 14rem
    ),
    rgba(0, 0, 0, 0.24);
  border: 1px solid rgba(255, 255, 255, 0.16);
  clip-path: polygon(
    0 2rem,
    2rem 0,
    100% 0,
    100% calc(100% - 2rem),
    calc(100% - 2rem) 100%,
    0 100%
  );
`

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <ErrorPanel>
        <div>
          <h1>404</h1>
          <p>This polygon drifted outside the mesh.</p>
          <Link to="/">Re-enter the portal</Link>
        </div>
      </ErrorPanel>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
