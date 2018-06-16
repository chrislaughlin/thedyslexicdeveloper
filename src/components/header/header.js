import React from 'react';
import Link from 'gatsby-link';

import banner from './banner.jpg';

const Header = () => {
    return (
        <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
            <img
                src={banner}
                alt="The Dyslexic Developer"
                to={'/'}
            />
        </Link>
    );
};

export default Header;