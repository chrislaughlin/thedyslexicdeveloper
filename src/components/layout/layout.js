import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components'

import '../../styles/index.css';
import '../../styles/post.css';
import Bio from "../bio/Bio";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .content { 
      width: 90%;
    }
`;

const Layout = ({siteTitle, children}) => {

    return (
        <Page>
            <Helmet title={siteTitle} />

            <Bio />
            <div className="content">
                {children}
            </div>
        </Page>
    );
};


export default Layout;

