import React, { Component } from 'react';
import styled from 'styled-components';

import {
    FaEye,
    FaCodeBranch,
    FaGithub,
    FaStar
} from 'react-icons/fa';

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 10px;
  grid-row-gap: 10px;
  margin-top: 50px;
`;

const ProjectCard = styled.div`
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1, p, div {
    word-break: break-word;
  }
  h1 {
    font-size: 16px;
    font-weight: 500;
  }
`;

const ProjectIcons = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  a {
    color: inherit;
  }
`;


class Projects extends Component {

    state = {
        projects: []
    };

    componentDidMount() {
        fetch('https://api.github.com/search/repositories?q=user:chrislaughlin')
            .then(response => response.json())
            .then(response => {
                this.setState({projects: response.items});
            });
    }

    render() {
        const {
            projects
        } = this.state;
        return (
            <ProjectList>
                {projects.map(project => {
                    return (
                        <ProjectCard>
                            <h1>{project.name}</h1>
                            <p>
                                {project.description}
                            </p>
                            <ProjectIcons>
                                <ProjectIcon>
                                    <a
                                        target="_blank"
                                        href={`${project.html_url}`}
                                    >
                                        <FaGithub/>
                                    </a>
                                </ProjectIcon>
                                <ProjectIcon>
                                    <a
                                        target="_blank"
                                        href={`${project.html_url}/fork?fragment=1`}
                                    >
                                        <FaCodeBranch/>
                                    </a>
                                </ProjectIcon>
                                <ProjectIcon>
                                    <FaStar/>
                                    {project.stargazers_count}
                                </ProjectIcon>
                                <ProjectIcon>
                                    <FaEye/>
                                    {project.watchers}
                                </ProjectIcon>
                            </ProjectIcons>
                        </ProjectCard>
                    )
                })}
            </ProjectList>
        )
    }
};

export default Projects;