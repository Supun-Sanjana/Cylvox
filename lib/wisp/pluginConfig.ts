/**
 * Single source of truth for the Trustlyne WordPress plugin CTA state.
 * Set NEXT_PUBLIC_TRUSTLYNE_PLUGIN_URL when the plugin is published.
 */
export const TRUSTLYNE_PLUGIN_URL: string | null =
  process.env.NEXT_PUBLIC_TRUSTLYNE_PLUGIN_URL || null;

export const TRUSTLYNE_PLUGIN_NAME = 'Trustlyne';
