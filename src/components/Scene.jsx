import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ScrollControls } from "@react-three/drei";
import { Bottle } from "./Bottle";

export default function Scene() {
  return (
    <div className={"container-3d canvas"}>
      <Canvas camera={{ fov: 35, position: [0, 2, 10] }}>
        <ambientLight intensity={0.8} color={0xffffff} />
        <ScrollControls pages={8} damping={0.5}>
          <Bottle />
        </ScrollControls>
        <OrbitControls target={[0, 2, 0]} enableZoom={false} enableRotate={false} />
        <Environment files={"./snowy_park_01_1k.hdr"} blur={0.5} />
      </Canvas>
    </div>
  );
}
