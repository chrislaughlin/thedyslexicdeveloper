import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components'

import Bio from '../components/bio/Bio';

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
                {posts.map(({ node }) => {
                    const title = get(node, 'frontmatter.title') || node.fields.slug;
                    return (
                        <div key={node.fields.slug}>
                            <h3>
                                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                                    {title}
                                </Link>
                            </h3>
                            <small>{node.frontmatter.date}</small>
                            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                        </div>
                    );
                })}
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
