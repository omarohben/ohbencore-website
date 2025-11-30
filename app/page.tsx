import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/seo';
import Link from 'next/link';
import { HomeHero } from '@/components/sections/HomeHero';
import { TrustLogos } from '@/components/sections/TrustLogos';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = createPageMetadata({
  title: 'IT Infrastructure Consulting & Technical Services',
  description:
    'OHBENCORE delivers IT infrastructure consulting, virtualization, backup & disaster recovery, networking, cloud infrastructure, and automation services for SMBs and mid-size organizations.',
  path: '/',
});

const services = [
  {
    title: 'Managed Infrastructure',
    description: 'Comprehensive management of your IT infrastructure, ensuring reliability, performance, and security.',
    href: '/services/managed-infrastructure-services',
  },
  {
    title: 'Virtualization & Hypervisors',
    description: 'Design and deployment of virtualized infrastructure using VMware, Hyper-V, and Proxmox.',
    href: '/services/virtualization-hypervisors',
  },
  {
    title: 'Backup & Disaster Recovery',
    description: 'Comprehensive backup strategies using Veeam, NAS/SAN, tape, and cloud storage solutions.',
    href: '/services/backup-disaster-recovery',
  },
  {
    title: 'Networking, Firewalls & VPN',
    description: 'Network infrastructure design and security using FortiGate, Cisco, Aruba, and other enterprise solutions.',
    href: '/services/networking-firewalls-vpn',
  },
  {
    title: 'Cloud & Hybrid Infrastructure',
    description: 'Cloud migration and hybrid infrastructure solutions across AWS, Azure, OVH, Hetzner, and GCP.',
    href: '/services/cloud-hybrid-infrastructure',
  },
  {
    title: 'Monitoring, Security & Automation',
    description: 'Infrastructure monitoring with Zabbix, security hardening, and workflow automation with n8n and AI.',
    href: '/services/monitoring-observability',
  },
];

const industries = [
  {
    name: 'Healthcare & Medical',
    focus: 'HIPAA-compliant infrastructure with reliable systems for patient care and data security.',
    href: '/industries/healthcare-medical-it-services',
  },
  {
    name: 'Government & Public Sector',
    focus: 'Secure, compliant IT infrastructure with emphasis on data protection and operational continuity.',
    href: '/industries/government-public-sector-it-services',
  },
  {
    name: 'Industrial / Manufacturing',
    focus: 'Robust systems supporting production environments, inventory management, and operational uptime.',
    href: '/industries/industrial-manufacturing-textile-it-services',
  },
  {
    name: 'Retail & Commerce',
    focus: 'Reliable POS systems, inventory management, and e-commerce platform infrastructure.',
    href: '/industries/retail-commerce-it-services',
  },
  {
    name: 'Construction & Contractors',
    focus: 'Mobile-friendly infrastructure supporting project management and collaboration across job sites.',
    href: '/industries/construction-contractors-it-services',
  },
  {
    name: 'Education & Training',
    focus: 'Secure learning environments and administrative systems for schools and training centers.',
    href: '/industries/education-training-it-services',
  },
];

const technologies = [
  { category: 'Virtualization', items: ['VMware vSphere', 'Hyper-V', 'Proxmox VE'] },
  { category: 'Backup & Storage', items: ['Veeam', 'NAS/SAN', 'Tape Libraries', 'S3/Object Storage'] },
  { category: 'Networking & Security', items: ['FortiGate', 'Cisco', 'Aruba', 'Ruijie', 'UniFi', 'WireGuard', 'OpenVPN'] },
  { category: 'Cloud Platforms', items: ['AWS', 'Azure', 'GCP', 'OVH', 'Hetzner', 'DigitalOcean', 'Contabo'] },
  { category: 'Monitoring & Automation', items: ['Zabbix', 'n8n', 'AI/LLM Integration'] },
];

export default function Home() {
  return (
    <div className="mx-auto">
      <HomeHero />
      <TrustLogos />

      {/* What We Do Section */}
      <section className="py-16 md:py-20">
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.href} className="h-full">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-4">{service.description}</p>
                <Button href={service.href} variant="ghost" className="px-0 py-0 text-xs">
                  Learn more →
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-surface)]/40">
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Industries We Serve</h2>
          <p className="text-lg text-[var(--color-text-muted)] mb-12 max-w-3xl">
            We deliver specialized IT infrastructure solutions across healthcare, manufacturing, retail, education and more.{' '}
            <Link href="/industries" className="text-[var(--color-primary)] hover:underline">View all industries</Link>
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry) => (
              <Card key={industry.href} className="h-full">
                <h3 className="text-lg font-semibold mb-2">
                  <Link href={industry.href} className="hover:text-[var(--color-primary)] transition-colors">
                    {industry.name}
                  </Link>
                </h3>
                <p className="text-sm text-[var(--color-text-muted)]">{industry.focus}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why OHBENCORE Section */}
      <section className="py-16 md:py-20">
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">Why OHBENCORE</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Infrastructure First, Automation on Top',
                body: 'We build solid foundations before layering automation so resilience and performance come first.',
              },
              {
                title: 'Open-Source Core + Proven Tools',
                body: 'We blend open-source innovation with commercial reliability (Veeam, FortiGate, VMware) where it counts.',
              },
              {
                title: 'Real Production Experience',
                body: 'Solutions shaped by real-world environments—from legacy systems to modern cloud platforms.',
              },
              {
                title: 'Remote-First, On-Site When Needed',
                body: 'Efficient remote delivery with targeted on-site support for hardware and datacenter needs.',
              },
            ].map((item) => (
              <Card key={item.title} className="space-y-3">
                <div className="w-8 h-8 rounded-md bg-[var(--color-primary)]/15 flex items-center justify-center text-[var(--color-primary)] text-sm font-semibold">✓</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{item.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-surface)]/40">
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Technology Stack We Work With</h2>
          <p className="text-lg text-[var(--color-text-muted)] mb-12 max-w-3xl">
            Hands-on experience across virtualization, storage, networking, cloud and automation platforms.
          </p>
          <div className="space-y-8">
            {technologies.map((tech) => (
              <div key={tech.category}>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)] mb-3">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span key={item} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-bg-surface)] border border-subtle text-[var(--color-text-muted)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20">
        <Container className="text-center">
          <Card className="mx-auto max-w-3xl py-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Review Your Infrastructure?</h2>
            <p className="text-lg text-[var(--color-text-muted)] mb-8">
              Get an initial assessment—identify risks and opportunities across backup, virtualization,
              networking, cloud and automation.
            </p>
            <Button href="/contact" variant="primary" className="px-8 py-4 text-base">Talk to OHBENCORE</Button>
          </Card>
        </Container>
      </section>
    </div>
  );
}

