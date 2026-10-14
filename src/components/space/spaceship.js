import React, { useEffect, useRef } from "react"
import styled, { keyframes } from "styled-components"

const enginePulse = keyframes`
  from { opacity: .65; }
  to { opacity: 1; }
`

const FlightLayer = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  perspective: 800px;

  .saturn-ship {
    position: absolute;
    left: 0;
    top: 0;
    width: clamp(100px, 12vw, 170px);
    opacity: 0.58;
    transform: translate3d(78vw, 28vh, 0) translate(-50%, -50%);
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
    overflow: visible;
  }
  .engine-glow {
    animation: ${enginePulse} 1.8s ease-in-out infinite alternate;
  }
  &[data-paused="true"] .engine-glow {
    animation-play-state: paused;
  }

  @media (prefers-reduced-motion: reduce) {
    .engine-glow {
      animation: none;
    }
  }
`

// A rear three-quarter silhouette: faceted hull, swept wings and three engines.
const Ship = () => (
  <svg viewBox="0 0 240 150" fill="none" aria-hidden="true" focusable="false">
    <defs>
      <radialGradient id="saturn-engine">
        <stop offset="0" stopColor="#fffdfd" />
        <stop offset=".45" stopColor="#ffe3f1" />
        <stop offset=".75" stopColor="#f6a7d3" />
        <stop offset="1" stopColor="#b16b9a" />
      </radialGradient>
      <radialGradient id="saturn-engine-halo">
        <stop stopColor="#ffbee4" stopOpacity=".7" />
        <stop offset="1" stopColor="#ff8dca" stopOpacity="0" />
      </radialGradient>
    </defs>
    <path d="M111 91L74 91 38 103 4 106 30 98 67 72 103 65Z" fill="#91b9bb" />
    <path d="M4 106L74 91 111 91 104 101 43 108Z" fill="#527e87" />
    <path d="M134 70L172 68 198 87 236 99 198 98 143 96Z" fill="#a5c7c7" />
    <path d="M143 96L198 98 236 99 198 104 146 106Z" fill="#527e87" />
    <path d="M114 72L119 24 129 14 135 69Z" fill="#729fa3" />
    <path d="M129 14L135 69 124 76 123 29Z" fill="#b5d2ce" />
    <path d="M94 70L116 51 140 56 165 85 137 114 99 103Z" fill="#86adae" />
    <path d="M116 51L124 76 99 103 94 70Z" fill="#bdd4ce" />
    <path d="M124 76L140 56 165 85 137 114Z" fill="#4d7783" />
    <path d="M103 64L113 54 117 59 110 69Z" fill="#b7d7e1" />
    <path d="M103 64L110 61 114 64 110 69Z" fill="#758eae" />
    <g stroke="#406570" strokeWidth="1.5" strokeLinejoin="bevel">
      <path
        d="M68 88L84 73 106 80 115 98 101 116 76 110 64 99Z"
        fill="#9ebebb"
      />
      <path
        d="M109 89L124 76 144 83 152 104 136 120 116 112 105 101Z"
        fill="#adc8c2"
      />
      <path
        d="M152 89L171 81 190 92 190 108 173 121 153 111 145 100Z"
        fill="#8caaa9"
      />
    </g>
    <g fill="#42636e">
      <path d="M67 98L77 83 99 87 108 99 98 111 77 106Z" />
      <path d="M110 100L120 86 138 89 145 103 135 114 118 108Z" />
      <path d="M150 101L160 89 178 94 184 106 172 116 157 108Z" />
    </g>
    <g className="engine-glow" fill="url(#saturn-engine-halo)">
      <ellipse cx="87" cy="99" rx="27" ry="23" />
      <ellipse cx="128" cy="101" rx="26" ry="23" />
      <ellipse cx="167" cy="103" rx="26" ry="23" />
    </g>
    <g fill="url(#saturn-engine)">
      <ellipse cx="80" cy="92" rx="7" ry="6" />
      <ellipse cx="96" cy="95" rx="7" ry="6" />
      <ellipse cx="86" cy="104" rx="7" ry="6" />
      <ellipse cx="121" cy="94" rx="6.5" ry="6" />
      <ellipse cx="135" cy="98" rx="6.5" ry="6" />
      <ellipse cx="126" cy="108" rx="6.5" ry="6" />
      <ellipse cx="160" cy="97" rx="6.5" ry="6" />
      <ellipse cx="175" cy="101" rx="6.5" ry="6" />
      <ellipse cx="166" cy="110" rx="6.5" ry="6" />
    </g>
    <g stroke="#d2e4dd" strokeWidth="1" opacity=".6">
      <path d="M38 103L78 84 M170 78L198 94 M119 31L116 61 M97 72L105 76 M141 68L145 74" />
    </g>
    <g fill="#365f70" opacity=".65">
      <path d="M54 96h5v2h-5z M66 89h4v2h-4z M183 91h5v2h-5z M192 95h4v2h-4z M111 70h3v3h-3z M134 72h3v2h-3z" />
    </g>
  </svg>
)

export default function Spaceship() {
  const layer = useRef(null)
  const ship = useRef(null)

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frame
    let lastTime = null
    let elapsed = 0

    const fly = time => {
      if (lastTime !== null) elapsed += time - lastTime
      lastTime = time
      // Periodic curves join seamlessly and keep the route responsive on resize.
      const phase = (elapsed / 52000) * Math.PI * 2 + 0.8
      const x = 50 + 40 * Math.sin(phase)
      const y = 50 + 31 * Math.sin(phase * 2 - 2.4)
      const bank = 18 * Math.cos(phase * 2 - 2.4)
      const yaw = 24 * Math.cos(phase)
      const scale = 0.85 + 0.15 * Math.sin(phase - 0.5)
      ship.current.style.transform = `translate3d(${x}vw, ${y}vh, 0) translate(-50%, -50%) rotate(${bank}deg) rotateY(${yaw}deg) scale(${scale})`
      frame = window.requestAnimationFrame(fly)
    }

    const syncPlayback = () => {
      window.cancelAnimationFrame(frame)
      lastTime = null
      const paused = document.hidden || preference.matches
      layer.current.dataset.paused = String(paused)
      if (!paused) frame = window.requestAnimationFrame(fly)
    }

    syncPlayback()
    document.addEventListener("visibilitychange", syncPlayback)
    preference.addListener(syncPlayback)
    return () => {
      window.cancelAnimationFrame(frame)
      document.removeEventListener("visibilitychange", syncPlayback)
      preference.removeListener(syncPlayback)
    }
  }, [])

  return (
    <FlightLayer ref={layer} aria-hidden="true">
      <div ref={ship} className="saturn-ship">
        <Ship />
      </div>
    </FlightLayer>
  )
}
