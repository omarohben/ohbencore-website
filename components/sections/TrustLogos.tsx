import React from 'react';
import { Container } from '@/components/ui/Container';

// TrustLogos: Placeholder bar for client/partner logos.
// TODO: Replace placeholders with real client logos or certifications.
export function TrustLogos() {
  const logos = ['ClientOne', 'ClientTwo', 'PartnerAlpha', 'PartnerBeta', 'VendorX', 'VendorY'];
  return (
    <section className="py-10 bg-[var(--color-bg-surface)]/30 border-t border-subtle border-b">
      <Container size="lg" className="flex flex-col gap-6">
        <p className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">Trusted by teams working with critical infrastructure</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {logos.map(l => (
            <div key={l} className="flex items-center justify-center h-12 rounded-md bg-[var(--color-bg-surface)] border border-subtle text-[var(--color-text-muted)] text-xs font-medium">
              {l}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
