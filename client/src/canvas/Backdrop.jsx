import React from "react";
import { easing } from "maath";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

export default function Backdrop() {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      position={[0, 0, -0.14]}
      temporal
      frames={60}
      alphaTest={0.6}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.4}
        ambient={0.8}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={10}
        intensity={0.25}
        ambient={0.6}
        position={[-5, 5, -10]}
      />
    </AccumulativeShadows>
  );
}