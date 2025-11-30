// Calendly configuration helper
// Reads the scheduling URL from environment variables.
// TODO: Set CALENDLY_URL in .env.local to your actual Calendly scheduling link.
// If missing, pages like /book must render a contact form fallback.

export const calendlyUrl: string | null = process.env.CALENDLY_URL ?? null;
