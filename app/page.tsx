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
      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-muted max-w-2xl">
              Comprehensive IT infrastructure services designed to keep your business running smoothly and securely.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Link key={service.href} href={service.href} className="group">
                <Card className="h-full group-hover:border-blue-600/50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-600/5 flex items-center justify-center text-2xl shrink-0">
                      {idx === 0 && '⚙️'}
                      {idx === 1 && '🔲'}
                      {idx === 2 && '💾'}
                      {idx === 3 && '🛡️'}
                      {idx === 4 && '☁️'}
                      {idx === 5 && '📊'}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-sm text-blue-400 font-medium group-hover:gap-2 transition-all">
                    Learn more
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 md:py-28 bg-surface/40">
        <Container>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted max-w-3xl">
              We deliver specialized IT infrastructure solutions across healthcare, manufacturing, retail, education and more.{' '}
              <Link href="/industries" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                View all industries →
              </Link>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link key={industry.href} href={industry.href} className="group">
                <Card className="h-full group-hover:border-blue-600/50">
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {industry.focus}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Why OHBENCORE Section */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why OHBENCORE</h2>
            <p className="text-lg text-muted max-w-2xl">
              Our approach combines proven infrastructure practices with modern automation, delivering reliable systems that scale with your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Infrastructure First, Automation on Top',
                body: 'We build solid foundations before layering automation so resilience and performance come first.',
                icon: '🏗️',
              },
              {
                title: 'Open-Source Core + Proven Tools',
                body: 'We blend open-source innovation with commercial reliability (Veeam, FortiGate, VMware) where it counts.',
                icon: '🔧',
              },
              {
                title: 'Real Production Experience',
                body: 'Solutions shaped by real-world environments—from legacy systems to modern cloud platforms.',
                icon: '⚡',
              },
              {
                title: 'Remote-First, On-Site When Needed',
                body: 'Efficient remote delivery with targeted on-site support for hardware and datacenter needs.',
                icon: '🌐',
              },
            ].map((item) => (
              <Card key={item.title} variant="highlight" hover={false} className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-600/5 flex items-center justify-center text-3xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 md:py-28 bg-surface/40">
        <Container>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack We Work With</h2>
            <p className="text-lg text-muted max-w-3xl">
              Hands-on experience across virtualization, storage, networking, cloud and automation platforms.
            </p>
          </div>
          
          <div className="space-y-10">
            {technologies.map((tech) => (
              <div key={tech.category}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-4">
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {tech.items.map((item) => (
                    <span 
                      key={item} 
                      className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-slate-900/50 border border-slate-800 text-gray-300 hover:border-blue-600/50 hover:text-blue-400 transition-all duration-200"
                    >
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
      <section className="py-20 md:py-28">
        <Container className="text-center">
          <div className="mx-auto max-w-3xl bg-gradient-to-br from-blue-950/50 to-slate-900/50 backdrop-blur-sm border border-blue-900/30 rounded-3xl p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Review Your Infrastructure?
            </h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              Get an initial assessment—identify risks and opportunities across backup, virtualization,
              networking, cloud and automation.
            </p>
            <Button 
              href="/contact" 
              variant="primary" 
              className="px-8 py-4 text-base group"
            >
              Talk to OHBENCORE
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

