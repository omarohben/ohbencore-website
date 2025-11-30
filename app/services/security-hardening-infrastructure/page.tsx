import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/seo';
import Link from 'next/link';

export const metadata: Metadata = createPageMetadata({
  title: 'Security & Hardening for Infrastructure',
  description:
    'Infrastructure security assessments and hardening services. Firewall rule design, OS hardening, network segmentation, backup protection, and security best practices implementation.',
  path: '/services/security-hardening-infrastructure',
});

export default function SecurityHardeningInfrastructurePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      {/* Intro Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Security & Hardening for Infrastructure
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          Infrastructure security assessments, hardening, and implementation of security best practices.
        </p>
        <p className="text-lg text-gray-600">
          OHBENCORE helps organizations strengthen their IT security posture through practical, foundational security measures. 
          We assess your infrastructure, design and implement firewall rules, harden operating systems, segment networks, 
          protect backups, and apply security best practices appropriate for SMB and mid-size environments.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Assess your security posture</strong> by reviewing firewall rules, server configurations, network 
              segmentation, backup security, password policies, and patch management practices.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Design and implement firewall rules</strong> following the principle of least privilege. We create 
              rule sets that allow necessary traffic while blocking everything else, implement IPS/IDS, and document policies.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Harden operating systems</strong> by disabling unnecessary services, applying security baselines (CIS 
              benchmarks), configuring host firewalls, implementing strong password policies, and enabling audit logging.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Implement network segmentation</strong> using VLANs and firewall zones to isolate sensitive systems, 
              separate guest networks, and limit lateral movement in case of a breach.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Protect backup infrastructure</strong> by air-gapping backups, implementing immutability where possible, 
              using separate credentials for backup systems, and testing restoration procedures regularly.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Establish security policies</strong> including patch management procedures, password policies, access 
              control guidelines, and incident response plans appropriate for your organization size.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Use</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Firewall Platforms</h3>
            <p className="text-gray-600 text-sm">
              FortiGate, pfSense, Cisco ASA/Firepower, and other enterprise firewalls with IPS/IDS, application control, and VPN capabilities.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">OS Hardening Tools</h3>
            <p className="text-gray-600 text-sm">
              CIS benchmarks, Group Policy (Windows), Ansible/Salt for configuration management, and security scanning tools (Nessus, OpenVAS).
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Network Segmentation</h3>
            <p className="text-gray-600 text-sm">
              VLANs on managed switches, firewall zones and policies, micro-segmentation for critical systems, and DMZ configurations.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Backup Security</h3>
            <p className="text-gray-600 text-sm">
              Veeam immutability features, offline/air-gapped backups, separate admin credentials, and encryption at rest and in transit.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Assessment</h3>
              <p className="text-gray-600">
                We review your current security controls: firewall rules, server configurations, patch status, network 
                architecture, backup security, and password policies to identify gaps.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Prioritize Recommendations</h3>
              <p className="text-gray-600">
                We create a prioritized list of security improvements based on risk, cost, and business impact. We focus 
                on foundational controls that provide the most value for SMBs.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implement Security Controls</h3>
              <p className="text-gray-600">
                We implement firewall rules, harden servers, configure network segmentation, secure backups, and apply 
                security baselines. Changes are tested before production deployment.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              4
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Test and Validate</h3>
              <p className="text-gray-600">
                We verify that security controls are working correctly, test firewall rules, validate segmentation, and 
                ensure legitimate traffic isn't blocked.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              5
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Document and Train</h3>
              <p className="text-gray-600">
                We document security policies, provide runbooks for common security tasks, and train your team on 
                maintaining security controls.
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
              <span><strong>Reduced attack surface</strong> through well-designed firewall rules and network segmentation.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Hardened servers</strong> with unnecessary services disabled, strong password policies, and security baselines applied.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Protected backups</strong> that are secure from ransomware and unauthorized access.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Clear security policies</strong> for patch management, access control, and incident response.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Documented security controls</strong> for audits, compliance, or insurance requirements.</span>
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
              Do we need a formal security audit or penetration test?
            </h3>
            <p className="text-gray-600">
              For most SMBs, a thorough infrastructure security assessment and hardening (what we provide) is a great starting 
              point. Formal penetration tests are valuable but often expensive and may not be necessary unless required for 
              compliance or insurance. We focus on foundational controls that address 80% of common risks.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How do we protect against ransomware?
            </h3>
            <p className="text-gray-600">
              Multi-layered approach: firewall with IPS, OS hardening, patch management, network segmentation, user training, 
              and most importantly, secure backups (immutability, air-gapping, separate credentials). See our{' '}
              <Link href="/services/backup-disaster-recovery" className="text-blue-600 hover:underline">
                Backup & DR service
              </Link>{' '}
              for ransomware-resistant backup strategies.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Can you help us meet compliance requirements (PCI, HIPAA, etc.)?
            </h3>
            <p className="text-gray-600">
              We can implement many of the technical controls required for compliance (firewall rules, encryption, access 
              controls, audit logging, segmentation). However, formal compliance certification requires specialized auditors. 
              We can work with your compliance consultant to implement their recommendations.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              What if we get breached or have a security incident?
            </h3>
            <p className="text-gray-600">
              We can help with basic incident response (isolating affected systems, reviewing logs, restoring from backups). 
              For major breaches, you may need specialized forensics experts and legal counsel. We'll help you develop an 
              incident response plan so you know what to do if something happens.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 border border-blue-200 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Need a Security Assessment or Hardening Project?
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          We'll review your infrastructure security, implement firewall rules, harden servers, and apply security best 
          practices to reduce your risk. Contact us to discuss your security needs.
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
