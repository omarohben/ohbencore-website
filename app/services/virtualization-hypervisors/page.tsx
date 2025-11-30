import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/seo';
import Link from 'next/link';

export const metadata: Metadata = createPageMetadata({
  title: 'Virtualization & Hypervisors (VMware, Hyper-V, Proxmox)',
  description:
    'Expert virtualization services using VMware ESXi/vCenter, Hyper-V, and Proxmox VE. Design, deploy, and optimize your virtual infrastructure for maximum efficiency and reliability.',
  path: '/services/virtualization-hypervisors',
});

export default function VirtualizationHypervisorsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      {/* Intro Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Virtualization & Hypervisors (VMware, Hyper-V, Proxmox)
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          Design, deployment, and optimization of virtualized infrastructure using VMware, Hyper-V, and Proxmox platforms.
        </p>
        <p className="text-lg text-gray-600">
          OHBENCORE helps SMBs and mid-size organizations maximize their server infrastructure through virtualization. 
          We design and deploy VMware ESXi/vCenter, Microsoft Hyper-V, and Proxmox VE environments, migrate physical 
          servers to virtual machines, and optimize resource allocation for better performance and cost efficiency.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Design and deploy virtualization platforms</strong> including VMware ESXi with vCenter Server, 
              Microsoft Hyper-V with failover clustering, and Proxmox VE with HA configurations.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Migrate physical servers to virtual machines (P2V)</strong> using tools like Veeam Quick Migration, 
              VMware Converter, and Hyper-V migration utilities. We minimize downtime and validate functionality post-migration.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Optimize VM resource allocation</strong> by right-sizing CPU, memory, and storage based on actual 
              workload usage. We eliminate resource waste and improve performance.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Implement high availability (HA) and fault tolerance</strong> to minimize downtime. We configure 
              vSphere HA, Hyper-V Live Migration, and Proxmox HA for automatic VM restart on host failures.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Plan storage for virtual environments</strong> using local storage, SANs (iSCSI, FC), or NAS. 
              We configure datastores, LUNs, and storage policies for optimal performance.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Integrate with backup solutions</strong> to protect VMs using application-aware backups, snapshots, 
              and replication. See our{' '}
              <Link href="/services/backup-disaster-recovery" className="text-blue-600 hover:underline">
                Backup & DR service
              </Link>{' '}
              for details.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Use</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">VMware vSphere</h3>
            <p className="text-gray-600 text-sm">
              ESXi hypervisor, vCenter Server for centralized management, vSphere HA, vMotion for live migration, and DRS for load balancing.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Microsoft Hyper-V</h3>
            <p className="text-gray-600 text-sm">
              Hyper-V Server or Windows Server role, Failover Clustering, Live Migration, Replica for DR, and System Center Virtual Machine Manager (SCVMM).
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Proxmox VE</h3>
            <p className="text-gray-600 text-sm">
              Open-source virtualization platform with KVM hypervisor, LXC containers, integrated backup, HA clustering, and web-based management.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Storage Integration</h3>
            <p className="text-gray-600 text-sm">
              iSCSI, NFS, SMB/CIFS for network storage, local RAID configurations, and SAN connectivity (Fibre Channel where applicable).
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assess Your Current Infrastructure</h3>
              <p className="text-gray-600">
                We inventory your physical and virtual servers, review hardware specs, storage capacity, and network 
                topology to understand your starting point and requirements.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design the Virtualization Platform</h3>
              <p className="text-gray-600">
                We select the appropriate hypervisor (VMware, Hyper-V, or Proxmox), plan HA/clustering if needed, 
                design storage architecture, and define resource pools and VM sizing.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deploy and Configure</h3>
              <p className="text-gray-600">
                We install hypervisors, configure networking (VLANs, virtual switches), set up shared storage, create 
                VM templates, and migrate physical servers to VMs using P2V tools.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              4
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Test and Optimize</h3>
              <p className="text-gray-600">
                We verify VM performance, test HA failover, validate backup integration, and fine-tune resource 
                allocation based on real-world usage patterns.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              5
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Handoff and Support</h3>
              <p className="text-gray-600">
                We document the environment, train your team on management tools, and provide ongoing support 
                for updates, expansion, and troubleshooting.
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
              <span><strong>Efficient resource utilization</strong> by consolidating multiple physical servers onto fewer hosts, reducing hardware costs and power consumption.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>High availability</strong> with automatic VM restart on hardware failures and live migration capabilities.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Faster provisioning</strong> of new servers using templates and cloning instead of manual OS installations.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Simplified backup and DR</strong> with VM-level backups, snapshots, and replication capabilities.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Documented architecture</strong> with VM inventory, resource allocation, and configuration details for future reference.</span>
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
              Which hypervisor should I choose: VMware, Hyper-V, or Proxmox?
            </h3>
            <p className="text-gray-600">
              It depends on your needs and budget. VMware vSphere is the industry standard with excellent features but 
              requires licensing. Hyper-V is a good choice if you're already in the Microsoft ecosystem and have Windows 
              Server licenses. Proxmox VE is open-source and cost-effective for SMBs. We'll help you evaluate based on 
              your workloads, budget, and existing infrastructure.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How much downtime is required for a P2V migration?
            </h3>
            <p className="text-gray-600">
              For most servers, we can perform "hot" migrations with minimal downtime (typically 5-15 minutes for final 
              sync and cutover). Critical applications may require a maintenance window for testing. We plan migrations 
              to minimize business impact and always have a rollback plan.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Can you help with licensing for VMware or Hyper-V?
            </h3>
            <p className="text-gray-600">
              Yes. We can advise on licensing options for VMware vSphere (Essentials, Standard, Enterprise Plus) and 
              Microsoft licenses (Windows Server Datacenter for unlimited VMs, or Standard for limited VMs). We'll help 
              you understand costs and choose the most cost-effective option for your needs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              What if my virtualization host fails?
            </h3>
            <p className="text-gray-600">
              With HA configurations (vSphere HA, Hyper-V Failover Clustering, Proxmox HA), VMs automatically restart 
              on other hosts in the cluster. For single-host setups, we ensure VMs are backed up and can be restored to 
              new hardware. We also recommend monitoring (see our{' '}
              <Link href="/services/monitoring-observability" className="text-blue-600 hover:underline">
                Monitoring & Observability service
              </Link>
              ) to detect host issues early.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 border border-blue-200 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Virtualize Your Infrastructure?
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          We'll design and deploy a virtualization platform tailored to your needs, migrate your servers, and ensure 
          optimal performance and reliability. Contact us to get started.
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
