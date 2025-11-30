import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/seo';
import { calendlyUrl } from '@/config/calendly';
import Link from 'next/link';
import { CalendlyInlineEmbed } from '@/components/CalendlyInlineEmbed';

export const metadata: Metadata = createPageMetadata({
  title: 'Book a Call',
  description: 'Schedule a remote consultation or infrastructure assessment with OHBENCORE.',
  path: '/book',
});

export default function BookPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Book a Call with OHBENCORE
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-3xl">
        Schedule a remote consultation or infrastructure assessment. We typically respond or confirm within one business day.
      </p>

      {calendlyUrl ? (
        <div className="space-y-6">
          <p className="text-sm text-gray-500">
            Loading scheduling widget from Calendly. If it does not appear, ensure your browser allows external scripts.
          </p>
          {/* Inline Calendly embed component */}
          <CalendlyInlineEmbed url={calendlyUrl} />
        </div>
      ) : (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
          <p className="text-gray-700">
            Online booking is not configured yet. Please use our contact form instead and request a consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors"
          >
            Go to Contact Form
          </Link>
          <p className="text-xs text-gray-500">
            {/* TODO: Set CALENDLY_URL in .env.local to enable inline scheduling. */}
            Set CALENDLY_URL in environment to enable Calendly booking widget.
          </p>
        </div>
      )}
    </div>
  );
}
