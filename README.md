# React + TypeScript Product Catalog

A modern, responsive product catalog web app built with React, TypeScript, React Query, React Router, and Tailwind CSS.

## Features
- **Product Listing:** Grid and list views for browsing products.
- **Search & Filter:** Fast, client-side search and product line filtering.
- **Product Details:** Detailed view with responsive images and JSON modal.
- **Error Handling:** Robust error boundaries for graceful error recovery.
- **Custom Theming:** All colors managed via Tailwind CSS config for easy branding.

## Tech Stack
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://tanstack.com/query/latest)
- [React Router v7](https://reactrouter.com/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- Yarn or npm

### Installation
```bash
# Install dependencies
yarn install
# or
npm install
```

### Development
```bash
# Start the dev server
yarn dev
# or
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build
```bash
# Build for production
yarn build
# or
npm run build
```

### Linting
```bash
yarn lint
# or
npm run lint
```

## Project Structure
```
src/
  components/
    common/           # Shared UI components (Layout, Modal, ErrorBoundary)
    LandingPage/      # Main landing page, control panel, grid/list views
    ProductDetailsView/ # Product details page
  context/            # App state context
  hooks/              # Custom React hooks
  types/              # TypeScript types
  util/               # Utility functions (image URL, API, etc.)
  assets/             # SVGs and static assets
```

## Theming & Customization
- All colors are defined in `index.css`

## API
- Product data is fetched from [https://static.ui.com/fingerprint/ui/public.json](https://static.ui.com/fingerprint/ui/public.json)
- See `src/util/http.ts` for fetch logic and error handling.

## Responsive Images
- Images use `srcSet` and `sizes` for optimal loading and sharpness.
- See `src/util/getImageUrl.ts` for image URL and srcSet utilities.

## Error Handling
- All major views are wrapped in an `ErrorBoundary` (`src/components/common/ErrorBoundary.tsx`).
- Graceful fallback UI is shown on error.
