import { createBrowserRouter } from 'react-router'
import { RootLayout } from '../layouts/RootLayout/RootLayout'

/**
 * Application route tree (React Router data mode).
 *
 * Every page is a child of the root layout. Page routes are added here as each
 * page is built from its Figma frame; none exist yet.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [],
  },
])
