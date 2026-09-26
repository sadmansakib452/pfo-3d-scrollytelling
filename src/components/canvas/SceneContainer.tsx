"use client";

import dynamic from "next/dynamic";

const DynamicOrganicScene = dynamic(
  () => import("./OrganicScene"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-[#10B981]/30 border-t-[#FFB703] animate-spin" />
      </div>
    ),
  }
);

export default function SceneContainer() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <DynamicOrganicScene />
    </div>
  );
}
