'use client';

import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// 1. ChatGPT Brand Icon
export function ChatGptIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <title>ChatGPT</title>
      <path
        fillRule="evenodd"
        d="M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523c2.854 0 4.662 2.212 4.662 4.566c0 .167 0 .357-.024.547l-4.71-2.759a.8.8 0 0 0-.856 0zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473l1.95-1.118a.43.43 0 0 1 .476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948c0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142a.45.45 0 0 1-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472c1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.48 4.48 0 0 1 4.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449l-1.95 1.118a.43.43 0 0 1-.476 0m-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519c0-.19.024-.38.047-.57l4.686 2.71a.79.79 0 0 0 .856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523m5.899 2.83a5.95 5.95 0 0 0 5.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448c.119-.5.19-.999.19-1.498c0-3.401-2.759-5.947-5.946-5.947a5.7 5.7 0 0 0-1.88.31A5.96 5.96 0 0 0 10.205 0a5.95 5.95 0 0 0-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448c-.119.5-.19 1-.19 1.499c0 3.401 2.759 5.946 5.946 5.946c.642 0 1.26-.095 1.88-.309a5.96 5.96 0 0 0 4.162 1.713z"
      />
    </svg>
  );
}

// 2. Claude AI Brand Icon
export function ClaudeIcon({ className = 'w-5 h-5', size, color = '#d97757' }: IconProps & { color?: string }) {
  return (
    <svg
      viewBox="0 0 256 257"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <title>Claude AI</title>
      <path
        fill={color}
        d="m50.228 170.321l50.357-28.257l.843-2.463l-.843-1.361h-2.462l-8.426-.518l-28.775-.778l-24.952-1.037l-24.175-1.296l-6.092-1.297L0 125.796l.583-3.759l5.12-3.434l7.324.648l16.202 1.101l24.304 1.685l17.629 1.037l26.118 2.722h4.148l.583-1.685l-1.426-1.037l-1.101-1.037l-25.147-17.045l-27.22-18.017l-14.258-10.37l-7.713-5.25l-3.888-4.925l-1.685-10.758l7-7.713l9.397.649l2.398.648l9.527 7.323l20.35 15.75L94.817 91.9l3.889 3.24l1.555-1.102l.195-.777l-1.75-2.917l-14.453-26.118l-15.425-26.572l-6.87-11.018l-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0l10.63 1.426l4.472 3.888l6.61 15.101l10.694 23.786l16.591 32.34l4.861 9.592l2.592 8.879l.973 2.722h1.685v-1.556l1.36-18.211l2.528-22.36l2.463-28.776l.843-8.1l4.018-9.722l7.971-5.25l6.222 2.981l5.12 7.324l-.713 4.73l-3.046 19.768l-5.962 30.98l-3.889 20.739h2.268l2.593-2.593l10.499-13.934l17.628-22.036l7.778-8.749l9.073-9.657l5.833-4.601h11.018l8.1 12.055l-3.628 12.443l-11.342 14.388l-9.398 12.184l-13.48 18.147l-8.426 14.518l.778 1.166l2.01-.194l30.46-6.481l16.462-2.982l19.637-3.37l8.88 4.148l.971 4.213l-3.5 8.62l-20.998 5.184l-24.628 4.926l-36.682 8.685l-.454.324l.519.648l16.526 1.555l7.065.389h17.304l32.21 2.398l8.426 5.574l5.055 6.805l-.843 5.184l-12.962 6.611l-17.498-4.148l-40.83-9.721l-14-3.5h-1.944v1.167l11.666 11.406l21.387 19.314l26.767 24.887l1.36 6.157l-3.434 4.86l-3.63-.518l-23.526-17.693l-9.073-7.972l-20.545-17.304h-1.36v1.814l4.73 6.935l25.017 37.59l1.296 11.536l-1.814 3.76l-6.481 2.268l-7.13-1.297l-14.647-20.544l-15.1-23.138l-12.185-20.739l-1.49.843l-7.194 77.448l-3.37 3.953l-7.778 2.981l-6.48-4.925l-3.436-7.972l3.435-15.749l4.148-20.544l3.37-16.333l3.046-20.285l1.815-6.74l-.13-.454l-1.49.194l-15.295 20.999l-23.267 31.433l-18.406 19.702l-4.407 1.75l-7.648-3.954l.713-7.064l4.277-6.286l25.47-32.405l15.36-20.092l9.917-11.6l-.065-1.686h-.583L44.07 198.125l-12.055 1.555l-5.185-4.86l.648-7.972l2.463-2.593l20.35-13.999z"
      />
    </svg>
  );
}

// 3. Google Gemini Brand Icon
export function GeminiIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <title>Google Gemini</title>
      <defs>
        <radialGradient
          id="geminiGrad"
          cx="-80.789"
          cy="2.985"
          r="32"
          gradientTransform="rotate(18.683 -57.456 4644.03)scale(17.03 136.421)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".067" stopColor="#9168c0" />
          <stop offset=".343" stopColor="#5684d1" />
          <stop offset=".672" stopColor="#1ba1e3" />
        </radialGradient>
      </defs>
      <path
        fill="url(#geminiGrad)"
        d="M512 256.5c-137.5 8.4-247.1 118-255.5 255.5h-1C247.1 374.5 137.5 264.9 0 256.5v-1c137.5-8.4 247.1-118 255.5-255.5h1c8.4 137.5 118 247.1 255.5 255.5z"
      />
    </svg>
  );
}

// 4. Perplexity AI Brand Icon
export function PerplexityIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <title>Perplexity AI</title>
      <path d="M19.28 8.04h-1.89V3.29c0-.1-.06-.19-.15-.23a.25.25 0 0 0-.27.05l-4.71 4.58V2.25c0-.14-.11-.25-.25-.25s-.25.11-.25.25v5.44L7.04 3.11a.25.25 0 0 0-.27-.05c-.09.04-.15.13-.15.23v4.74H4.73c-.14 0-.25.11-.25.25v7.41c0 .14.11.25.25.25h1.89v4.76c0 .1.06.19.15.23s.2.02.27-.06l4.71-4.74v5.61c0 .14.11.25.25.25s.25-.11.25-.25v-5.61l4.71 4.74s.11.07.18.07c.03 0 .06 0 .1-.02c.09-.04.15-.13.15-.23v-4.76h1.89c.14 0 .25-.11.25-.25V8.27c0-.14-.11-.25-.25-.25Zm-2.4 0h-4.27l4.27-4.15zM7.12 3.88l4.27 4.15H7.12zM4.98 15.44V8.53h6.43l-4.72 4.79s-.07.11-.07.18v1.94zm6.78-.01L7.13 20.1v-6.49l4.63-4.71v6.54Zm5.14 4.67l-4.63-4.67V8.89l4.63 4.71v6.49Zm2.14-4.65H17.4v-1.94c0-.07-.03-.13-.07-.18l-4.72-4.79h6.43z" />
    </svg>
  );
}

// 5. Canva Brand Icon
export function CanvaIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <title>Canva</title>
      <defs>
        <radialGradient
          id="canvaGrad1"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(-49.416 84.778 18.66)scale(61.8733)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6420ff" />
          <stop offset="1" stopColor="#6420ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="canvaGrad2"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(54.703 1.799 25.019)scale(69.7735)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00c4cc" />
          <stop offset="1" stopColor="#00c4cc" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="canvaGrad3"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(-45.195 92.905 16.89)scale(61.1242 28.1118)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6420ff" />
          <stop offset="1" stopColor="#6420ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="canvaGrad4"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(66.52 8.14 30.33)scale(62.9836 105.512)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00c4cc" stopOpacity=".726" />
          <stop offset="0" stopColor="#00c4cc" />
          <stop offset="1" stopColor="#00c4cc" stopOpacity="0" />
        </radialGradient>
        <clipPath id="canvaClip">
          <path fill="#fff" d="M0 0h80v80H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#canvaClip)">
        <path fill="#7d2ae7" d="M40 80c22.091 0 40-17.909 40-40S62.091 0 40 0S0 17.909 0 40s17.909 40 40 40" />
        <path fill="url(#canvaGrad1)" d="M40 80c22.091 0 40-17.909 40-40S62.091 0 40 0S0 17.909 0 40s17.909 40 40 40" />
        <path fill="url(#canvaGrad2)" d="M40 80c22.091 0 40-17.909 40-40S62.091 0 40 0S0 17.909 0 40s17.909 40 40 40" />
        <path fill="url(#canvaGrad3)" d="M40 80c22.091 0 40-17.909 40-40S62.091 0 40 0S0 17.909 0 40s17.909 40 40 40" />
        <path fill="url(#canvaGrad4)" d="M40 80c22.091 0 40-17.909 40-40S62.091 0 40 0S0 17.909 0 40s17.909 40 40 40" />
        <path
          fill="#fff"
          d="M57.27 48.205c-.331 0-.622.279-.924.888c-3.414 6.922-9.31 11.82-16.133 11.82c-7.89 0-12.776-7.122-12.776-16.96c0-16.668 9.286-26.304 17.443-26.304c3.811 0 6.139 2.395 6.139 6.207c0 4.524-2.57 6.919-2.57 8.514c0 .716.445 1.15 1.328 1.15c3.55 0 7.715-4.078 7.715-9.84c0-5.585-4.862-9.691-13.018-9.691c-13.48 0-25.46 12.497-25.46 29.788c0 13.384 7.643 22.23 19.436 22.23c12.517 0 19.754-12.454 19.754-16.497c0-.895-.457-1.305-.935-1.305"
        />
      </g>
    </svg>
  );
}

// 6. bKash Mark Icon
export function BkashIcon({ className = 'w-6 h-6', size }: IconProps) {
  return (
    <svg
      viewBox="120 -5 130 125"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <title>bKash</title>
      <path fill="#D12053" d="M223.65 62.45l-53.03-8.31 7.03 31.6z" />
      <path fill="#E2136E" d="M223.65 62.45L183.69 6.93l-13.06 47.22z" />
      <path fill="#D12053" d="M169.39 53.51L127.52 0l54.83 6.55z" />
      <path fill="#9E1638" d="M150.32 31.15L127.07 9.24h6.12z" />
      <path fill="#D12053" d="M234.96 35.46l-9.84 26.69-15.95-22.06z" />
      <path fill="#E2136E" d="M183.84 84.14l38.61-15.51 1.62-4.93z" />
      <path fill="#9E1638" d="M152.96 113.41l16.54-58.02 8.39 37.75z" />
      <path fill="#E2136E" d="M236.5 35.67l-4.06 11.02 14.64-.24z" />
    </svg>
  );
}

// 6b. bKash Full Logo with Wordmark
export function BkashFullLogo({ className = 'h-6 w-auto', textColor = '#231F20' }: { className?: string; textColor?: string }) {
  return (
    <svg
      viewBox="-10 -15 270 140"
      className={className}
      aria-hidden="true"
    >
      <title>bKash Logo</title>
      <path fill="#D12053" d="M223.65 62.45l-53.03-8.31 7.03 31.6z" />
      <path fill="#E2136E" d="M223.65 62.45L183.69 6.93l-13.06 47.22z" />
      <path fill="#D12053" d="M169.39 53.51L127.52 0l54.83 6.55z" />
      <path fill="#9E1638" d="M150.32 31.15L127.07 9.24h6.12z" />
      <path fill="#D12053" d="M234.96 35.46l-9.84 26.69-15.95-22.06z" />
      <path fill="#E2136E" d="M183.84 84.14l38.61-15.51 1.62-4.93z" />
      <path fill="#9E1638" d="M152.96 113.41l16.54-58.02 8.39 37.75z" />
      <path fill="#E2136E" d="M236.5 35.67l-4.06 11.02 14.64-.24z" />
      <path fill="#E2136E" d="M0 40.09c.71.06 1.43.19 2.19.19s1.38-.13 2.19-.19v23.47c2.31-3.93 5.22-6.52 9.5-6.52 7.74 0 11.06 7.66 11.06 14.7 0 8.43-4.5 16.5-12.39 16.5a8.66 8.66 0 01-7.77-4.47c-1.32 1.16-2.49 2.55-3.74 3.81h-1zm4.28 34.52c0 6.84 2.9 11.61 7.67 11.61 6.19 0 8.18-8.32 8.18-14.22 0-6.85-2.26-12.24-7.62-12.3-6.26-.05-8.23 7.36-8.23 14.92z" />
      <g fill={textColor}>
        <path d="M45.13 55.27l-4.66 6c4.38 6.4 8.92 12.67 13.32 19.15l4.44 7v.35c-1.09-.07-2.08-.21-3-.21-.92 0-2.08.14-3.06.21-1.21-2.24-2.41-4.31-3.78-6.34l-12-17.75c-.27-.28-.92-.5-.92-.21v24.3c-.88-.07-1.65-.21-2.41-.21-.76 0-1.64.14-2.41.21V40.09c.77.06 1.6.21 2.41.21s1.53-.15 2.41-.21v21.52c0 .42.82.14 1.36-.42a37.1 37.1 0 002.92-3.42l13.49-17.7c.71.06 1.42.21 2.19.21s1.36-.15 2.14-.21zM81.42 82.4c0 2.48-.16 3.74 3.07 2.92v1.39a8.87 8.87 0 01-1.65.63c-2.85.57-5.21.06-5.65-3.67l-.49.55a10.17 10.17 0 01-8.12 4c-3.88 0-7.28-3.06-7.28-7.75 0-7.23 5-8.18 10.13-9.13 4.34-.82 5.82-1.2 5.82-4.25 0-4.7-2.3-7.42-6.41-7.42a6.85 6.85 0 00-6.52 4.37h-.6v-3.52a14.2 14.2 0 018.87-3.48c5.75 0 8.88 3.48 8.88 10.65zm-4.38-10.47l-1.93.44c-3.73.82-9.32 1.45-9.32 7.24 0 4 2 6 5.36 6a6.83 6.83 0 004.44-2.44c.4-.46 1.5-1.54 1.5-2zm14.15 9.63c1.3 2.49 3.72 4.72 6.3 4.72a5.67 5.67 0 005.38-5.78c0-8.56-12.95-3-12.95-14.08 0-6.08 4-9.37 8.93-9.37 2.18-.048 4.33.52 6.2 1.64a32.791 32.791 0 00-1.3 4.5h-.5c-.72-2.09-2.63-4.19-4.66-4.19-2.74 0-5 1.85-5 5.28 0 8.11 12.95 3.79 12.95 13.94 0 6.79-5.26 10-10.1 10a12.73 12.73 0 01-6.84-2 34.42 34.42 0 001.15-4.65zm22.73-41.47c.73.06 1.44.19 2.2.19.76 0 1.38-.13 2.2-.19v23.09c1.92-3.87 4.93-6.14 8.83-6.14 6.36 0 8.83 4.36 8.83 12.36v18.37c-.83-.07-1.47-.19-2.2-.19-.73 0-1.48.13-2.2.19V70.85c0-7-1.41-10.53-6.08-10.53-4.94 0-7.18 3.56-7.18 10.15v17.3c-.82-.07-1.47-.19-2.2-.19-.73 0-1.46.13-2.2.19z" />
      </g>
    </svg>
  );
}

// 7. Nagad Mark Icon
export function NagadIcon({ className = 'w-6 h-6', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 54 54"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <title>Nagad</title>
      <path
        fill="#ec1c24"
        d="M50.7 28.2c0 .7 0 1.3-.1 2-.2 2.9-1 5.6-2.1 8.1-.5 1-1 2-1.6 2.9C42.6 48 35 52.6 26.3 52.6c-3.7 0-7.2-.8-10.4-2.3C7.7 46.4 2 38 2 28.2c0-9.5 5.5-17.8 13.5-21.8-.6.8-1.2 1.7-1.7 2.6 0 .1-.1.1-.1.2-.3.3-.6.5-.9.8-.4.3-.7.7-1.1 1.1-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3l-.4.4c-.3.3-.5.6-.7.9-1 1.3-1.8 2.8-2.5 4.3-.1.2-.1.3-.2.5s-.1.4-.2.5c-.3.2-.3.3-.3.4l-.3.9c-.1.2-.1.4-.2.6 0 .1-.1.2-.1.3 0 .2-.1.4-.1.6-.1.5-.3 1.1-.3 1.7 0 .2 0 .3-.1.5v2.5c0 6.6 3 12.5 7.8 16.4 3.7 3 8.4 4.8 13.5 4.8 4.6 0 8.9-1.5 12.4-4 2.6-1.8 4.7-4.2 6.2-7 .2-.4.4-.7.6-1.1 1.2-2.6 1.9-5.4 2-8.4v-.7c0-.7 0-1.4-.1-2.1l.1.1c.3.3.6.6 1 .8.3-.5.6-1 1-1.4.2.9.3 1.9.4 2.8-.2.8-.1 1.5-.1 2.2"
      />
      <path
        fill="#f6921e"
        d="M48.3 25.8v.7c0 4.3-1.8 7.9-2 8.4-.2.4-.4.7-.6 1.1-1.5 2.8-3.7 5.2-6.2 7-3.5 2.5-7.8 4-12.4 4-5.1 0-9.8-1.8-13.5-4.8-4.8-3.9-7.8-9.8-7.8-16.4v-2.5c0-.2 0-.3.1-.5.1-.6.3-1.2.4-1.8 0-.2.1-.4.1-.6 0-.1.1-.2.1-.3.1-.2.1-.4.2-.6.1-.3.2-.5.3-.8 0-.1.1-.2.1-.3.1-.2.1-.4.2-.5.1-.2.1-.3.2-.5.7-1.6 1.5-3 2.5-4.3.2-.3.5-.6.7-.9.1-.1.2-.3.4-.4.1-.1.1-.2.2-.3.1-.1.2-.2.2-.3.3-.4.7-.7 1.1-1.1.3-.3.6-.6.9-.8 0 .1-.1.2-.1.2 0 .1-.1.2-.1.3-1.2 2.5-2 5.4-2.3 8.6-.1.8-.1 1.7-.1 2.6 0 11.1 6.5 20.1 14.6 20.1h.9c1.2 0 2.3-.2 3.4-.5 5.5-1.5 9.5-6.5 9.5-12.4v-.4c-.1-3.5-1.6-6.7-4-8.9 1.7 0 3.3.3 4.8.7 3 .8 5.7 2.2 8 4l.1.1c0 .7.1 1.4.1 2.1"
      />
      <path
        fill="#ec1c24"
        d="M42.5 12.6S25.1 9.3 17 24.4c0 0 1.4-10.4 13.8-15.2l-2.5-4.6S33.3.1 42 1.3z"
      />
      <path
        fill="#f6921e"
        d="M21 20.6s6.9-9.1 22.8-6.7l-.2-5.3s6.6-.2 12 4.4L49 23s-4.5-5.3-13.9-5.4c-3.9-.1-8.6.4-14.1 3"
      />
    </svg>
  );
}

// 7b. Nagad Full Logo with Wordmark
export function NagadFullLogo({ className = 'h-6 w-auto' }: { className?: string }) {
  return (
    <svg
      viewBox="-10 -5 140 55"
      className={className}
      aria-hidden="true"
    >
      <title>Nagad Logo</title>
      {/* Flame Icon on Left */}
      <g>
        <path
          fill="#ec1c24"
          d="M50.7 28.2c0 .7 0 1.3-.1 2-.2 2.9-1 5.6-2.1 8.1-.5 1-1 2-1.6 2.9C42.6 48 35 52.6 26.3 52.6c-3.7 0-7.2-.8-10.4-2.3C7.7 46.4 2 38 2 28.2c0-9.5 5.5-17.8 13.5-21.8-.6.8-1.2 1.7-1.7 2.6 0 .1-.1.1-.1.2-.3.3-.6.5-.9.8-.4.3-.7.7-1.1 1.1-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3l-.4.4c-.3.3-.5.6-.7.9-1 1.3-1.8 2.8-2.5 4.3-.1.2-.1.3-.2.5s-.1.4-.2.5c-.3.2-.3.3-.3.4l-.3.9c-.1.2-.1.4-.2.6 0 .1-.1.2-.1.3 0 .2-.1.4-.1.6-.1.5-.3 1.1-.3 1.7 0 .2 0 .3-.1.5v2.5c0 6.6 3 12.5 7.8 16.4 3.7 3 8.4 4.8 13.5 4.8 4.6 0 8.9-1.5 12.4-4 2.6-1.8 4.7-4.2 6.2-7 .2-.4.4-.7.6-1.1 1.2-2.6 1.9-5.4 2-8.4v-.7c0-.7 0-1.4-.1-2.1l.1.1c.3.3.6.6 1 .8.3-.5.6-1 1-1.4.2.9.3 1.9.4 2.8-.2.8-.1 1.5-.1 2.2"
        />
        <path
          fill="#f6921e"
          d="M48.3 25.8v.7c0 4.3-1.8 7.9-2 8.4-.2.4-.4.7-.6 1.1-1.5 2.8-3.7 5.2-6.2 7-3.5 2.5-7.8 4-12.4 4-5.1 0-9.8-1.8-13.5-4.8-4.8-3.9-7.8-9.8-7.8-16.4v-2.5c0-.2 0-.3.1-.5.1-.6.3-1.2.4-1.8 0-.2.1-.4.1-.6 0-.1.1-.2.1-.3.1-.2.1-.4.2-.6.1-.3.2-.5.3-.8 0-.1.1-.2.1-.3.1-.2.1-.4.2-.5.1-.2.1-.3.2-.5.7-1.6 1.5-3 2.5-4.3.2-.3.5-.6.7-.9.1-.1.2-.3.4-.4.1-.1.1-.2.2-.3.1-.1.2-.2.2-.3.3-.4.7-.7 1.1-1.1.3-.3.6-.6.9-.8 0 .1-.1.2-.1.2 0 .1-.1.2-.1.3-1.2 2.5-2 5.4-2.3 8.6-.1.8-.1 1.7-.1 2.6 0 11.1 6.5 20.1 14.6 20.1h.9c1.2 0 2.3-.2 3.4-.5 5.5-1.5 9.5-6.5 9.5-12.4v-.4c-.1-3.5-1.6-6.7-4-8.9 1.7 0 3.3.3 4.8.7 3 .8 5.7 2.2 8 4l.1.1c0 .7.1 1.4.1 2.1"
        />
        <path
          fill="#ec1c24"
          d="M42.5 12.6S25.1 9.3 17 24.4c0 0 1.4-10.4 13.8-15.2l-2.5-4.6S33.3.1 42 1.3z"
        />
        <path
          fill="#f6921e"
          d="M21 20.6s6.9-9.1 22.8-6.7l-.2-5.3s6.6-.2 12 4.4L49 23s-4.5-5.3-13.9-5.4c-3.9-.1-8.6.4-14.1 3"
        />
      </g>
      {/* 'নগদ' Bengali wordmark */}
      <path
        d="M83.8 17.6H63c-.4 0-.7.3-.7.7v1.6c0 .4.3.7.7.7h15.5v8.6c-.4-.6-.9-1.2-1.5-1.8-1.8-1.9-3.8-2.8-5.8-2.8-1.6 0-3 .8-4.1 2.3-.9 1.2-1.4 2.7-1.4 4 0 1.4.2 3.1 1.3 4.7 1.3 1.9 3.3 2.5 5.1 2.5 2.4 0 4.4-1.7 4.4-3.8 0-1.3-.6-2.3-1.8-2.9l-1.1-.6v1.7c-.1.5-1 1.2-1.9 1.2-.8 0-1.6-.3-2-.8-.3-.4-.5-.9-.4-1.4 0-.6.2-1.1.7-1.7.5-.6 1-.9 1.8-.9 2.1 0 3.8 1 5.2 3 1.1 1.7 1.7 3.4 1.7 5.2v4.3l3.1 1.9c.1.1.2.1.3.1.4 0 .7-.3.7-.7V20.6H84c.4 0 .7-.3.7-.7v-1.6c-.3-.4-.6-.7-.9-.7z"
        fill="#ec1c24"
      />
      <path
        d="M125.3 17.6H99c-.4 0-.7.3-.7.7v2.9c-2.5-2.7-4.8-4-6.9-4-2 0-3.6.5-5 1.5-1.4 1.1-2.1 2.4-2.1 3.9 0 4.6 5.2 4.6 6.4 3.9.2-.1.5-.3.9-.3 1 0 1.4.8 1.4 1.5 0 1.1-1.5 2-3.3 2-1 0-1.7-.3-2.1-.9l-.8-1.2-.6 1.4c-.1.3-.3.7-.3 1.2 0 1.1.5 2.1 1.5 2.9 1 .8 2.1 1.2 3.3 1.2 2 0 3.6-.7 4.7-2.1.9-1.1 1.3-2.5 1.3-4 0-.9-.3-1.7-1-2.7-.8-1.2-1.8-1.8-3-1.8-.4 0-.9.1-1.5.3-.2-.1-.5 0-.6 0-.2 0-.5-.1-.7-.4-.2-.2-.4-.5-.4-1 0-1.1 1.1-2.3 2.9-2.3h.1c1.2 0 2.4.6 3.6 1.8.9.9 1.7 1.8 2.2 2.8v16.4l3.1 1.8c.1.1.2.1.3.1.4 0 .7-.3.7-.7v-22h4.7v14.2l3.7 1.5h.2c.3 0 .6-.3.7-.6v-.1c.6-4.2 2.5-7.1 5.6-8.9v.8c0 .6 0 2.1.1 3 0 .5 0 .8.1 1.1 0 1.6.2 4.2.8 6 1 3.5 2.8 4.3 4.1 4.4h.1c.8 0 1.3-.2 1.7-.6.2-.2.5-.7.5-1.3 0-.7-.1-1.2-.3-1.5l-.3-.5-.6.1c-.7.2-.9.2-.9.1h-.1c-.2 0-.2 0-.3-.1-.2-.1-.6-.5-.9-1.6-.2-.8-.3-2-.3-2.6 0-4.6 1-8.1 2.4-8.9h.1c.2-.1.4-.3.4-.6 0-.1 0-.2-.1-.3V24c-.7-1.4-2.2-2.4-4.3-3h-.4c-1.6.3-3.6 1.4-6.1 3.5-.6.5-1.2 1.1-1.8 1.6v-5.7h14.2c.4 0 .7-.3.7-.7v-1.6c-.1-.2-.4-.5-.8-.5z"
        fill="#ec1c24"
      />
    </svg>
  );
}

// 8. Facebook
export function FacebookIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <title>Facebook</title>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

// 9. Instagram
export function InstagramIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <title>Instagram</title>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// 10. YouTube
export function YouTubeIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <title>YouTube</title>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// 11. Midjourney
export function MidjourneyIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <title>Midjourney</title>
      <path d="M12 2.5L3.5 18h17L12 2.5zm0 4.8l4.8 8.7h-9.6L12 7.3zM12 19.5c-3.6 0-6.5 1-6.5 1.5h13c0-.5-2.9-1.5-6.5-1.5z" />
    </svg>
  );
}

// 12. NordVPN
export function NordVpnIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <title>NordVPN</title>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 3.2a6.8 6.8 0 0 1 6.8 6.8 6.7 6.7 0 0 1-.9 3.3L15.7 8.8l-3.7 6.4-1.9-3.2-3.1 5.3A6.8 6.8 0 0 1 5.2 12a6.8 6.8 0 0 1 6.8-6.8z" />
    </svg>
  );
}

// 13. Grammarly
export function GrammarlyIcon({ className = 'w-5 h-5', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <title>Grammarly</title>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.7 13.3c-.9 1.5-2.5 2.5-4.4 2.7-2.9.3-5.5-1.7-5.9-4.6-.4-2.9 1.5-5.6 4.4-6.1 1.7-.3 3.4.3 4.6 1.5l-1.5 1.5c-.8-.8-1.9-1.2-3.1-1-1.9.3-3.1 2.1-2.9 4 .3 1.9 2 3.2 3.9 3 1.3-.1 2.3-.8 2.9-1.8h-3v-2.2h5.2v3z" />
    </svg>
  );
}

// 14. DBBL Rocket
export function RocketPaymentIcon({ className = 'w-6 h-6', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <title>Rocket</title>
      <circle cx="50" cy="50" r="46" fill="#F4EBF7" />
      <path d="M50 16L63 38H37L50 16Z" fill="#EF4123" />
      <path d="M37 38H63V66C63 70 57 74 50 74C43 74 37 70 37 66V38Z" fill="#8C3494" />
      <path d="M37 54L24 66V54L37 44V54Z" fill="#8C3494" />
      <path d="M63 54L76 66V54L63 44V54Z" fill="#8C3494" />
      <circle cx="50" cy="52" r="6" fill="#FFFFFF" />
    </svg>
  );
}

// 15. Bank Transfer
export function BankPaymentIcon({ className = 'w-6 h-6', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <title>Bank Transfer</title>
      <path d="M11.5 1L2 6v2h19V6l-9.5-5zm-7 8v8h3V9h-3zm5 0v8h3V9h-3zm5 0v8h3V9h-3zM2 19v3h19v-3H2z" />
    </svg>
  );
}

// Helper: Standalone Platform SVG Icon
export function PlatformIcon({
  platform,
  className = 'w-4 h-4',
}: {
  platform: string;
  className?: string;
}) {
  const p = platform.toLowerCase();
  if (p.includes('chatgpt') || p.includes('openai')) return <ChatGptIcon className={className} />;
  if (p.includes('claude') || p.includes('anthropic')) return <ClaudeIcon className={className} />;
  if (p.includes('gemini') || p.includes('google')) return <GeminiIcon className={className} />;
  if (p.includes('perplexity')) return <PerplexityIcon className={className} />;
  if (p.includes('canva')) return <CanvaIcon className={className} />;
  if (p.includes('midjourney')) return <MidjourneyIcon className={className} />;
  if (p.includes('facebook') || p.includes('fb')) return <FacebookIcon className={className} />;
  if (p.includes('instagram') || p.includes('ig')) return <InstagramIcon className={className} />;
  if (p.includes('youtube') || p.includes('yt')) return <YouTubeIcon className={className} />;
  if (p.includes('nordvpn') || p.includes('vpn')) return <NordVpnIcon className={className} />;
  if (p.includes('grammarly')) return <GrammarlyIcon className={className} />;
  return <GeminiIcon className={className} />;
}

// Helper: Product Platform Icon Badge
export function ProductPlatformIcon({
  platform,
  className = 'w-5 h-5',
}: {
  platform: string;
  className?: string;
}) {
  const p = platform.toLowerCase();

  if (p.includes('chatgpt') || p.includes('openai')) {
    return (
      <div className="w-8 h-8 rounded-lg bg-[#10A37F] text-white flex items-center justify-center shadow-xs">
        <ChatGptIcon className={className} />
      </div>
    );
  }
  if (p.includes('claude') || p.includes('anthropic')) {
    return (
      <div className="w-8 h-8 rounded-lg bg-[#FAF4EF] border border-[#d97757]/30 flex items-center justify-center shadow-xs">
        <ClaudeIcon className={className} color="#d97757" />
      </div>
    );
  }
  if (p.includes('gemini') || p.includes('google')) {
    return (
      <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center shadow-xs border border-purple-500/30">
        <GeminiIcon className={className} />
      </div>
    );
  }
  if (p.includes('perplexity')) {
    return (
      <div className="w-8 h-8 rounded-lg bg-[#1F2937] text-teal-400 flex items-center justify-center shadow-xs border border-teal-500/30">
        <PerplexityIcon className={className} />
      </div>
    );
  }
  if (p.includes('canva')) {
    return (
      <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center shadow-xs">
        <CanvaIcon className="w-8 h-8" />
      </div>
    );
  }
  if (p.includes('midjourney')) {
    return (
      <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shadow-xs">
        <MidjourneyIcon className={className} />
      </div>
    );
  }
  if (p.includes('facebook') || p.includes('fb')) {
    return (
      <div className="w-8 h-8 rounded-lg bg-[#1877F2] text-white flex items-center justify-center shadow-xs">
        <FacebookIcon className={className} />
      </div>
    );
  }
  if (p.includes('instagram') || p.includes('ig')) {
    return (
      <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-700 text-white flex items-center justify-center shadow-xs">
        <InstagramIcon className={className} />
      </div>
    );
  }
  if (p.includes('youtube') || p.includes('yt')) {
    return (
      <div className="w-8 h-8 rounded-lg bg-[#FF0000] text-white flex items-center justify-center shadow-xs">
        <YouTubeIcon className={className} />
      </div>
    );
  }
  if (p.includes('nordvpn') || p.includes('vpn')) {
    return (
      <div className="w-8 h-8 rounded-lg bg-[#4687FF] text-white flex items-center justify-center shadow-xs">
        <NordVpnIcon className={className} />
      </div>
    );
  }
  if (p.includes('grammarly')) {
    return (
      <div className="w-8 h-8 rounded-lg bg-[#15C39A] text-white flex items-center justify-center shadow-xs">
        <GrammarlyIcon className={className} />
      </div>
    );
  }

  return (
    <div className="w-8 h-8 rounded-lg bg-purple-700 text-white flex items-center justify-center shadow-xs">
      <GeminiIcon className={className} />
    </div>
  );
}
