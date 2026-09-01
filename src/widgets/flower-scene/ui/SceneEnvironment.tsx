import { OrbitControls } from "@react-three/drei";
import { FIXED_POLAR_ANGLE } from "../model/constants";

export function SceneEnvironment() {
  return (
    <>
      <color attach="background" args={["#f5f2ea"]} />
      <ambientLight intensity={0.45} />
      <hemisphereLight args={["#fff7e8", "#8b705d", 1.2]} />
      <directionalLight
        position={[3, 4, 3]}
        intensity={2}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={FIXED_POLAR_ANGLE}
        maxPolarAngle={FIXED_POLAR_ANGLE}
      />
    </>
  );
}
