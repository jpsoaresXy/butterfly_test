"use client";

import { Canvas, useThree } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { ScrollControls } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      className="relative h-svh"
      camera={{ position: [0, -1, 5] }}
    >
      <directionalLight position={[-5, -5, 5]} intensity={10} />
      <Suspense fallback={null}>
        <ScrollControls damping={0.2} pages={12}>
          <Model />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
