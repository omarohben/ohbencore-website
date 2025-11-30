import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { calendlyUrl } from '@/config/calendly';

// HomeHero: Dark-themed hero section for landing page.
// Ensures a single H1 for SEO. Uses shared design tokens.
// TODO: Replace visual placeholder with custom graphic or diagram component later.
export function HomeHero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-[#0B1120] to-[#020617]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(29,78,216,0.25),transparent_60%)]" />
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Secure, Smart IT Infrastructure for Real-World Businesses
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] mb-8">
            We design, implement, and maintain reliable infrastructure—virtualization, backup & disaster recovery,
            networking, cloud platforms, monitoring, security and automation—so your operations stay resilient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={calendlyUrl ? '/book' : '/contact'} variant="primary">
              {calendlyUrl ? 'Book a Call' : 'Request an Assessment'}
            </Button>
            <Button href="/services" variant="outline" className="border-[var(--color-border-subtle)]">
              View Services
            </Button>
          </div>
        </div>
        {/* Visual Placeholder */}
        <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-4 max-w-4xl">
          {['VMware','Veeam','FortiGate','Zabbix','Proxmox','WireGuard','Azure','n8n'].map((tech) => (
            <div key={tech} className="rounded-lg border border-subtle bg-[var(--color-bg-surface)]/50 px-3 py-2 text-xs text-[var(--color-text-muted)]">
              {tech}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
