"use client";

import dynamic from "next/dynamic";

const FlowerScene = dynamic(
  () => import("@/src/widgets/flower-scene/ui/FlowerScene"),
  {
    ssr: false,
    loading: () => <div className="h-screen w-full" />,
  },
);

export default function Flower() {
  return <FlowerScene />;
}
