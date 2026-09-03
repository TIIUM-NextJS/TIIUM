import { useEffect } from "react";

import { ESCAPE_KEY } from "./constants";

export const useCloseOnEscape = (isActive: boolean, onEscape: () => void) => {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ESCAPE_KEY) onEscape();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isActive, onEscape]);
};
