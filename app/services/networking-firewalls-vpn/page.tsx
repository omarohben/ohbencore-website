import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/seo';
import Link from 'next/link';

export const metadata: Metadata = createPageMetadata({
  title: 'Networking, Firewalls & VPN',
  description:
    'Expert network design, firewall configuration, and VPN setup using FortiGate, Cisco, Aruba, Ruijie, UniFi, WireGuard, and OpenVPN. Secure, reliable connectivity for your business.',
  path: '/services/networking-firewalls-vpn',
});

export default function NetworkingFirewallsVpnPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      {/* Intro Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Networking, Firewalls & VPN
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          Expert network design, firewall configuration, and VPN setup for secure, reliable business connectivity.
        </p>
        <p className="text-lg text-gray-600">
          OHBENCORE designs and implements secure network infrastructure for SMBs and mid-size organizations. We handle 
          LAN/WAN design, managed switch configuration, firewall rule design and deployment (FortiGate, Cisco, pfSense), 
          and VPN solutions (site-to-site and remote access) using WireGuard, OpenVPN, and vendor-specific VPN features.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Design LAN and WAN architectures</strong> including VLAN segmentation for departments or security 
              zones, IP addressing schemes, subnetting, and inter-VLAN routing.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Deploy and configure managed switches</strong> from vendors like Cisco, Aruba, Ruijie, UniFi, and 
              HPE. We configure VLANs, trunking, STP, link aggregation (LACP), and PoE for access points and IP phones.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Configure firewalls and security policies</strong> using FortiGate, Cisco ASA/Firepower, pfSense, 
              and other platforms. We design rule sets, NAT policies, IPS/IDS, and application control.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Set up VPNs for remote access and site-to-site connectivity</strong> using IPsec, SSL VPN, 
              WireGuard, and OpenVPN. We configure client VPN for remote workers and site-to-site tunnels for branch offices.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Troubleshoot network issues</strong> including connectivity problems, performance degradation, 
              routing issues, and VPN failures using tools like Wireshark, ping, traceroute, and SNMP monitoring.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <p>
              <strong>Document network topology</strong> with diagrams, IP address inventories, VLAN assignments, and 
              firewall rule documentation for easier maintenance and troubleshooting.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Use</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Firewalls</h3>
            <p className="text-gray-600 text-sm">
              FortiGate (FortiOS), Cisco ASA/Firepower, pfSense/OPNsense, WatchGuard, SonicWall, and other enterprise firewall platforms.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Managed Switches</h3>
            <p className="text-gray-600 text-sm">
              Cisco Catalyst, Aruba CX/ArubaOS-Switch, Ruijie, UniFi Dream Machine/USW, HPE ProCurve/Aruba, and Dell PowerConnect.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">VPN Technologies</h3>
            <p className="text-gray-600 text-sm">
              IPsec (site-to-site), SSL VPN, WireGuard (modern, fast VPN), OpenVPN (open-source), and vendor-specific VPN clients (FortiClient, Cisco AnyConnect).
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Network Monitoring</h3>
            <p className="text-gray-600 text-sm">
              SNMP monitoring, syslog collection, NetFlow/sFlow analysis, and integration with platforms like Zabbix for proactive alerting.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assess Your Network Needs</h3>
              <p className="text-gray-600">
                We review your current network topology, identify pain points (slow performance, security gaps, lack of 
                segmentation), and understand your growth plans and remote access requirements.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design Network Architecture</h3>
              <p className="text-gray-600">
                We create a network design with VLANs for segmentation, firewall rules for security, VPN configurations 
                for remote access, and switch configurations for optimal performance.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deploy and Configure Equipment</h3>
              <p className="text-gray-600">
                We configure switches with VLANs and trunks, deploy firewalls with security policies, set up VPN 
                endpoints, and test connectivity thoroughly before cutover.
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
                We test network performance, verify firewall rules are blocking/allowing traffic as intended, validate 
                VPN connectivity, and ensure monitoring integration is working.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              5
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Document and Support</h3>
              <p className="text-gray-600">
                We provide network documentation (topology diagrams, IP address plans, firewall rule sets) and offer 
                ongoing support for changes, troubleshooting, and expansion.
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
              <span><strong>Secure, segmented network</strong> with VLANs isolating departments, guest WiFi, and sensitive systems.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Firewall protection</strong> with well-designed rules, IPS/IDS, and application control to block threats.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Remote access VPN</strong> for secure connections from home or on the road using modern VPN technologies.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Site-to-site VPN</strong> for connecting branch offices or cloud resources securely.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><strong>Detailed documentation</strong> including network diagrams, IP address plans, and configuration backups.</span>
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
              Which firewall should I choose?
            </h3>
            <p className="text-gray-600">
              For SMBs, we often recommend FortiGate (excellent features, good licensing model) or pfSense/OPNsense (open-source, 
              no licensing costs). Cisco ASA/Firepower and WatchGuard are also solid choices. We'll help you evaluate based on 
              your budget, feature requirements (VPN, IPS, web filtering), and existing vendor relationships.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Do I need VLANs for my small business?
            </h3>
            <p className="text-gray-600">
              VLANs improve security and network organization even for small businesses. Common use cases: separate guest WiFi 
              from internal network, isolate IP phones or security cameras, segment servers from workstations. We'll assess 
              whether VLANs make sense for your specific situation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Can you migrate from our old firewall to a new one without downtime?
            </h3>
            <p className="text-gray-600">
              Yes, typically. We configure the new firewall in parallel, migrate configurations, test thoroughly, then perform 
              a quick cutover (usually 5-15 minutes of downtime). For critical environments, we can plan a phased migration or 
              use HA/failover configurations to minimize risk.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              What's the difference between WireGuard and OpenVPN?
            </h3>
            <p className="text-gray-600">
              WireGuard is a newer, simpler VPN protocol with excellent performance and modern cryptography. It's ideal for 
              site-to-site VPNs and tech-savvy remote users. OpenVPN is mature, widely supported, and works well across diverse 
              client platforms. We'll recommend the best option based on your specific use case and client devices.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 border border-blue-200 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Need Network Design or Firewall Consulting?
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          We'll design a secure, high-performance network infrastructure with proper segmentation, firewall protection, 
          and VPN connectivity. Contact us to discuss your project.
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
