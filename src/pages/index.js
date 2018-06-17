import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components'

import Bio from '../components/bio/Bio';
import PostSlug from '../components/postSlug/postSlug';

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class BlogIndex extends React.Component {

    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        const posts = get(this, 'props.data.allMarkdownRemark.edges');

        return (
            <Page>
                <Helmet title={siteTitle} />

                <Bio />
                <div>
                    {posts.map(({ node }) => <PostSlug node={node}/>)}
                </div>
            </Page>
        );
    }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
