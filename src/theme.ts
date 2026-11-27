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









          //           background: { value: "#F3F0E8" }, // Main canvas
          // surface: { value: "#E4E0D5" }, // Cards
          // elevated: { value: "#221E1B" }, // Hover / panels
          // text: { value: "#292D29" }, // Main text
          // textSoft: { value: "#A3B4A8" }, // Muted text
          // textGhost: { value: "#778B99" }, // Faint text
          // secondary: { value: "#777C68" }, // Highlight
          // accent: { value: "#B66B4D" }, // Accent  
          // border: { value: "#A58A54" }, // Default borders