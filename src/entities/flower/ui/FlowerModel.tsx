import {
  applyClayMaterial,
  CLAY_COLORS,
} from "@/src/shared/lib/three/clayMaterials";
import { RotatingGroup } from "@/src/shared/lib/three/RotatingGroup";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export function FlowerModel() {
  const model = useGLTF("/models/young-sprout.glb");
  useEffect(() => {
    applyClayMaterial(model.scene, CLAY_COLORS.sprout);
  }, [model.scene]);

  return (
    <RotatingGroup speed={0.2}>
      <primitive position={[0, -1.2, 0]} object={model.scene} />
    </RotatingGroup>
  );
}
