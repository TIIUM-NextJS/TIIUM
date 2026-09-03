import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { FlowerModel } from "@/src/entities/flower/ui/FlowerModel";
import { MoundModel } from "@/src/entities/mound/ui/MoundModel";

import { CAMERA_POSITION } from "../model/constants";
import { SceneEnvironment } from "./SceneEnvironment";
import { SceneHtml } from "./SceneHtml";
import { SceneLoader } from "./SceneLoader";

export default function FlowerScene() {
  return (
    <div className="h-screen w-full">
      <Canvas shadows camera={{ position: CAMERA_POSITION, fov: 30 }}>
        <SceneEnvironment />
        <SceneHtml />
        <Suspense fallback={<SceneLoader />}>
          <FlowerModel />
          <MoundModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
