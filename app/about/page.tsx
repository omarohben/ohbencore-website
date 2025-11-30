import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'About OHBENCORE',
  description:
    'Learn about OHBENCORE, an IT infrastructure consulting firm specializing in technical services for SMBs and mid-size organizations.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          About OHBENCORE
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          OHBENCORE is an IT infrastructure consulting firm specializing in technical services 
          for SMBs and mid-size organizations across diverse industries.
        </p>
        <p className="text-sm text-gray-500">
          TODO: Add company story, values, experience summary, typical clients, 
          and how we work section.
        </p>
      </section>
    </div>
  );
}
