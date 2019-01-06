import React from 'react';
import get from 'lodash/get';
import Link from 'gatsby-link';
import styled from 'styled-components';

import h1 from '../../styles/h1';

const Title = styled(Link)`
    ${h1}
`;

const Excerpt = styled.p`
    font-size: 22px;
`;

const SlugDate = styled.span`
  font-size: 14px;
  font-style: italic;
`;

const PostSlug = ({node}) => {
    const title = get(node, 'frontmatter.title') || node.fields.slug;
    return (
        <div key={node.fields.slug}>
            <Title style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
            </Title>
            <SlugDate> - {node.frontmatter.date}</SlugDate>
            <Excerpt dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
    );
};

export default PostSlug;
