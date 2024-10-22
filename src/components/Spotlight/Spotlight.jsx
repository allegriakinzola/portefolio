import React from "react";
import { cn } from "../../lib/utils";
import { AnimatedTooltipPreview } from "../AnimatedTooltip/AnimatedTooltipPreview";
import { BackgroundLinesDemo } from "../BackgroundLinesDemo/BackgroundLinesDemo";
import { ScrollingIcons } from "../scrollicone/scrollicone";

export const SpotlightText = () => {
  return (
    <div className="relative max-w-full flex items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* Texte argenté */}
      <div className="relative z-10 text-center flex items-center justify-center flex-col">
        <h1 className="mb-5 w-[80%] text-5xl font-bold md:mb-6 md:text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-gray-200">
          Allegria kinzola <br /> Developpeur web.
        </h1>
        <p className="mt-4 text-2xl md:mb-6 md:text-3xl lg:text-4xl lg:w-[60%] w-[90%] text-center text-gray-400">
          je conçois des applications innovantes qui répondent à vos
          objectifs et améliorent l'expérience utilisateur.
        </p>
        <AnimatedTooltipPreview/>
        <BackgroundLinesDemo/>
        {/* <ScrollingIcons/> */}
      </div>

      {/* Effet de lumière argentée dégradée */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-20 blur-lg animate-slow-glow"></div>
      </div>
    </div>
  );
};

export const Spotlight = ({ className, fill }) => {
  return (
    <div className="relative bg-black h-screen w-full overflow-hidden">
      {/* Texte centré dans le conteneur */}
      <SpotlightText />

      {/* Effet lumineux défilant */}
      <svg
        className={cn(
          "animate-spotlight pointer-events-none absolute z-[1] h-full w-full opacity-100",
          className
        )}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3787 2842"
        fill="none"
      >
        <g filter="url(#filter)">
          <ellipse
            cx="1924.71"
            cy="273.501"
            rx="1924.71"
            ry="273.501"
            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
            fill={fill || "white"}
            fillOpacity="0.15"
          ></ellipse>
        </g>
        <defs>
          <filter
            id="filter"
            x="0.860352"
            y="0.838989"
            width="3785.16"
            height="2840.26"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
            <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8"></feGaussianBlur>
          </filter>
        </defs>
      </svg>
    </div>
  );
};
