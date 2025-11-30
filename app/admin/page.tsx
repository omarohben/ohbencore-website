import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Content Admin',
  description: 'Edit site content (TinaCMS integration placeholder).',
  path: '/admin',
});

export default function AdminPage() {
  const tinaClientId = process.env.TINA_CLIENT_ID;
  const tinaToken = process.env.TINA_TOKEN; // Optional now; needed for authenticated edits later.
  const tinaEnabled = Boolean(process.env.NEXT_PUBLIC_TINA_ENABLED ?? (tinaClientId && tinaToken));
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Content Administration</h1>
      {!tinaEnabled && (
        <div className="border border-yellow-300 bg-yellow-50 rounded-lg p-6 mb-8">
          <p className="text-gray-800 font-medium mb-2">TinaCMS Not Configured</p>
          <p className="text-sm text-gray-700 mb-2">
            Set <code className="bg-gray-100 px-1 py-0.5 rounded">TINA_CLIENT_ID</code> and other Tina environment variables in <code>.env.local</code> then install dependencies to enable visual editing.
          </p>
          <pre className="text-xs bg-gray-100 p-3 rounded overflow-x-auto">
{`# Install TinaCMS (run manually, not committed)
npm install tinacms @tinacms/cli
# Initialize if new
yarn tina init  # or: npx tina init
# Start Tina dev server (after config)
npx tina dev`}
          </pre>
          <p className="text-xs text-gray-500 mt-2">TODO: Replace this notice with Tina editing UI once configured.</p>
        </div>
      )}
      {tinaEnabled && (
        <div className="border border-green-300 bg-green-50 rounded-lg p-6">
          <p className="text-sm text-gray-700">
            TinaCMS environment variables detected. Visual editor placeholder – TODO: mount Tina editing UI provider here once configured.
          </p>
        </div>
      )}
    </div>
  );
}
