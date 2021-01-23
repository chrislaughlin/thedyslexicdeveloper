import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled, { css } from 'styled-components';

import projectsData from '../repos.json';
import shuffle from '../utils/shuffle';

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    flex-direction: column;
    border: 1px solid #F2643D;
    padding: 20px 10px;
    border-radius: 10px;
    margin-bottom: 20px;

    .name {
      font-size: 1.5em;
      color: #EB0A44;
    }

    .description {
      font-size: 0.8em;
    }

    .url {
      font-size: 0.6em;
      box-shadow: none;
    }
  }
`;

const Projects = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const projectList = shuffle(projectsData)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={data.site.siteMetadata.title} />
      <h1>
        Projects
      </h1>
      <StyledList>
        {
          projectList.map(project => {
            return (
              <li>
                <span className="name">{project.name}</span>
                <span className="description">{project.description}</span>
                <a href={project.url} className="url">{project.url}</a>
              </li>
            )
          })
        }
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
