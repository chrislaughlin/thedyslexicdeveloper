import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

const SpaceTheme = createGlobalStyle`
  body {
    --text-color: #f0f5ff;
    --bg-color: #080d1b;
    background-color: var(--bg-color);
    background-image:
      linear-gradient(rgba(123,166,217,.045) 1px, transparent 1px),
      linear-gradient(90deg, rgba(123,166,217,.045) 1px, transparent 1px),
      radial-gradient(ellipse at 82% 18%, rgba(28,103,177,.28), transparent 52%),
      radial-gradient(ellipse at 9% 68%, rgba(174,27,107,.18), transparent 53%),
      radial-gradient(ellipse at 45% 110%, rgba(53,48,135,.2), transparent 60%),
      linear-gradient(135deg, #080d1b, #101b30 58%, #110e22);
    background-size: 64px 64px, 64px 64px, auto, auto, auto, auto;
    background-position: center;
    color: var(--text-color);
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    text-shadow: none;
    isolation: isolate;
  }
  a { text-shadow: none; text-decoration: none; box-shadow: none; }
  ::selection { background: #ff66b7; color: #080d1b; }
`
const BackgroundArtifacts = styled.svg`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`
export const SpacePage = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 30px 52px 0;
  @media (max-width: 700px) {
    padding: 22px 22px 0;
  }
`
export const SpaceHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-bottom: 27px;
  border-bottom: 1px solid #7d9bc32e;
  @media (max-width: 700px) {
    align-items: flex-start;
    gap: 16px;
  }
`
export const SpaceNavLink = styled(Link)`
  color: #f0f5ff;
  font: 11px "Courier New", monospace;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  white-space: nowrap;
  &:hover {
    color: #ff66b7;
  }
`
const AccessibleFocus = createGlobalStyle`
  a:focus-visible { outline: 2px solid #68c7ff; outline-offset: 5px; }
  @media (prefers-reduced-motion: reduce) { a { transition: none !important; } }
`

export default function SpaceBackground() {
  return (
    <>
      <SpaceTheme />
      <AccessibleFocus />
      <BackgroundArtifacts
        viewBox="0 0 1440 1000"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="#70bbec" strokeWidth="1" opacity=".12">
          <ellipse
            cx="1150"
            cy="360"
            rx="465"
            ry="275"
            transform="rotate(-28 1150 360)"
          />
          <ellipse
            cx="1150"
            cy="360"
            rx="486"
            ry="292"
            transform="rotate(-28 1150 360)"
            strokeDasharray="3 17"
          />
          <path d="M0 730H170L310 870H535 M0 742H165L306 883H436 M1250 70H1360V180 M42 176H66M54 164V188 M1340 680H1364M1352 668V692 M860 78H885M873 66V90" />
        </g>
        <g fill="#b7dfff" opacity=".55">
          <circle cx="90" cy="275" r="1.3" />
          <circle cx="423" cy="126" r="1" />
          <circle cx="625" cy="363" r="1.4" />
          <circle cx="1280" cy="490" r="1" />
          <circle cx="908" cy="825" r="1.2" />
          <circle cx="1365" cy="265" r="1.2" />
        </g>
        <g stroke="#ff65b4" opacity=".25">
          <path d="M120 930H205 M1230 210H1270 M1330 780l-38 38 M1338 788l-38 38" />
        </g>
      </BackgroundArtifacts>
    </>
  )
}
