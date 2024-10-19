"use client";

import Snow from "react-canvas-confetti/dist/presets/snow";

export default function Confetti() {
  const decorateOptions = (defaultOptions: any) => {
    return {
      ...defaultOptions,
      colors: ["##fe0198", "##0084fb", "##ff6b01"],
    };
  };

  return <Snow autorun={{ speed: 30 }} decorateOptions={decorateOptions} />;
}
