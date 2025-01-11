import React from "react";

export const EXAMPLES = {
  "vite-intro": {
    label: "Vite Intro",
    component: React.lazy(() => import("./features/vite-intro")),
  },
  "simple-redux": {
    label: "Simple Redux",
    component: React.lazy(() => import("./features/simple-redux")),
  },
} as const;
