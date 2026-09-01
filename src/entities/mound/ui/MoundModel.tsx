import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

import {
  applyEdgeFadeClayMaterial,
  CLAY_COLORS,
} from "@/src/shared/lib/three/clayMaterials";
import { RotatingGroup } from "@/src/shared/lib/three/RotatingGroup";

export function MoundModel() {
  const model = useGLTF("/models/mound.glb");
  useEffect(() => {
    applyEdgeFadeClayMaterial(model.scene, CLAY_COLORS.mound, {
      fadeStart: 1.5,
      fadeEnd: 2.1,
    });
  }, [model.scene]);
  return (
    <RotatingGroup speed={0.2}>
      <primitive position={[0, -1.4, 0]} scale={2} object={model.scene} />
    </RotatingGroup>
  );
}
