import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { env } from '../../config/env'

let client: SupabaseClient | undefined

/**
 * Returns the shared Supabase client, creating it on first use.
 *
 * Created lazily so the app still renders when Supabase isn't configured yet;
 * the error only surfaces when a feature actually needs the backend.
 * Uses the public publishable key only — access is governed by Row Level Security.
 */
export function getSupabaseClient(): SupabaseClient {
  if (client) {
    return client
  }

  const { supabaseUrl, supabasePublishableKey } = env

  if (!supabaseUrl || !supabasePublishableKey) {
    throw new Error(
      'Supabase is not configured. Copy .env.example to .env.local and set ' +
        'VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY.',
    )
  }

  client = createClient(supabaseUrl, supabasePublishableKey)
  return client
}
