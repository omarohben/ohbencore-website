// TinaCMS configuration skeleton
// ---------------------------------------------
// TODO: Install dependencies before using TinaCMS:
//   npm install tinacms @tinacms/cli
//   npx tina init   # if starting a new project
// Development commands (after config):
//   npx tina dev    # starts Tina local server
// Production build notes:
//   Tina schema generates types; ensure CI runs `npx tina build` if required.
// ---------------------------------------------
// Environment variables (placeholders) required:
//   TINA_CLIENT_ID=YOUR_TINA_CLIENT_ID         // Provided by Tina Cloud
//   TINA_TOKEN=YOUR_TINA_READ_WRITE_TOKEN      // TODO: secure token
//   TINA_BRANCH=main                           // Or another default content branch
// ---------------------------------------------
// Site must function WITHOUT these variables (no editing UI).

// Dynamic import guard: avoid build failure if tinacms not installed yet.
let defineConfig: (cfg: any) => any;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  defineConfig = require('tinacms').defineConfig;
} catch {
  defineConfig = (cfg: any) => cfg; // Fallback when tinacms unavailable.
}

// Safe access to env (do not hard-code secrets)
const clientId = process.env.TINA_CLIENT_ID || ''; // TODO: set in .env.local
const token = process.env.TINA_TOKEN || ''; // TODO: set secure token
const branch = process.env.TINA_BRANCH || 'main'; // TODO: adjust branch name if different

// Flag for enabling Tina editing UI (can also use NEXT_PUBLIC_TINA_ENABLED)
export const isTinaEnabled = Boolean(process.env.NEXT_PUBLIC_TINA_ENABLED ?? (clientId && token));

export default defineConfig({
  clientId: clientId || 'TINA_CLIENT_ID_MISSING', // Placeholder surfaces missing config
  branch,
  token: token || undefined, // Omit if empty; required for authenticated operations later.
  build: {
    outputFolder: 'tina',
    publicFolder: 'public',
  },
  cmsCallback: (cms: any) => {
    // Customizations or plugins can go here later.
    return cms;
  },
  schema: {
    collections: [
      {
        name: 'blog',
        label: 'Blog Posts',
        path: 'content/blog',
        format: 'md', // Using Markdown files initially
        ui: {
          // Preview can be customized later
        },
        fields: [
          { name: 'title', label: 'Title', type: 'string', isTitle: true, required: true },
          { name: 'slug', label: 'Slug', type: 'string', required: true },
          { name: 'date', label: 'Date', type: 'datetime', required: true },
          { name: 'description', label: 'Description', type: 'string', required: true },
          { name: 'tags', label: 'Tags', type: 'string', list: true },
          { name: 'body', label: 'Body', type: 'rich-text' },
        ],
      },
    ],
  },
});
