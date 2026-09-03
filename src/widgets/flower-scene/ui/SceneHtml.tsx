import { Html } from "@react-three/drei";

import { WaterButton } from "@/src/features/water-flower/ui/WaterButton";

export function SceneHtml() {
  return (
    <Html wrapperClass="z-0!" fullscreen>
      <WaterButton />
    </Html>
  );
}
