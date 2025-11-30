import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with OHBENCORE to discuss your IT infrastructure needs. We typically respond within one business day.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Contact OHBENCORE
        </h1>
        <p className="text-lg text-gray-700">
          Get in touch to discuss your IT infrastructure needs. We typically respond within 
          one business day.
        </p>
        <p className="text-sm text-gray-500">
          TODO: Implement contact form with fields: name, email, company, country/city, 
          "What do you need help with?" (select), message. Add client-side validation 
          and accessible labels. Create API handler for form submission.
        </p>
      </section>
    </div>
  );
}
