/**
 * Public, client-safe environment configuration.
 *
 * Only `VITE_`-prefixed variables are exposed to the browser bundle, so only
 * public values (project URL, publishable key) may ever be defined here.
 * Secret / service-role keys must never be added to this project.
 */
export const env = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabasePublishableKey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
} as const
