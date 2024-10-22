"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import countries from "../../data/globe.json";

// Import Globe from 'react-globe.gl'
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export function GlobeDemo() {
  const globeEl = useRef();

  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    // ... include all other sample arcs here
  ];

  useEffect(() => {
    if (globeEl.current) {
      // Customize globe material
      const globeMaterial = globeEl.current.globeMaterial();
      globeMaterial.color = globeConfig.globeColor;
      globeMaterial.emissive = globeConfig.emissive;
      globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity;
      globeMaterial.shininess = globeConfig.shininess;
    }
  }, [globeEl]);

  return (
    <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
            We sell soap worldwide
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
            This globe is interactive and customizable. Have fun with it, and
            don&apos;t forget to share it. :)
          </p>
        </motion.div>
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
          <Globe
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            backgroundColor="rgba(0,0,0,0)"
            hexPolygonsData={countries.features}
            hexPolygonResolution={3}
            hexPolygonMargin={0.7}
            showAtmosphere={globeConfig.showAtmosphere}
            atmosphereColor={globeConfig.atmosphereColor}
            atmosphereAltitude={globeConfig.atmosphereAltitude}
            hexPolygonColor={() => globeConfig.polygonColor}
            arcsData={sampleArcs}
            arcStartLat="startLat"
            arcStartLng="startLng"
            arcEndLat="endLat"
            arcEndLng="endLng"
            arcColor="color"
            arcAltitude={(d) => d.arcAlt}
            arcStroke={(d) => [0.32, 0.28, 0.3][Math.floor(Math.random() * 3)]}
            arcDashLength={globeConfig.arcLength}
            arcDashGap={15}
            arcDashAnimateTime={globeConfig.arcTime}
            pointsData={sampleArcs}
            pointColor="color"
            pointAltitude={0}
            pointRadius={2}
            ringsData={sampleArcs}
            ringColor={(d) => d.color}
            ringMaxRadius={globeConfig.maxRings}
            ringPropagationSpeed={3}
            ringRepeatPeriod={
              (globeConfig.arcTime * globeConfig.arcLength) / globeConfig.rings
            }
            enablePointerInteraction={false}
            onGlobeReady={() => {
              globeEl.current.controls().autoRotate = globeConfig.autoRotate;
              globeEl.current.controls().autoRotateSpeed =
                globeConfig.autoRotateSpeed;
            }}
          />
        </div>
      </div>
    </div>
  );
}
