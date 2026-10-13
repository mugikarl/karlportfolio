import type { MouseEvent } from "react";

// Plain left clicks are handled in-app; modified clicks keep native link behavior.
export const isPlainClick = (event: MouseEvent) =>
  event.button === 0 &&
  !event.metaKey &&
  !event.ctrlKey &&
  !event.shiftKey &&
  !event.altKey;
