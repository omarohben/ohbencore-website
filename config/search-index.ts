import type { SearchIndexItem } from '@/types/search';

export const searchIndex: SearchIndexItem[] = [
  // Main pages
  {
    title: 'IT Infrastructure Consulting & Technical Services',
    url: '/',
    type: 'other',
    snippet:
      'OHBENCORE provides professional IT infrastructure consulting and technical services for SMBs and mid-size organizations.',
    tags: ['home', 'it consulting', 'infrastructure', 'smb', 'managed services'],
  },
  {
    title: 'IT Services',
    url: '/services',
    type: 'service',
    snippet:
      'Comprehensive IT infrastructure services covering virtualization, backup & disaster recovery, networking, cloud, monitoring, security, and automation.',
    tags: ['services', 'it services', 'infrastructure', 'overview'],
  },
  {
    title: 'Industries We Serve',
    url: '/industries',
    type: 'industry',
    snippet:
      'Specialized IT infrastructure solutions for healthcare, government, manufacturing, retail, construction, and education sectors.',
    tags: ['industries', 'sectors', 'vertical markets'],
  },
  {
    title: 'Solutions & Engagements',
    url: '/solutions',
    type: 'solution',
    snippet:
      'Pre-packaged IT infrastructure solutions and engagement models designed to address common business challenges.',
    tags: ['solutions', 'packages', 'engagements', 'offers'],
  },
  {
    title: 'About OHBENCORE',
    url: '/about',
    type: 'other',
    snippet:
      'Learn about OHBENCORE, an IT infrastructure consulting firm specializing in technical services for SMBs and mid-size organizations.',
    tags: ['about', 'company', 'who we are'],
  },
  {
    title: 'Trust & Security',
    url: '/trust-security',
    type: 'other',
    snippet:
      'How OHBENCORE approaches security, access control, data protection, and client trust in every engagement.',
    tags: ['security', 'trust', 'compliance', 'privacy', 'protection'],
  },
  {
    title: 'Blog',
    url: '/blog',
    type: 'blog',
    snippet:
      'Articles, insights, and technical guides about IT infrastructure, best practices, and emerging technologies.',
    tags: ['blog', 'articles', 'insights', 'guides'],
  },
  // Blog posts (file-based; will be replaced by TinaCMS dynamic indexing)
  // TODO: Replace static blog entries with TinaCMS query-driven index once CMS enabled.
  {
    title: 'Getting Started with OHBENCORE Infrastructure',
    url: '/blog/getting-started-with-ohbencore-infrastructure',
    type: 'blog',
    snippet: 'Foundational overview for planning resilient, scalable infrastructure with OHBENCORE best practices.',
    tags: ['blog', 'infrastructure', 'getting started', 'planning'],
  },
  {
    title: 'Why Backup and Disaster Recovery Matters',
    url: '/blog/why-backup-and-disaster-recovery-matters',
    type: 'blog',
    snippet: 'Key principles and business impacts of robust backup and disaster recovery strategies.',
    tags: ['blog', 'backup', 'disaster recovery', 'continuity', 'veeam'],
  },
  {
    title: 'Contact OHBENCORE',
    url: '/contact',
    type: 'other',
    snippet:
      'Get in touch with OHBENCORE to discuss your IT infrastructure needs. We typically respond within one business day.',
    tags: ['contact', 'get in touch', 'reach us', 'inquiry'],
  },

  // Service pages
  {
    title: 'Managed Infrastructure Services',
    url: '/services/managed-infrastructure-services',
    type: 'service',
    snippet:
      'Comprehensive management of your IT infrastructure, ensuring reliability, performance, and security across all systems.',
    tags: [
      'managed services',
      'infrastructure management',
      'msp',
      'proactive monitoring',
      'maintenance',
    ],
  },
  {
    title: 'Server Administration & Management',
    url: '/services/server-administration-management',
    type: 'service',
    snippet:
      'Expert server administration for Windows and Linux environments, ensuring optimal performance, security, and uptime.',
    tags: ['server', 'administration', 'windows', 'linux', 'sysadmin', 'unix'],
  },
  {
    title: 'Virtualization & Hypervisors',
    url: '/services/virtualization-hypervisors',
    type: 'service',
    snippet:
      'Design, deployment, and management of virtualized infrastructure using VMware, Hyper-V, and Proxmox platforms.',
    tags: [
      'virtualization',
      'vmware',
      'hyper-v',
      'proxmox',
      'hypervisor',
      'vsphere',
      'esxi',
      'vcenter',
    ],
  },
  {
    title: 'Backup & Disaster Recovery Services',
    url: '/services/backup-disaster-recovery',
    type: 'service',
    snippet:
      'Comprehensive backup strategies and disaster recovery planning using Veeam, NAS/SAN, tape, and cloud storage solutions.',
    tags: [
      'backup',
      'disaster recovery',
      'veeam',
      'dr',
      'business continuity',
      'rpo',
      'rto',
      'nas',
      'san',
      's3',
    ],
  },
  {
    title: 'Networking, Firewalls & VPN',
    url: '/services/networking-firewalls-vpn',
    type: 'service',
    snippet:
      'Network infrastructure design and security using FortiGate, Cisco, Aruba, Ruijie, UniFi, WireGuard, and OpenVPN solutions.',
    tags: [
      'networking',
      'firewall',
      'vpn',
      'fortinet',
      'fortigate',
      'cisco',
      'aruba',
      'ruijie',
      'unifi',
      'wireguard',
      'openvpn',
      'network security',
    ],
  },
  {
    title: 'Cloud & Hybrid Infrastructure',
    url: '/services/cloud-hybrid-infrastructure',
    type: 'service',
    snippet:
      'Cloud migration and hybrid infrastructure solutions across AWS, Azure, OVH, Hetzner, DigitalOcean, Contabo, and GCP platforms.',
    tags: [
      'cloud',
      'hybrid cloud',
      'aws',
      'azure',
      'gcp',
      'ovh',
      'hetzner',
      'digitalocean',
      'contabo',
      'cloud migration',
    ],
  },
  {
    title: 'Monitoring & Observability',
    url: '/services/monitoring-observability',
    type: 'service',
    snippet:
      'Infrastructure monitoring and alerting using Zabbix and other observability tools to ensure system health and performance.',
    tags: ['monitoring', 'observability', 'zabbix', 'alerts', 'metrics', 'performance'],
  },
  {
    title: 'Security & Hardening for Infrastructure',
    url: '/services/security-hardening-infrastructure',
    type: 'service',
    snippet:
      'Infrastructure security assessments, hardening, and implementation of security best practices across your IT environment.',
    tags: [
      'security',
      'hardening',
      'cybersecurity',
      'penetration testing',
      'vulnerability assessment',
      'compliance',
    ],
  },
  {
    title: 'Monitoring, Automation & AI for IT',
    url: '/services/monitoring-automation-ai',
    type: 'service',
    snippet:
      'Infrastructure automation and AI-powered solutions using n8n, LLMs, and AI agents to optimize operations and reduce manual tasks.',
    tags: ['automation', 'ai', 'n8n', 'llm', 'workflow', 'scripting', 'orchestration'],
  },

  // Industry pages
  {
    title: 'Healthcare & Medical IT Services',
    url: '/industries/healthcare-medical-it-services',
    type: 'industry',
    snippet:
      'Specialized IT infrastructure for clinics, hospitals, and medical labs with focus on compliance, data security, and reliable systems for patient care.',
    tags: [
      'healthcare',
      'medical',
      'clinic',
      'hospital',
      'hipaa',
      'ehr',
      'emr',
      'patient data',
    ],
  },
  {
    title: 'Government & Public Sector IT Services',
    url: '/industries/government-public-sector-it-services',
    type: 'industry',
    snippet:
      'Secure, compliant IT infrastructure for government agencies and public sector organizations with emphasis on data protection and continuity.',
    tags: ['government', 'public sector', 'municipal', 'agency', 'compliance', 'security'],
  },
  {
    title: 'Industrial, Manufacturing & Textile IT Services',
    url: '/industries/industrial-manufacturing-textile-it-services',
    type: 'industry',
    snippet:
      'Robust IT infrastructure for factories and manufacturing facilities, supporting production systems, inventory management, and operational continuity.',
    tags: [
      'manufacturing',
      'industrial',
      'textile',
      'factory',
      'production',
      'scada',
      'erp',
    ],
  },
  {
    title: 'Retail, Commerce & Distribution IT Services',
    url: '/industries/retail-commerce-it-services',
    type: 'industry',
    snippet:
      'IT infrastructure for retail businesses and distribution centers, ensuring reliable POS systems, inventory management, and e-commerce platforms.',
    tags: [
      'retail',
      'commerce',
      'pos',
      'point of sale',
      'ecommerce',
      'inventory',
      'distribution',
    ],
  },
  {
    title: 'Construction & Contractors IT Services',
    url: '/industries/construction-contractors-it-services',
    type: 'industry',
    snippet:
      'IT solutions for construction firms and contractors, supporting project management, mobile access, and collaboration across job sites.',
    tags: ['construction', 'contractors', 'project management', 'mobile', 'field service'],
  },
  {
    title: 'Education & Training IT Services',
    url: '/industries/education-training-it-services',
    type: 'industry',
    snippet:
      'IT infrastructure for schools, training centers, and educational institutions, enabling secure learning environments and administrative systems.',
    tags: ['education', 'school', 'training', 'learning', 'elearning', 'classroom'],
  },
];
