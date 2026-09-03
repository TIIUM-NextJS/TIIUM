import { Html } from "@react-three/drei";

import { Spinner } from "@/src/shared/ui/spinner";

export function SceneLoader() {
  return (
    <Html fullscreen>
      <div className=" absolute bottom-[35%] left-1/2 flex size-[300px] -translate-x-1/2 items-center justify-center">
        <Spinner className="size-10 text-gray-500" />
      </div>
    </Html>
  );
}
