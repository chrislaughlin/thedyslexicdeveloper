import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "./layout"
import SEO from "./seo"

const AppHeader = styled.header`
  margin-bottom: 2.5rem;
  padding: 2rem;
  border: 3px solid #00ffff;
  background: linear-gradient(
    135deg,
    rgba(255, 140, 0, 0.18),
    rgba(0, 255, 255, 0.13)
  );
  box-shadow: inset 0 0 24px rgba(0, 255, 255, 0.16);

  h1 {
    margin: 0.75rem 0;
    color: #ffff00;
    line-height: 1.15;
  }

  p {
    margin: 0;
    max-width: 38rem;
  }
`

const AppName = styled.div`
  font-family: "Press Start 2P", cursive;
  font-size: 0.7rem;
  letter-spacing: 0.13em;
  color: #00ffff;
  text-transform: uppercase;
`

const PageBody = styled.article`
  max-width: 45rem;

  h2 {
    margin-top: 2.4rem;
    color: #ffff00;
  }

  h3 {
    margin-top: 1.75rem;
    color: #00ffff;
  }

  ul {
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.8rem;
  }
`

const LegalNavigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px dashed rgba(0, 255, 255, 0.6);
`

const FridgeToFeatPage = ({
  location,
  title,
  description,
  intro,
  children,
}) => (
  <Layout location={location} title="Fridge to Feat">
    <SEO title={`${title} - Fridge to Feat`} description={description} />
    <AppHeader>
      <AppName>Fridge to Feat</AppName>
      <h1>{title}</h1>
      <p>{intro}</p>
    </AppHeader>
    <PageBody>
      {children}
      <LegalNavigation aria-label="Fridge to Feat pages">
        <Link to="/fridge-to-feat/support/">Support</Link>
        <Link to="/fridge-to-feat/privacy/">Privacy Policy</Link>
      </LegalNavigation>
    </PageBody>
  </Layout>
)

export default FridgeToFeatPage
