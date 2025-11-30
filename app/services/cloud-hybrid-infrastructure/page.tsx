import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/seo';
import Link from 'next/link';

export const metadata: Metadata = createPageMetadata({
  title: 'Cloud & Hybrid Infrastructure',
  description:
    'Cloud migration and hybrid infrastructure consulting across AWS, Azure, OVH, Hetzner, DigitalOcean, Contabo, and GCP. Seamless connectivity between on-premise and cloud environments.',
  path: '/services/cloud-hybrid-infrastructure',
});

export default function CloudHybridInfrastructurePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      {/* Intro Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Cloud & Hybrid Infrastructure
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          Cloud migration and hybrid infrastructure solutions connecting your on-premise environment with AWS, Azure, OVH, and other cloud platforms.
        </p>
        <p className="text-lg text-gray-600">
          OHBENCORE helps organizations adopt cloud services while maintaining on-premise infrastructure where needed. 
          We design hybrid architectures, migrate workloads to cloud platforms (AWS, Azure, GCP, OVH, Hetzner, DigitalOcean, 
          Contabo), set up secure connectivity (VPN, Direct Connect, ExpressRoute), and optimize costs.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Design hybrid cloud architectures</strong> that combine on-premise infrastructure with public cloud 
              resources. We determine which workloads stay on-premise and which move to cloud based on cost, performance, 
              and compliance requirements.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Migrate workloads to cloud</strong> using lift-and-shift (VM migration), re-platforming (containers, 
              managed services), or re-architecture approaches. We minimize downtime and validate functionality post-migration.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Set up secure connectivity</strong> between on-premise and cloud using site-to-site VPN (IPsec, 
              WireGuard), AWS Direct Connect, Azure ExpressRoute, or dedicated private connections to cloud providers.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Deploy cloud infrastructure</strong> including virtual networks (VPCs, VNets), compute instances (EC2, 
              Azure VMs), storage (S3, Azure Blob), databases (RDS, Azure SQL), and load balancers.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Optimize cloud costs</strong> by right-sizing instances, using reserved instances or savings plans, 
              implementing auto-scaling, and cleaning up unused resources.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Implement backup and DR in cloud</strong> using cloud-native backup services, cross-region replication, 
              and hybrid backup solutions that protect both on-premise and cloud workloads.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Use</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Major Cloud Providers</h3>
            <p className="text-gray-600 text-sm">
              AWS (EC2, S3, RDS, VPC), Microsoft Azure (Virtual Machines, Blob Storage, VNet), Google Cloud Platform (Compute Engine, Cloud Storage).
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">European/Cost-Effective Providers</h3>
            <p className="text-gray-600 text-sm">
              OVH Cloud, Hetzner Cloud, DigitalOcean, Contabo, and other regional providers offering competitive pricing and GDPR compliance.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Hybrid Connectivity</h3>
            <p className="text-gray-600 text-sm">
              Site-to-site VPN (IPsec, WireGuard), AWS Direct Connect, Azure ExpressRoute, and SD-WAN solutions for multi-cloud connectivity.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Infrastructure as Code</h3>
            <p className="text-gray-600 text-sm">
              Terraform for multi-cloud provisioning, AWS CloudFormation, Azure ARM templates, and Ansible for configuration management.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assess Cloud Readiness</h3>
              <p className="text-gray-600">
                We inventory your workloads, evaluate which are good candidates for cloud migration, estimate costs, and 
                identify dependencies and connectivity requirements.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design Hybrid Architecture</h3>
              <p className="text-gray-600">
                We create a hybrid design showing which workloads migrate to cloud, which stay on-premise, how they'll 
                communicate (VPN, private links), and how backup/DR will work across both environments.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Set Up Cloud Foundation</h3>
              <p className="text-gray-600">
                We provision cloud accounts, configure networking (VPCs/VNets), establish VPN connectivity, set up identity 
                and access management (IAM), and configure logging and monitoring.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              4
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Migrate and Test</h3>
              <p className="text-gray-600">
                We migrate workloads in phases, test functionality, performance, and connectivity, and cut over to production 
                with minimal downtime.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              5
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimize and Support</h3>
              <p className="text-gray-600">
                We monitor costs, right-size resources, implement auto-scaling where beneficial, and provide ongoing support 
                for expansion, troubleshooting, and cost optimization.
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
              <span><strong>Flexible hybrid architecture</strong> leveraging the best of on-premise and cloud environments.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Secure connectivity</strong> between on-premise and cloud using VPN or dedicated connections.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Cost optimization</strong> through right-sizing, reserved instances, and cleanup of unused resources.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Scalability</strong> to grow infrastructure on demand without large upfront capital investment.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Documentation and training</strong> on managing your hybrid environment.</span>
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
              Should we use AWS, Azure, or another cloud provider?
            </h3>
            <p className="text-gray-600">
              It depends on your needs. AWS has the broadest feature set, Azure integrates well with Microsoft environments, 
              GCP is strong for data/AI workloads. For cost-sensitive SMBs, providers like OVH, Hetzner, and DigitalOcean offer 
              excellent value. We'll help you evaluate based on your workloads, budget, and existing technology stack.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How much does it cost to run infrastructure in the cloud?
            </h3>
            <p className="text-gray-600">
              Cloud costs vary widely based on instance types, storage, data transfer, and services used. We provide cost 
              estimates before migration and help you optimize costs through right-sizing, reserved pricing, and cleanup of 
              unused resources. Many SMBs find cloud more cost-effective than maintaining their own datacenter.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Can we keep some systems on-premise and use cloud for others?
            </h3>
            <p className="text-gray-600">
              Absolutely. That's the hybrid approach we specialize in. Common patterns: keep sensitive databases on-premise, 
              run web applications in cloud; keep core servers on-premise, use cloud for DR/backup; or use cloud for 
              development/testing while production stays on-premise.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How secure is the connection between on-premise and cloud?
            </h3>
            <p className="text-gray-600">
              Very secure. We use encrypted VPN tunnels (IPsec, WireGuard) or dedicated private connections (AWS Direct Connect, 
              Azure ExpressRoute). For highly sensitive data, we can implement additional security layers like private endpoints, 
              network segmentation, and firewall rules. See our{' '}
              <Link href="/services/security-hardening" className="text-blue-600 hover:underline">
                Security & Hardening service
              </Link>{' '}
              for details on securing hybrid environments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 border border-blue-200 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Explore Cloud or Hybrid Infrastructure?
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          We'll help you design a hybrid architecture, migrate workloads to cloud, and establish secure connectivity 
          between your on-premise and cloud environments. Contact us to discuss your cloud strategy.
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
