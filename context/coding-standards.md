# Coding Standards

## TypeScript
- Strict mode enabled
- No any types - use proper typing or unknown
- Define interfaces for all props, API responses, and data models
- Use type inference where obvious, explicit types where helpful

## React
- Functional components only (no class components)
- Use hooks for state and side effects
- Keep components focused - one job per component


## Naming
- Components: PascalCase (ItemCard.tsx)
- Files: Match component name or kebab-case
- Functions: camelCase
- Constants: SCREAMING_SNAKE_CASE
- Types/Interfaces: PascalCase (no prefix)

## Styling
- chakra-ui/react 3.37.0 for all styling

IMPORTANT: Do not add Claude to any commit messages