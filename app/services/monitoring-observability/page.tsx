import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/seo';
import Link from 'next/link';

export const metadata: Metadata = createPageMetadata({
  title: 'Monitoring & Observability',
  description:
    'Comprehensive infrastructure monitoring using Zabbix and modern observability tools. Proactive alerting for servers, network devices, backups, and applications.',
  path: '/services/monitoring-observability',
});

export default function MonitoringObservabilityPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      {/* Intro Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Monitoring & Observability
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          Comprehensive infrastructure monitoring and alerting using Zabbix and modern observability tools.
        </p>
        <p className="text-lg text-gray-600">
          OHBENCORE implements monitoring and observability solutions that give you full visibility into your IT infrastructure. 
          We deploy Zabbix-based monitoring for servers, network devices, storage, backups, and applications, configure proactive 
          alerts, and build dashboards so you can see system health at a glance.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Deploy and configure Zabbix monitoring</strong> including server installation, agent deployment, 
              SNMP monitoring for network devices, and template configuration for common systems (Linux, Windows, VMware, etc.).
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Monitor servers and VMs</strong> for CPU, memory, disk usage, network traffic, and service availability. 
              We track key metrics and alert when thresholds are exceeded.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Monitor network infrastructure</strong> including switches, routers, firewalls, and access points using 
              SNMP polling. We track interface status, bandwidth utilization, errors, and device health.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Monitor backup jobs and storage</strong> by integrating with Veeam, other backup solutions, and storage 
              systems to alert on failed backups, low disk space, or degraded RAID arrays.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Configure alerting and notifications</strong> via email, SMS, or webhooks to ticketing/chat systems 
              (Slack, Teams, PagerDuty). We define escalation rules based on severity and business hours.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Build custom dashboards</strong> showing infrastructure health, performance trends, and capacity planning 
              data. We create role-specific views for executives, IT staff, and operations teams.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Use</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Zabbix</h3>
            <p className="text-gray-600 text-sm">
              Enterprise-grade open-source monitoring with agent-based monitoring, SNMP, IPMI, JMX support, flexible alerting, and powerful dashboards.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Prometheus & Grafana</h3>
            <p className="text-gray-600 text-sm">
              Modern monitoring stack for cloud-native and containerized environments, with time-series metrics and beautiful visualizations.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Log Aggregation</h3>
            <p className="text-gray-600 text-sm">
              Syslog collection, ELK stack (Elasticsearch, Logstash, Kibana), or Graylog for centralized log management and analysis.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Integration Tools</h3>
            <p className="text-gray-600 text-sm">
              Webhooks to Slack/Teams, PagerDuty for on-call alerting, and APIs for custom integrations and automation workflows.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Inventory Your Infrastructure</h3>
              <p className="text-gray-600">
                We catalog all servers, network devices, storage systems, backups, and applications that need monitoring. 
                We identify critical services and define alerting priorities.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deploy Monitoring Platform</h3>
              <p className="text-gray-600">
                We install Zabbix server (or other monitoring tools), configure databases, set up web interface, and 
                deploy agents on monitored systems.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Configure Monitoring and Alerts</h3>
              <p className="text-gray-600">
                We configure hosts, apply templates, set up SNMP monitoring for network gear, define alert thresholds, and 
                configure notification channels (email, SMS, webhooks).
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              4
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Build Dashboards and Tune Alerts</h3>
              <p className="text-gray-600">
                We create dashboards showing key metrics, performance trends, and system health. We fine-tune alert thresholds 
                to reduce false positives while catching real issues.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              5
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Training and Handoff</h3>
              <p className="text-gray-600">
                We train your team on using the monitoring platform, interpreting alerts, and adding new hosts. We provide 
                documentation and ongoing support for expansion and optimization.
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
              <span><strong>Proactive issue detection</strong> with alerts notifying you before users complain or systems fail.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Complete visibility</strong> into servers, network, storage, backups, and applications from a single platform.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Performance trends and capacity planning</strong> data to help you plan infrastructure growth.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Reduced downtime</strong> by catching issues early and providing data for faster troubleshooting.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Automated alerting</strong> via email, SMS, or integration with your chat/ticketing systems.</span>
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
              Why Zabbix over other monitoring tools?
            </h3>
            <p className="text-gray-600">
              Zabbix is open-source (no licensing costs), enterprise-grade, and supports a wide range of monitoring methods 
              (agent, SNMP, IPMI, JMX, custom scripts). It's ideal for SMBs that want powerful monitoring without per-device 
              licensing. For cloud-native environments, we may recommend Prometheus/Grafana or other tools based on your needs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Can you monitor our cloud infrastructure as well?
            </h3>
            <p className="text-gray-600">
              Yes. We integrate monitoring for AWS, Azure, GCP, and other cloud platforms using APIs, agents, or cloud-native 
              tools (CloudWatch, Azure Monitor). See our{' '}
              <Link href="/services/cloud-hybrid-infrastructure" className="text-blue-600 hover:underline">
                Cloud & Hybrid Infrastructure service
              </Link>{' '}
              for details on hybrid monitoring setups.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How do we avoid getting too many alerts?
            </h3>
            <p className="text-gray-600">
              We fine-tune alert thresholds, implement dependencies (don't alert on VMs if the host is down), and use alert 
              suppression during maintenance windows. We also configure escalation rules so minor issues don't page you at 3 AM.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Can monitoring integrate with our automation workflows?
            </h3>
            <p className="text-gray-600">
              Absolutely. Zabbix and other monitoring tools can trigger webhooks or scripts for automated remediation. See our{' '}
              <Link href="/services/monitoring-automation-ai" className="text-blue-600 hover:underline">
                Monitoring, Automation & AI service
              </Link>{' '}
              for details on automated incident response and self-healing systems.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 border border-blue-200 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Implement Comprehensive Monitoring?
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          We'll deploy Zabbix or other monitoring tools, configure alerts, and build dashboards to give you full visibility 
          into your IT infrastructure. Contact us to get started.
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
