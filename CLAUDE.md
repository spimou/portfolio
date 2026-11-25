# CLAUDE.md

## Project Context
### Overview

Personal site/portfolio of a software dev/webGIS/geodata viz/storytelling.
Based in react, hosted in Github Pages, only front, no DB.
Show skills and work and dombo of skills. Some demos/proof-of-concept, to show some work and way of thinking.
Basic SEO.

### Context Files
Read the following to get the full context of the project:

@context/project-overview.md
@context/coding-standards.md
@context/ai-interaction.md
@context/current-feature.md 

## Commands

- `npm run dev` — start dev server (Vite, port 3000)
- `npm run build` — type-check (`tsc -b`) then production build
- `npm run lint` — run ESLint over the project
- `npm run preview` — preview the production build locally

There is no test runner configured in this project.

## Architecture

React 19 for the UI
TypeScript 6 for application logic
chakra-ui/react 3.37.0 for UI layout and visual styling
Vite 8 for development server & build tooling 

### additional, useful to the excavation demo : 
Zustand for state management and communication between Map and Docked Detail Panel
Mapbox GL JS for the interactive map and 2D/3D rendering
GeoJSON / Mapbox-compatible spatial data for the archaeological polygons


Notable non-default setup:
- **Rolldown-based Vite** (`vite: ^8.3.0`): the React Compiler is wired in manually via `@rolldown/plugin-babel` + `reactCompilerPreset()` in [vite.config.ts](vite.config.ts), rather than through `@vitejs/plugin-react`'s built-in `babel` option. Keep this pattern when touching build config. 
- Dev server is fixed to port 3000 (`server.port` in [vite.config.ts](vite.config.ts)).

IMPORTANT: Do not add Claude to any commit messages

