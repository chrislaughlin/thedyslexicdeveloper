import React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"

const chromaDrift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
    filter: hue-rotate(0deg);
  }
  50% {
    background-position: 100% 50%;
    filter: hue-rotate(32deg);
  }
`

const orbit = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(12deg);
  }
`

const titleLinkStyles = `
  border: 0;
  box-shadow: none;
  color: inherit;
  text-decoration: none;
`

const StyledNonIndexTitle = styled.h3`
  margin: 0 0 2rem;
  font-size: clamp(1rem, 2.5vw, 1.35rem);
  letter-spacing: 0.22em;
  text-align: center;
  color: var(--acid);
  text-shadow: 0.1em 0.1em 0 var(--pink), -0.06em -0.06em 0 var(--cyan);

  a {
    ${titleLinkStyles}
  }
`

const TitleWrap = styled.div`
  position: relative;
  margin-bottom: 3rem;
  perspective: 700px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: clamp(3rem, 12vw, 8rem);
    height: clamp(3rem, 12vw, 8rem);
    background: linear-gradient(
      135deg,
      var(--cyan),
      var(--violet),
      var(--pink)
    );
    clip-path: polygon(50% 0, 100% 35%, 78% 100%, 14% 82%, 0 24%);
    opacity: 0.72;
    filter: drop-shadow(0 0 22px rgba(0, 245, 255, 0.55));
    animation: ${orbit} 7s ease-in-out infinite;
    z-index: -1;
  }

  &::before {
    left: -1rem;
  }

  &::after {
    right: -1rem;
    animation-delay: -3.2s;
    background: linear-gradient(
      135deg,
      var(--acid),
      var(--orange),
      var(--pink)
    );
  }
`

const RetroTitle = styled(motion.h1)`
  position: relative;
  margin: 0;
  text-align: center;
  font-size: clamp(2.6rem, 9vw, 6.4rem);
  line-height: 0.95;
  letter-spacing: 0.04em;
  transform: rotateX(12deg) rotateY(-5deg);
  transform-style: preserve-3d;

  a {
    ${titleLinkStyles}
    display: inline-block;
    background: linear-gradient(
      90deg,
      var(--acid),
      var(--cyan),
      var(--pink),
      var(--orange),
      var(--acid)
    );
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${chromaDrift} 12s linear infinite;
    text-shadow: 0.08em 0.08em 0 rgba(255, 61, 242, 0.8),
      -0.05em -0.04em 0 rgba(0, 245, 255, 0.75),
      0 0 32px rgba(216, 255, 0, 0.28);
  }
`

const variants = {
  hidden: { opacity: 0, y: -40, rotateX: -20 },
  visible: { opacity: 1, y: 0, rotateX: 0 },
}

const Title = ({ isIndexPage, text }) => {
  if (isIndexPage) {
    return (
      <TitleWrap>
        <RetroTitle
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1.1 }}
        >
          <Link to={`/`}>{text}</Link>
        </RetroTitle>
      </TitleWrap>
    )
  }

  return (
    <StyledNonIndexTitle>
      <Link to={`/`}>{text}</Link>
    </StyledNonIndexTitle>
  )
}

export default Title
