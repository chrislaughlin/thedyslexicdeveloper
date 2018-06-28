import React from 'react';
import styled from 'styled-components';

import profilePic from './profile-pic.jpg';
import Social from '../social/social';

import Link from '../link/link';

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

class Bio extends React.Component {
    render() {
        return (
            <StyledBio>
                <ProfilePic
                    src={profilePic}
                    alt={`Chris Laughlin`}
                />
                <div>
                    JavaScript nerd making and breaking the web
                    <Social/>
                    <Link
                        to={'/about'}
                    >
                        About me ->
                    </Link>
                    <Link
                        to={'/projects'}
                    >
                        Projects ->
                    </Link>
                </div>
            </StyledBio>
        );
    }
}

export default Bio;
