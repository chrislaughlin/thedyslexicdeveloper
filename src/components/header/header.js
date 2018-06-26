import React from 'react';
import styled from 'styled-components';

import banner from './banner.jpg';
import Link from '../link/link';

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
                to={'/'}
            >
                The Dyslexic Developer
            </Link>
        </StyledHeader>
    );
};

export default Header;