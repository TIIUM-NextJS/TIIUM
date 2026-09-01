import { Html } from "@react-three/drei";

import { MenuButton } from "@/src/features/open-menu/ul/MenuButton";
import { WaterButton } from "@/src/features/water-flower/ui/WaterButton";

export function SceneHtml() {
  return (
    <Html fullscreen>
      <header className="flex justify-between items-center py-10 px-20 max-w-[1440px] mx-auto w-full">
        <h1>LOGO</h1>
        <MenuButton />
      </header>
      <WaterButton />
    </Html>
  );
}
