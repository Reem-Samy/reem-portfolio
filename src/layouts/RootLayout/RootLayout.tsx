import { Outlet } from 'react-router'

/**
 * Top-level layout shared by every page.
 *
 * Renders the active page route. Shared chrome (navigation, footer, page
 * transitions) will be added here once provided in the Figma design.
 */
export function RootLayout() {
  return <Outlet />
}
