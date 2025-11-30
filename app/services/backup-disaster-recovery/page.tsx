import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/seo';
import Link from 'next/link';

export const metadata: Metadata = createPageMetadata({
  title: 'Backup & Disaster Recovery Services',
  description:
    'Professional backup and disaster recovery solutions using Veeam, NAS/SAN, tape, and cloud storage. Protect your business data with tested backup strategies and clear recovery procedures.',
  path: '/services/backup-disaster-recovery',
});

export default function BackupDisasterRecoveryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      {/* Intro Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Backup & Disaster Recovery Services
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          Protect your business from data loss with comprehensive backup and disaster recovery solutions.
        </p>
        <p className="text-lg text-gray-600">
          OHBENCORE designs, implements, and tests backup strategies for SMBs and mid-size organizations 
          that can't afford downtime or data loss. We work with on-premises infrastructure, cloud storage, 
          and hybrid environments to ensure your critical systems can be restored when needed.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Design backup strategies</strong> based on your Recovery Point Objective (RPO) and 
              Recovery Time Objective (RTO). We define what needs to be backed up, how often, and where 
              copies are stored.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Implement Veeam Backup & Replication</strong> for virtual machines and physical servers. 
              Veeam provides reliable, enterprise-grade backup with fast recovery options.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Configure NAS/SAN backups and tape libraries</strong> for long-term retention and 
              offsite storage. Tape remains a cost-effective option for archival and compliance requirements.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Set up offsite and object storage</strong> using S3-compatible services (Wasabi, 
              Backblaze B2, AWS S3, etc.) for geographic redundancy and ransomware protection.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Backup critical applications</strong> including file servers, databases (SQL Server, 
              PostgreSQL, MySQL), ERP systems, and Active Directory.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Test restore procedures</strong> regularly to ensure backups work when you need them. 
              We document recovery steps and verify data integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Use</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Veeam Backup & Replication</h3>
            <p className="text-gray-600 text-sm">
              Industry-leading backup solution for VMware, Hyper-V, and physical servers. Supports instant 
              VM recovery, granular file restore, and replication to DR sites.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">NAS/SAN Storage</h3>
            <p className="text-gray-600 text-sm">
              Network-attached and SAN storage from vendors like Synology, QNAP, Dell EMC, and HPE for 
              backup repositories and long-term retention.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Tape Libraries</h3>
            <p className="text-gray-600 text-sm">
              LTO tape systems (IBM TS3100, HPE StoreEver) for offline archival, compliance retention, 
              and air-gapped backup copies.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">S3/Object Storage</h3>
            <p className="text-gray-600 text-sm">
              Cloud object storage from Wasabi, Backblaze B2, AWS S3, Azure Blob, or S3-compatible providers 
              for offsite backup copies and immutable storage.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assess Your Environment</h3>
              <p className="text-gray-600">
                We review your current infrastructure, identify critical systems, and understand your 
                business requirements. We evaluate existing backup solutions (if any) and document gaps.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Define RPO/RTO and Backup Policies</h3>
              <p className="text-gray-600">
                We work with you to define acceptable data loss (RPO) and recovery time (RTO) for each 
                system. Based on this, we design backup schedules, retention policies, and storage targets.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implement Backup Jobs and Offsite Copies</h3>
              <p className="text-gray-600">
                We configure backup software, set up repositories (local NAS, tape, cloud), and implement 
                the 3-2-1 rule: 3 copies of data, on 2 different media types, with 1 offsite copy.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              4
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Test Restore Scenarios</h3>
              <p className="text-gray-600">
                We perform test restores of files, databases, and full VMs to verify backup integrity. 
                We document recovery procedures and ensure your team knows how to initiate a restore.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              5
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Monitoring and DR Tests (Optional)</h3>
              <p className="text-gray-600">
                We can provide ongoing monitoring of backup jobs, alert on failures, and conduct periodic 
                disaster recovery tests to ensure your plan remains effective.
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
              <span><strong>Documented backup and disaster recovery plan</strong> with clear RPO/RTO objectives and recovery procedures.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Regular, automated backups</strong> with retention policies aligned to your business needs and compliance requirements.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Tested restore procedures</strong> so you're confident backups work when you need them.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Offsite backup copies</strong> for protection against site-level disasters and ransomware.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Clear point of contact</strong> for backup issues and disaster recovery incidents.</span>
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
              How often should we backup our servers?
            </h3>
            <p className="text-gray-600">
              It depends on your RPO (Recovery Point Objective). For most businesses, daily backups are 
              standard, with critical systems backed up every few hours. File servers and databases with 
              frequent changes may need hourly or continuous replication. We help you determine the right 
              frequency based on your data change rate and acceptable data loss window.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Can you work with our existing NAS or tape library?
            </h3>
            <p className="text-gray-600">
              Yes. We work with existing storage infrastructure from vendors like Synology, QNAP, Dell EMC, 
              HPE, and IBM. If your current hardware is compatible and meets capacity requirements, we'll 
              integrate it into the backup solution. If upgrades are needed, we'll recommend options.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Do you support both on-premises and cloud backups?
            </h3>
            <p className="text-gray-600">
              Absolutely. We design hybrid backup solutions that combine local backups (for fast recovery) 
              with cloud copies (for offsite protection). You can backup to local NAS, replicate to tape, 
              and send copies to S3-compatible cloud storage—all from one platform like Veeam.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              What's the 3-2-1 backup rule?
            </h3>
            <p className="text-gray-600">
              The 3-2-1 rule is a backup best practice: maintain <strong>3 copies</strong> of your data, 
              on <strong>2 different types of media</strong> (e.g., disk and tape, or local and cloud), 
              with <strong>1 copy offsite</strong>. This protects against hardware failure, site disasters, 
              and ransomware attacks. We implement this rule in every backup design.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 border border-blue-200 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Need a Backup & DR Review?
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          We'll assess your current backup strategy, identify gaps, and provide recommendations to protect 
          your business data. Get in touch to discuss your environment.
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

