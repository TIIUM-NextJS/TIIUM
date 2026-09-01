import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

type RotatingGroupProps = {
  speed?: number;
  children: React.ReactNode;
};

export function RotatingGroup({ speed = 0.2, children }: RotatingGroupProps) {
  const ref = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * speed;
  });

  return <group ref={ref}>{children}</group>;
}
