import { Html } from "@react-three/drei";

import { MenuButton } from "@/src/features/open-menu/ul/MenuButton";
import { WaterButton } from "@/src/features/water-flower/ui/WaterButton";

export function SceneHtml() {
  return (
    <Html wrapperClass="z-0!" fullscreen>
      <WaterButton />
    </Html>
  );
}
