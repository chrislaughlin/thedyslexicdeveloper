import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import banner from './banner.jpg';

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BannerImage = styled.img`
  height: 100px;
`;

const Header = () => {
    return (
        <StyledHeader>
            <Link
                to={'/'}
            >
                <BannerImage
                    src={banner}
                    alt="The Dyslexic Developer"
                />
            </Link>
            <Link
                style={{
                    boxShadow: 'none',
                    textDecoration: 'none',
                    color: 'inherit',
                }}
                to={'/'}
            >
                <span>The</span> <span>Dyslexic</span> <span>Developer</span>
            </Link>
        </StyledHeader>
    );
};

export default Header;