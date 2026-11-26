import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  globalCss: {
    "body, main, main section": {
      bg: "bg",
    },
    "main article": {
      bg: "bg.surface",
    },
    "main h1": {
      marginBottom: "10px",
      paddingBottom: "10px",
      borderBottom: "2px solid",
      borderBottomColor: "brand.accent",
      cursor: "crosshair",
    },
  },
  theme: {
    tokens: {
      colors: {
        brand: {
          background: { value: "#252A28" }, // Main canvas
          surface: { value: "#181614" }, // Cards
          elevated: { value: "#221E1B" }, // Hover / panels
          text: { value: "#FAFAF5" }, // Main text
          textSoft: { value: "#B8B8B0" }, // Muted text
          textGhost: { value: "#52524A" }, // Faint text
          secondary: { value: "#F5C400" }, // Highlight
          accent: { value: "#FF4D00" }, // Accent
          border: { value: "#FFFFFF1A" }, // Default borders
        },
      },
      fonts: {
        heading: { value: "'Space Grotesk', sans-serif" },
        body: { value: "'IBM Plex Sans', sans-serif" },
      },
      shadows: {
        header: { value: "0 2px 2px {colors.brand.text}" },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: { value: "{colors.brand.background}" },
          surface: { value: "{colors.brand.surface}" },
          panel: { value: "{colors.brand.elevated}" },
          hero: { value: "{colors.brand.background}" },
        },
        gray: {
          subtle: { value: "{colors.brand.elevated}" }, // button hover
        },
        fg: {
          DEFAULT: { value: "{colors.brand.text}" },
          muted: { value: "{colors.brand.textSoft}" },
          subtle: { value: "{colors.brand.textGhost}" },
        },
        border: {
          DEFAULT: { value: "{colors.brand.border}" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)


        // brand: {
        //   background: { value: "#F1F3F2" },
        //   surface: { value: "#DCE2DF" },
        //   text: { value: "#252D32" },
        //   secondary: { value: "#657C78" }, // Accent 1
        //   accent: { value: "#A3B4A8" }, // Accent 2
        // },