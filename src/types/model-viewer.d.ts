// Minimal JSX typing for Google's <model-viewer> web component.
// The real component ships its own TS types, but importing it purely
// as a <script type="module"> tag (see index.tsx) means React/TSX
// doesn't know the element exists unless we declare it here.
import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> &
        Record<string, unknown>;
    }
  }
}

export {};
