import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/seo';
import Link from 'next/link';

export const metadata: Metadata = createPageMetadata({
  title: 'Managed Infrastructure Services',
  description:
    'Comprehensive management of IT infrastructure including servers, virtualization platforms, storage, and networks. Ensure reliability, performance, and security across all systems.',
  path: '/services/managed-infrastructure-services',
});

export default function ManagedInfrastructureServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      {/* Intro Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Managed Infrastructure Services
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          Comprehensive management of your IT infrastructure, ensuring reliability, performance, and security across all systems.
        </p>
        <p className="text-lg text-gray-600">
          OHBENCORE provides day-to-day management of servers, virtualization platforms, storage, and network infrastructure 
          for SMBs and mid-size organizations. We handle operations, patching, monitoring integration, capacity planning, and 
          incident response coordination so you can focus on your business.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Infrastructure assessment and clean-up</strong> to identify unused resources, 
              misconfigurations, and optimization opportunities in your existing environment.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Standardize OS builds and configurations</strong> to ensure consistency across servers, 
              reduce complexity, and simplify maintenance.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Capacity planning</strong> for CPU, RAM, storage, and network resources to avoid performance 
              bottlenecks and plan hardware upgrades proactively.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Integrate with monitoring and backup systems</strong> to ensure all infrastructure components 
              are properly monitored and protected.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Document the environment</strong> including network diagrams, server inventory, service dependencies, 
              and access procedures.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Coordinate incident response</strong> when infrastructure issues occur, working with your team 
              to restore services quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Use</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Virtualization Platforms</h3>
            <p className="text-gray-600 text-sm">
              VMware vSphere/ESXi, Microsoft Hyper-V, and Proxmox VE for managing virtualized infrastructure 
              and VM workloads.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Server Operating Systems</h3>
            <p className="text-gray-600 text-sm">
              Windows Server, Ubuntu Server, Debian, CentOS/Rocky Linux for hosting applications and services.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Storage Systems</h3>
            <p className="text-gray-600 text-sm">
              NAS/SAN storage from vendors like Synology, QNAP, Dell EMC, and HPE for shared storage and data repositories.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Monitoring Tools</h3>
            <p className="text-gray-600 text-sm">
              Zabbix for infrastructure monitoring, alerting, and performance tracking across all managed systems.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Work</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              1
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assess Current Infrastructure</h3>
              <p className="text-gray-600">
                We review your existing servers, virtualization, storage, and network. We identify what's working, 
                what's misconfigured, and where improvements are needed.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design Management Approach</h3>
              <p className="text-gray-600">
                We define how infrastructure will be managed: patching schedules, monitoring integration, backup policies, 
                and documentation standards.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implement Standards and Cleanup</h3>
              <p className="text-gray-600">
                We standardize configurations, remove obsolete resources, update documentation, and integrate with 
                monitoring and backup systems.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              4
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verify and Test</h3>
              <p className="text-gray-600">
                We test monitoring alerts, verify backup integration, and ensure the infrastructure is stable and 
                performing as expected.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              5
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Support (Optional)</h3>
              <p className="text-gray-600">
                We can provide ongoing infrastructure management, including patching, capacity monitoring, and 
                incident response coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What You Get</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Documented infrastructure</strong> with diagrams, server inventory, and clear procedures for common tasks.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Standardized configurations</strong> that reduce complexity and make troubleshooting faster.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Integrated monitoring</strong> so you know when issues occur before they impact users.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Capacity planning insights</strong> to help you make informed decisions about hardware and resource allocation.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Clear point of contact</strong> for infrastructure questions and incident coordination.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              What's included in managed infrastructure services?
            </h3>
            <p className="text-gray-600">
              It depends on your needs. Services can range from a one-time infrastructure cleanup and documentation 
              project to ongoing management including patching, monitoring, capacity planning, and incident response. 
              We tailor the scope to fit your requirements and budget.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Do you work with our existing systems or replace everything?
            </h3>
            <p className="text-gray-600">
              We work with your existing infrastructure. Our goal is to optimize what you have, not replace everything. 
              We'll recommend upgrades or replacements only when systems are end-of-life or fundamentally incapable of 
              meeting your needs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Can you manage both on-premises and cloud infrastructure?
            </h3>
            <p className="text-gray-600">
              Yes. We manage hybrid environments that span on-premises servers, virtualization platforms, and cloud 
              resources (AWS, Azure, OVH, etc.). We ensure all components work together and are properly monitored 
              and backed up.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How do you handle emergency incidents?
            </h3>
            <p className="text-gray-600">
              For clients with ongoing support agreements, we coordinate incident response based on agreed SLAs. 
              We work remotely when possible and can provide on-site support for hardware-related issues or datacenter work.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 border border-blue-200 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Need Infrastructure Management?
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          We'll assess your current infrastructure, identify optimization opportunities, and help you maintain 
          reliable, well-documented systems. Get in touch to discuss your environment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Contact OHBENCORE
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </section>
    </div>
  );
}

