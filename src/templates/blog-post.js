import React from 'react';
import get from 'lodash/get';
import styled from 'styled-components';

require("prismjs/themes/prism-okaidia.css");

import Layout from '../components/layout/layout';

import h1 from '../styles/h1';

const Title = styled.span`
  ${h1}
`;

const PostDateTime = styled.span`
  font-size: 12px;
  font-style: italic;
  padding-left: 10px;
`;

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = get(this.props, 'data.site.siteMetadata.title');

        return (
            <Layout siteTitle={siteTitle}>
                <Title>{post.frontmatter.title}</Title>
                <PostDateTime>
                    {post.frontmatter.date}
                </PostDateTime>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Layout>
        );
    }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
