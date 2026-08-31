"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Object3D } from "three";
import {
  applyClayMaterial,
  applyEdgeFadeClayMaterial,
  CLAY_COLORS,
} from "@/src/shared/types/lib/three/clayMaterials";

const CAMERA_POSITION = [0, 4, 15] as const;
const FIXED_POLAR_ANGLE = Math.acos(
  CAMERA_POSITION[1] /
    Math.hypot(CAMERA_POSITION[0], CAMERA_POSITION[1], CAMERA_POSITION[2]),
);
function RotatingObject({
  mound,
  flower,
}: {
  mound: Object3D;
  flower: Object3D;
}) {
  const moundRef = useRef<Object3D>(null);
  const flowerRef = useRef<Object3D>(null);

  useFrame((_, delta) => {
    if (!moundRef.current || !flowerRef.current) return;

    moundRef.current.rotation.y += delta * 0.2;
    flowerRef.current.rotation.y += delta * 0.2;
  });

  return (
    <>
      <primitive
        ref={moundRef}
        position={[0, -1.4, 0]}
        scale={2}
        object={mound}
      />
      <primitive ref={flowerRef} position={[0, -1.2, 0]} object={flower} />
    </>
  );
}

export default function FlowerScene() {
  const model = useGLTF("/models/young-sprout.glb");
  const mound = useGLTF("/models/mound.glb");

  useEffect(() => {
    applyClayMaterial(model.scene, CLAY_COLORS.sprout);
    applyEdgeFadeClayMaterial(mound.scene, CLAY_COLORS.mound, {
      fadeStart: 1.5,
      fadeEnd: 2.1,
    });
  }, [model.scene, mound.scene]);

  return (
    <div className="h-screen w-full">
      <Canvas shadows camera={{ position: CAMERA_POSITION, fov: 30 }}>
        <color attach="background" args={["#f5f2ea"]} />
        <ambientLight intensity={0.45} />
        <hemisphereLight args={["#fff7e8", "#8b705d", 1.2]} />
        <directionalLight
          position={[3, 4, 3]}
          intensity={2}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <RotatingObject mound={mound.scene} flower={model.scene} />
        <fog attach="fog" args={["#f5f2ea", 0, 70]} />
        <OrbitControls
          enableZoom={false}
          minPolarAngle={FIXED_POLAR_ANGLE}
          maxPolarAngle={FIXED_POLAR_ANGLE}
        />
        <Html fullscreen>
          <header className="flex justify-between items-center py-10 px-20">
            <h1>LOGO</h1>
            <button>MENU</button>
          </header>

          <button className="cursor-pointer hover:bg-blue-400 transition-colors duration-300 py-5 px-15 border rounded-full absolute bottom-60 left-1/2 -translate-x-1/2">
            물주기
          </button>
        </Html>
      </Canvas>
    </div>
  );
}
