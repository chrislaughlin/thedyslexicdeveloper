import React from 'react';
import get from 'lodash/get';

import PostSlug from '../components/postSlug/postSlug';

import Layout from '../components/layout/layout';

class BlogIndex extends React.Component {

    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        const posts = get(this, 'props.data.allMarkdownRemark.edges');

        return (
            <Layout
              siteTitle={siteTitle}
              isIndex
            >
                {posts.map(({ node }) => <PostSlug node={node}/>)}
            </Layout>
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
