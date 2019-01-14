import React, { Component } from 'react';
import styled from 'styled-components';
import get from 'lodash/get';

import {
    FaEye,
    FaCodeBranch,
    FaStar
} from 'react-icons/fa';

import Layout from '../components/layout/layout';
import Spinner from '../components/loadingSpinner/spinner';

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 10px;
  grid-row-gap: 10px;
  margin-top: 50px;
`;

const Card = styled.div`
    display: block;
    box-sizing: border-box;
    border: 1px solid #ccc;
    color: #555;
    text-decoration: none;
    font-size: 13px;
    flex: 1;
    min-width: 250px;
    margin: 10px 20px 20px;
    padding: 10px 20px 20px;
`;

const CardHeader = styled.div``;
const CardBody = styled.div``;
const CardFooter = styled.div`
    display: flex;
    margin-top: 20px;
`;
const ProjectIcon = styled.div`
    margin-right: 20px;
    svg {
      margin-right: 3px;
    }
    i {
      font-size: 16px;
    }
`;

class Projects extends Component {

    state = {
        projects: [],
        isLoading: true
    };

    componentDidMount() {
        fetch('https://api.github.com/search/repositories?q=user:chrislaughlin')
            .then(response => response.json())
            .then(response => {
                this.setState({
                    projects: response.items,
                    isLoading: false
                });
            })
            .catch(() => {
               this.setState(({
                   isLoading: false
               }))
            });
    }

    render() {
        const {
            projects,
            isLoading
        } = this.state;

        const siteTitle = get(this, 'props.data.site.siteMetadata.title');

        return (
            <Layout siteTitle={siteTitle}>
                {
                    isLoading ?
                        <Spinner/> :
                        projects.length === 0 ?
                            <div>Unable to get projects</div> :
                            <ProjectList>
                                {projects.map((project, index) => {
                                    return (
                                        <Card
                                            key={index}
                                        >
                                            <CardHeader>
                                                <a
                                                    target="_blank"
                                                    href={`${project.html_url}`}
                                                >
                                                    <h2>{project.name}</h2>
                                                </a>
                                            </CardHeader>
                                            <CardBody>
                                                {project.description}
                                            </CardBody>
                                            <CardFooter>
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
                                            </CardFooter>
                                        </Card>
                                    )
                                })}
                            </ProjectList>
                }
            </Layout>
        )
    }
};

export default Projects;
