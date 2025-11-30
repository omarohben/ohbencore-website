import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/seo';
import Link from 'next/link';

export const metadata: Metadata = createPageMetadata({
  title: 'Monitoring, Automation & AI for IT',
  description:
    'Automate IT operations using monitoring, n8n workflows, LLMs, and AI agents. Reduce manual tasks, automate incident response, and leverage AI for smarter infrastructure management.',
  path: '/services/monitoring-automation-ai',
});

export default function MonitoringAutomationAiPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      {/* Intro Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Monitoring, Automation & AI for IT
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          Automate routine IT and operational tasks using monitoring data, n8n workflows, LLMs, and AI agents.
        </p>
        <p className="text-lg text-gray-600">
          OHBENCORE helps organizations leverage automation and AI to reduce manual toil and improve IT operations. We integrate 
          monitoring systems with workflow automation platforms (n8n), build automated incident response workflows, and experiment 
          with AI agents and LLMs to enhance decision-making and automate complex tasks.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Build automated workflows with n8n</strong> to respond to monitoring alerts, create tickets, send 
              notifications, run remediation scripts, and integrate disparate systems (email, Slack, ticketing, APIs).
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Automate incident response</strong> by triggering workflows when monitoring detects issues: restart 
              services automatically, clear disk space, escalate to on-call staff, or run diagnostic commands.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Integrate AI and LLMs</strong> for tasks like log analysis, alert triage, generating documentation, 
              and providing natural language interfaces to IT systems. We use models like GPT-4, Claude, or open-source LLMs.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Build AI agents for IT operations</strong> that can query monitoring data, run commands, search 
              documentation, and provide recommendations or automated fixes for common issues.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Automate reporting and notifications</strong> by pulling data from monitoring, backup systems, and 
              infrastructure tools to generate daily/weekly reports, SLA metrics, or capacity planning insights.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Experiment with emerging AI tools</strong> and provide guidance on where AI can add value vs. where 
              traditional automation is more appropriate. We focus on practical, ROI-positive use cases.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Use</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">n8n Workflow Automation</h3>
            <p className="text-gray-600 text-sm">
              Open-source workflow automation platform with 400+ integrations. We build workflows triggered by webhooks, schedules, or monitoring events.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Large Language Models (LLMs)</h3>
            <p className="text-gray-600 text-sm">
              GPT-4, Claude, Llama, Mixtral, and other models for log analysis, alert triage, documentation generation, and natural language queries.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Monitoring Integration</h3>
            <p className="text-gray-600 text-sm">
              Zabbix, Prometheus, Grafana, and other monitoring tools with webhook/API integration for triggering automation workflows.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Scripting & Automation</h3>
            <p className="text-gray-600 text-sm">
              Python, PowerShell, Bash for remediation scripts, Ansible for configuration automation, and custom integrations.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Identify Automation Opportunities</h3>
              <p className="text-gray-600">
                We review your IT operations to find repetitive manual tasks: alert responses, ticket creation, report 
                generation, system checks, and other toil that can be automated.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design Automation Workflows</h3>
              <p className="text-gray-600">
                We design n8n workflows or scripts that connect your monitoring, ticketing, communication, and infrastructure 
                tools. We define triggers, actions, and error handling.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implement and Test</h3>
              <p className="text-gray-600">
                We build workflows, deploy n8n or other automation platforms, integrate with your systems, and test thoroughly 
                in non-production environments before going live.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              4
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Experiment with AI (Where Appropriate)</h3>
              <p className="text-gray-600">
                For suitable use cases, we integrate AI/LLMs for log analysis, alert summarization, or interactive queries. 
                We focus on practical value and avoid "AI for AI's sake."
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              5
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Monitor and Iterate</h3>
              <p className="text-gray-600">
                We monitor automation workflows for errors, measure time saved, and refine over time. We document workflows 
                so your team can maintain and extend them.
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
              <span><strong>Reduced manual toil</strong> with automated responses to common monitoring alerts and routine tasks.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Faster incident response</strong> with automated remediation for common issues and immediate escalation of critical alerts.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Better visibility</strong> through automated reporting, dashboards, and AI-powered insights from monitoring data.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Practical AI integration</strong> where it makes sense, avoiding hype while leveraging real benefits.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Documented workflows</strong> that your team can maintain and extend as your needs evolve.</span>
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
              What kinds of tasks can be automated?
            </h3>
            <p className="text-gray-600">
              Common examples: restarting services when they fail, clearing disk space when partitions fill up, creating tickets 
              from monitoring alerts, sending daily/weekly reports, running health checks on schedules, and escalating critical 
              issues to on-call staff. We start with high-frequency, low-risk tasks.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Is AI really useful for IT operations, or is it just hype?
            </h3>
            <p className="text-gray-600">
              Both. There's definitely hype, but LLMs can provide real value for specific tasks: summarizing logs, translating 
              technical alerts into plain language, analyzing patterns in monitoring data, and providing interactive Q&A interfaces 
              to documentation. We help you identify where AI adds value vs. where traditional automation is better and cheaper.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              What is n8n and why use it instead of custom scripts?
            </h3>
            <p className="text-gray-600">
              n8n is an open-source workflow automation platform with a visual editor and 400+ pre-built integrations. It's easier 
              to maintain than custom scripts, non-technical staff can understand workflows, and it handles error handling, retries, 
              and logging out of the box. We use it for most integration/automation projects, falling back to custom scripts when needed.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Can automation replace our IT staff?
            </h3>
            <p className="text-gray-600">
              No. Automation reduces repetitive manual work so your IT staff can focus on strategic projects, improvements, and 
              complex issues that require human judgment. Think of it as a force multiplier, not a replacement. We've never seen 
              automation eliminate IT jobs—it just makes them more valuable and less frustrating.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 border border-blue-200 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Automate Your IT Operations?
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          We'll identify automation opportunities, build n8n workflows, and integrate AI where appropriate to reduce manual 
          toil and improve your IT operations. Contact us to discuss your automation goals.
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
