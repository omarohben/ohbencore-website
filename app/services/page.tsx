import Link from 'next/link';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'IT Infrastructure Services',
  description:
    'Comprehensive IT infrastructure services including virtualization, backup & disaster recovery, networking, cloud, monitoring, security, and automation for businesses.',
  path: '/services',
});

const services = [
  { name: 'Managed Infrastructure Services', href: '/services/managed-infrastructure-services' },
  { name: 'Server Administration & Management', href: '/services/server-administration-management' },
  { name: 'Virtualization & Hypervisors', href: '/services/virtualization-hypervisors' },
  { name: 'Backup & Disaster Recovery', href: '/services/backup-disaster-recovery' },
  { name: 'Networking, Firewalls & VPN', href: '/services/networking-firewalls-vpn' },
  { name: 'Cloud & Hybrid Infrastructure', href: '/services/cloud-hybrid-infrastructure' },
  { name: 'Monitoring & Observability', href: '/services/monitoring-observability' },
  { name: 'Security & Hardening for Infrastructure', href: '/services/security-hardening-infrastructure' },
  { name: 'Monitoring, Automation & AI', href: '/services/monitoring-automation-ai' },
];

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          IT Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          OHBENCORE offers comprehensive IT infrastructure services covering virtualization, 
          backup & disaster recovery, networking, cloud, monitoring, security, and automation.
        </p>
        
        <div className="pt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Service Categories</h2>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-gray-500 pt-4">
          TODO: Add service overview cards with icons, brief descriptions, and CTAs.
        </p>
      </section>
    </div>
  );
}
