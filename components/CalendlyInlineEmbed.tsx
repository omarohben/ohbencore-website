"use client";

import { useEffect, useRef } from 'react';

interface CalendlyInlineEmbedProps {
  url: string;
}

// Inline Calendly embed. Loads script & stylesheet only on this page.
// TODO: Ensure CALENDLY_URL is set in environment (.env.local) for production.
export function CalendlyInlineEmbed({ url }: CalendlyInlineEmbedProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Inject stylesheet if not present
    if (!document.querySelector('link[data-calendly-stylesheet]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.setAttribute('data-calendly-stylesheet', 'true');
      document.head.appendChild(link);
    }
    // Inject script if not present
    if (!document.querySelector('script[data-calendly-script]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.setAttribute('data-calendly-script', 'true');
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full" ref={containerRef}>
      {/* Calendly embed container */}
      <div
        className="calendly-inline-widget min-h-[680px] w-full"
        data-url={url}
        // NOTE: Adjust data-url via CALENDLY_URL env variable; do not hard-code.
      />
    </div>
  );
}
