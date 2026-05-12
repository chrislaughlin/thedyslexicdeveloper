import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"

import projectsData from "../repos.json"
import shuffle from "../utils/shuffle"

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1.25rem;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    min-height: 13rem;
    padding: 1.35rem;
    background: linear-gradient(
        135deg,
        rgba(0, 245, 255, 0.14),
        rgba(255, 61, 242, 0.16)
      ),
      rgba(0, 0, 0, 0.24);
    border: 1px solid rgba(255, 255, 255, 0.16);
    clip-path: polygon(
      0 1.2rem,
      1.2rem 0,
      100% 0,
      100% calc(100% - 1.2rem),
      calc(100% - 1.2rem) 100%,
      0 100%
    );
    box-shadow: 0 14px 0 rgba(255, 61, 242, 0.18),
      0 28px 42px rgba(0, 0, 0, 0.22);
  }

  li::before {
    content: "";
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 2.4rem;
    height: 2.4rem;
    background: linear-gradient(135deg, var(--acid), var(--cyan));
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    opacity: 0.85;
  }

  .name {
    max-width: calc(100% - 3rem);
    font-family: "Orbitron", sans-serif;
    font-size: 1.1em;
    color: var(--acid);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .description {
    color: var(--muted-text);
    font-size: 0.9em;
  }

  .url {
    margin-top: auto;
    align-self: flex-start;
    font-size: 0.78em;
    word-break: break-word;
  }
`

const Projects = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const projectList = shuffle(projectsData)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={data.site.siteMetadata.title} />
      <h1>Projects</h1>
      <StyledList>
        {projectList.map(project => {
          return (
            <li key={project.url}>
              <span className="name">{project.name}</span>
              <span className="description">{project.description}</span>
              <a href={project.url} className="url">
                {project.url}
              </a>
            </li>
          )
        })}
      </StyledList>
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
