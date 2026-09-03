import { WaterButton } from "@/src/features/water-flower/ui/WaterButton";
import { Html } from "@react-three/drei";

export function SceneHtml() {
  return (
    <Html wrapperClass="z-0!" fullscreen>
      <WaterButton />
    </Html>
  );
}
