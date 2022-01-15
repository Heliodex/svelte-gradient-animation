import { writable } from "svelte/store";

export const PaletteStore = writable([
  {
    color1: "#0051ff",
    color2: "#0099ff",
    color3: "#00c3ff",
    color4: "#af39e6",
  },
  {
    color1: "#6930c3",
    color2: "#4ea8de",
    color3: "#64dfdf",
    color4: "#80ffdb",
  },
  {
    color1: "#cbb2fe",
    color2: "#fde2e4",
    color3: "#bee1e6",
    color4: "#cddafd",
  },
  {
    color1: "#b8b8ff",
    color2: "#ffcf4d",
    color3: "#ff4d6d",
    color4: "#f7cad0",
  },
]);
