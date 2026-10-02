"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

export default function useSafeReducedMotion() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return mounted && Boolean(prefersReducedMotion);
}
