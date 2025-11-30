import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/seo';
import Link from 'next/link';

export const metadata: Metadata = createPageMetadata({
  title: 'Server Administration & Management',
  description:
    'Expert Windows and Linux server administration including Active Directory, DNS, DHCP, file servers, and application servers. Ensure optimal performance, security, and uptime.',
  path: '/services/server-administration-management',
});

export default function ServerAdministrationManagementPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      {/* Intro Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Server Administration & Management
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          Expert server administration for Windows and Linux environments, ensuring optimal performance, security, and uptime.
        </p>
        <p className="text-lg text-gray-600">
          OHBENCORE provides comprehensive server administration services for SMBs and mid-size organizations. 
          We manage Windows Server roles (Active Directory, DNS, DHCP, file/print servers), Linux servers, 
          patch management, OS hardening, and troubleshooting to keep your server infrastructure running smoothly.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Manage Windows Server roles and features</strong> including Active Directory (domain controllers, 
              user/group management), DNS, DHCP, file/print servers, and Group Policy.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Linux server administration</strong> for distributions like Ubuntu Server, Debian, CentOS, and 
              Rocky Linux. We handle package management, service configuration, and system updates.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Patch management and OS hardening</strong> to keep servers secure and up-to-date. We test patches 
              in non-production environments before deployment and implement security baselines.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Troubleshoot performance and stability issues</strong> including high CPU/RAM usage, disk I/O 
              bottlenecks, application crashes, and service failures.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Configure file servers and shared storage</strong> using SMB/CIFS for Windows clients and NFS 
              for Linux/Unix systems, with proper permissions and access controls.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Integrate servers with backup and monitoring systems</strong> to ensure data protection and 
              proactive alerting on issues.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Use</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Windows Server</h3>
            <p className="text-gray-600 text-sm">
              Active Directory, DNS, DHCP, File Services, Print Services, Group Policy, and Windows Server Update Services (WSUS).
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Linux Distributions</h3>
            <p className="text-gray-600 text-sm">
              Ubuntu Server, Debian, CentOS, Rocky Linux, and other enterprise Linux distributions for application hosting.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">File Sharing Protocols</h3>
            <p className="text-gray-600 text-sm">
              SMB/CIFS for Windows file sharing, NFS for Linux/Unix, and Samba for cross-platform file services.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Backup Integration</h3>
            <p className="text-gray-600 text-sm">
              Integration with Veeam and other backup solutions to protect server data and enable fast recovery.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assess Server Environment</h3>
              <p className="text-gray-600">
                We review your server infrastructure, identify the roles and services running, and document the 
                current configuration, patching status, and any known issues.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Plan Improvements and Hardening</h3>
              <p className="text-gray-600">
                We define a plan to address issues: apply missing patches, implement security baselines, standardize 
                configurations, and optimize performance settings.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implement Changes</h3>
              <p className="text-gray-600">
                We apply patches, configure services, implement hardening policies, and integrate servers with 
                monitoring and backup systems. Changes are tested before production deployment.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              4
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Test and Verify</h3>
              <p className="text-gray-600">
                We verify that services are working correctly, performance is improved, and monitoring/backup 
                integration is functioning as expected.
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
                We can provide ongoing server management including monthly patching, performance monitoring, and 
                troubleshooting support.
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
              <span><strong>Stable, secure servers</strong> with patches applied, security baselines implemented, and proper configurations.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Documented server roles and configurations</strong> for easier troubleshooting and future changes.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Improved performance</strong> through proper resource allocation and tuning.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Integrated monitoring and backups</strong> to protect data and detect issues early.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Clear troubleshooting procedures</strong> for common server issues.</span>
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
              Do you support both Windows and Linux servers?
            </h3>
            <p className="text-gray-600">
              Yes. We have experience managing both Windows Server environments (Active Directory, file servers, 
              application servers) and Linux servers (Ubuntu, Debian, CentOS, Rocky Linux). Most organizations 
              run a mix of both, and we're comfortable in hybrid environments.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Can you help migrate from physical to virtual servers?
            </h3>
            <p className="text-gray-600">
              Absolutely. We perform physical-to-virtual (P2V) migrations using tools like Veeam or VMware Converter. 
              This is often part of a broader virtualization project. See our{' '}
              <Link href="/services/virtualization-hypervisors" className="text-blue-600 hover:underline">
                Virtualization & Hypervisors
              </Link>{' '}
              service for more details.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How do you handle server patching?
            </h3>
            <p className="text-gray-600">
              We test patches in a non-production environment first, then deploy to production during maintenance windows. 
              For Windows, we use WSUS or direct Windows Update. For Linux, we use package managers (apt, yum/dnf) with 
              proper testing. We coordinate with you on scheduling to minimize disruption.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              What if our server crashes or has a critical issue?
            </h3>
            <p className="text-gray-600">
              For clients with ongoing support agreements, we provide incident response based on agreed SLAs. We troubleshoot 
              remotely when possible and can provide on-site support if hardware replacement or datacenter work is needed. 
              Proper backups (see our{' '}
              <Link href="/services/backup-disaster-recovery" className="text-blue-600 hover:underline">
                Backup & DR service
              </Link>
              ) ensure we can restore quickly if needed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 border border-blue-200 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Need Server Administration Support?
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          We'll review your server environment, apply patches and security hardening, and ensure your Windows and 
          Linux servers are running optimally. Contact us to discuss your needs.
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
