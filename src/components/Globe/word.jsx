"use client";
import { Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Globe } from "./Globe"; // Import the updated Globe component

export function World({ globeConfig, data }) {
  const aspect = 1.2;
  const cameraZ = 300;
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);

  return (
    <Canvas camera={{ fov: 50, aspect: aspect, near: 180, far: 1800, position: [0, 0, cameraZ] }}>
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight color={globeConfig.directionalLeftLight} position={new Vector3(-400, 100, 400)} />
      <directionalLight color={globeConfig.directionalTopLight} position={new Vector3(-200, 500, 200)} />
      <pointLight color={globeConfig.pointLight} position={new Vector3(-200, 500, 200)} intensity={0.8} />
      <Globe globeConfig={globeConfig} data={data} />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}
