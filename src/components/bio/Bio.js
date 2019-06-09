import React, { Fragment } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import profilePic from './profile-pic.jpg';

const ProfilePic = styled.img`
    height: 100px;
    border-radius: 50px;
`;

const StyledBio = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px;
  border-radius: 15px;
  max-width: 400px;
  > div {
    margin-left: 5px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
  }
`;

const SiteTitle = styled(Link).attrs({
    to: '/'
})`
  font-size: 22px;
  text-transform: uppercase;
  color: #F9DB4E;  
`;

const SocialLink = styled.span`
    padding-left: 20px;
    letter-spacing: 3px;
    text-transform: uppercase;
`;

const Bio = ({
    isIndex
}) => {
    return (
        <StyledBio>
            {
                isIndex &&
                <Link to="/">
                    <ProfilePic
                        src={profilePic}
                        alt={`Chris Laughlin`}
                    />
                </Link>
            }
            <div>
                <SiteTitle>
                  The dyslexic developer
                </SiteTitle>
                {
                    isIndex &&
                      <Fragment>
                          <SocialLink>
                              <a
                                  href="https://twitter.com/chrislaughlin"
                                  target="_blank"
                              >
                                  Twitter
                              </a>
                          </SocialLink>
                          <SocialLink>
                              <a
                                  href="https://github.com/chrislaughlin"
                                  target="_blank"
                              >
                                  Github
                              </a>
                          </SocialLink>
                          <SocialLink>
                              <Link to="/projects">
                                  PROJECTS
                              </Link>
                          </SocialLink>
                      </Fragment>
                }
            </div>
        </StyledBio>
    );
};

export default Bio;
