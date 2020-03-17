import React from 'react';
import { Link } from "gatsby"
import styled from 'styled-components';
import { motion } from "framer-motion"

const StyledNonIndexTitle = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0px;
`;

const variants = {
  hidden: { opacity: 0, y: '-100%' },
  visible: { opacity: 1, y: 0 },
}

const Title = ({isIndexPage, text}) => {

  if (isIndexPage) {
    return (
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1 }}
        style={{
          fontSize: '2.5rem',
          lineHeight: '3.5rem',
          marginBottom: '2.625rem',
          marginTop: '0px'
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {text}
        </Link>
      </motion.h1>
    )
  }

  return (
    <StyledNonIndexTitle>
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {text}
      </Link>
    </StyledNonIndexTitle>
  )
};

export default Title
