import React, { useLayoutEffect } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { GenerateInitMaterials, LoadAnimations, LoadTextures } from "./Utils";
import gsap, { Power4 } from "gsap";

export function Bottle(props) {
  const { nodes } = useGLTF("/Bottle.glb");
  const scene = useThree((state) => state.scene);
  const timeline = gsap.timeline({ defaults: { ease: Power4.easeInOut, duration: 2 } });

  const colorsMaterial = {
    cristal: "#8c8c8c",
    soda: "#000",
  };
  const scroll = useScroll();
  const { cristalMaterial, sodaMaterial, brandMaterial } = GenerateInitMaterials(colorsMaterial);

  useLayoutEffect(() => {
    const textures = LoadTextures(["FalloutBoy", "Classic", "Quantum", "Sunset"]);
    const animations = LoadAnimations(scene, colorsMaterial, cristalMaterial, sodaMaterial, brandMaterial, textures);
    animations.map((animation) => {
      timeline.to(
        animation.target,
        {
          ...animation.animationsProperties,
        },
        animation.pointTime
      );
    });
  }, []);

  useFrame(() => {
    if (timeline) {
      timeline.seek(timeline.duration() * scroll.offset);
    }
  });

  return (
    <group name='BottleGroup' {...props} dispose={null} position={[0, 0, 0]}>
      <mesh name='Bottle' castShadow receiveShadow geometry={nodes.Bottle.geometry} material={cristalMaterial} />
      <mesh name='Soda' castShadow receiveShadow geometry={nodes.Soda.geometry} material={sodaMaterial} />
      <mesh name='Brand' castShadow receiveShadow geometry={nodes.Brand.geometry} material={brandMaterial} />
      <mesh name='Cap' castShadow receiveShadow geometry={nodes.Cap.geometry} material={brandMaterial} />
    </group>
  );
}

useGLTF.preload("/Bottle.glb");
