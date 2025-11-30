import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { label: 'Managed Infrastructure', href: '/services/managed-infrastructure-services' },
    { label: 'Virtualization', href: '/services/virtualization-hypervisors' },
    { label: 'Backup & DR', href: '/services/backup-disaster-recovery' },
    { label: 'Networking & Security', href: '/services/networking-firewalls-vpn' },
    { label: 'Cloud Infrastructure', href: '/services/cloud-hybrid-infrastructure' },
    { label: 'Monitoring & Automation', href: '/services/monitoring-observability' },
  ];

  const industryLinks = [
    { label: 'Healthcare', href: '/industries/healthcare-medical-it-services' },
    { label: 'Manufacturing', href: '/industries/industrial-manufacturing-textile-it-services' },
    { label: 'Retail & Commerce', href: '/industries/retail-commerce-it-services' },
    { label: 'Government', href: '/industries/government-public-sector-it-services' },
  ];

  const resourceLinks = [
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Trust & Security', href: '/trust-security' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold text-white">{siteConfig.siteName}</h3>
            </Link>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed mb-6">
              Professional IT infrastructure consulting and technical services for businesses. 
              Specializing in virtualization, backup & disaster recovery, networking, cloud infrastructure, 
              monitoring, and security.
            </p>
            
            {/* Social icons placeholder */}
            <div className="flex gap-4">
              {[
                { name: 'LinkedIn', icon: 'in', href: '#' },
                { name: 'Twitter', icon: '𝕏', href: '#' },
                { name: 'GitHub', icon: 'gh', href: '#' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-600/50 transition-all duration-200"
                  aria-label={social.name}
                >
                  <span className="text-xs font-semibold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Industries</h4>
            <ul className="space-y-3">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/industries"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors block font-medium"
                >
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} {siteConfig.siteName}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/trust-security" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
                Privacy
              </Link>
              <Link href="/trust-security" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
                Terms
              </Link>
              <Link href="/trust-security" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
