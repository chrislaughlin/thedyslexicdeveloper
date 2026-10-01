import React, { useEffect, useRef, useState } from "react"
import styled, { keyframes } from "styled-components"
import letters from "./logo-paths.json"

const explode = keyframes`
  0%, 100% { transform: translate(var(--x), var(--y)) rotate(var(--rotation)); }
  14%, 64% { transform: translate(0, 0) rotate(0); }
  82% { transform: translate(var(--x), var(--y)) rotate(var(--rotation)); }
`
const schematic = keyframes`
  0%, 100% { opacity: .8; }
  14%, 64% { opacity: .12; }
  82% { opacity: .8; }
`
const Stage = styled.div`
  position: relative;
  width: min(100%, 560px);
  margin: 0 auto;
  aspect-ratio: 1.08;
  svg {
    display: block;
    width: 100%;
    height: 100%;
    overflow: visible;
  }
  &[data-compact="true"] .guides,
  &[data-compact="true"] .schematic,
  &[data-compact="true"] .annotations {
    display: none;
  }
  .letter {
    transform-box: fill-box;
    transform-origin: center;
    animation: ${explode} 8s cubic-bezier(0.65, 0, 0.25, 1) infinite;
    animation-delay: calc(-1.5s + var(--delay));
    animation-play-state: paused;
  }
  .schematic {
    animation: ${schematic} 8s ease-in-out infinite;
    animation-play-state: paused;
  }
  &[data-running="true"] .letter,
  &[data-running="true"] .schematic {
    animation-play-state: running;
  }
  @media (prefers-reduced-motion: reduce) {
    .letter,
    .schematic {
      animation: none;
      transform: none;
    }
    .schematic {
      opacity: 0.2;
    }
  }
`
const NeonLogo = ({ compact = false }) => {
  const stage = useRef(null)
  const [visible, setVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(true)
  useEffect(() => {
    const onVisibility = () => setActiveTab(!document.hidden)
    onVisibility()
    document.addEventListener("visibilitychange", onVisibility)
    const observer =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.15 }
          )
        : null
    if (observer) observer.observe(stage.current)
    else setVisible(true)
    return () => {
      if (observer) observer.disconnect()
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])
  return (
    <Stage
      ref={stage}
      data-running={visible && activeTab}
      data-compact={compact}
    >
      <svg
        viewBox="0 0 600 556"
        role="img"
        aria-label="The Dyslexic Developer — pink neon script logo"
      >
        <defs>
          <filter
            id="neon-glow"
            x="-40%"
            y="-40%"
            width="180%"
            height="180%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="4.5" />
          </filter>
        </defs>
        <g
          className="guides"
          fill="none"
          stroke="#68c7ff"
          strokeWidth=".8"
          opacity=".24"
          aria-hidden="true"
        >
          <circle cx="300" cy="270" r="207" />
          <circle cx="300" cy="270" r="182" strokeDasharray="2 9" />
          <path d="M300 30V475 M45 270H555 M75 80H94V61 M506 61V80H525 M75 452H94V471 M506 471V452H525" />
        </g>
        <g
          className="schematic"
          fill="none"
          stroke="#68c7ff"
          strokeWidth=".8"
          aria-hidden="true"
        >
          <path d="M76 136H524 M76 130V142 M524 130V142 M56 151V421 M50 151H62 M50 421H62 M106 438H494 M106 432V444 M494 432V444" />
          {letters.slice(3).map((letter, i) => (
            <path
              key={i}
              d={`M${110 + i * 22} ${i < 8 ? 154 : 332}v${i % 2 ? -24 : 24}`}
              strokeDasharray="2 4"
            />
          ))}
        </g>
        {letters.map((letter, i) => (
          <g
            className="letter"
            key={i}
            style={{
              "--x": `${letter.x}px`,
              "--y": `${letter.y}px`,
              "--rotation": `${letter.rotation}deg`,
              "--delay": `${letter.delay}s`,
            }}
          >
            <path
              d={letter.path}
              fill="#ff329e"
              filter="url(#neon-glow)"
              opacity=".95"
            />
            <path d={letter.path} fill="#ff73be" />
            <path
              d={letter.path}
              fill="none"
              stroke="#fff4fb"
              strokeWidth=".6"
            />
          </g>
        ))}
        <g
          className="annotations"
          fill="#8aa9c9"
          fontFamily="monospace"
          fontSize="9"
          letterSpacing="2"
          aria-hidden="true"
        >
          <text x="25" y="30">
            TDD / NEON SYSTEM
          </text>
          <text x="455" y="30">
            FIG. 01
          </text>
          <text x="490" y="462">
            + X
          </text>
        </g>
      </svg>
    </Stage>
  )
}
export default NeonLogo
