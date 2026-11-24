/// <reference types="vite/client" />

/** Type definitions for the public environment variables read in `src/config/env.ts`. */
interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL?: string
  readonly VITE_SUPABASE_PUBLISHABLE_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
