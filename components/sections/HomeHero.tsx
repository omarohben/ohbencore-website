import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { calendlyUrl } from '@/config/calendly';

// HomeHero: Modern dark-themed hero section with gradient background and visual elements
export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28 gradient-hero">
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/50 border border-blue-900/50 text-sm text-blue-400 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Infrastructure Consulting & Technical Services
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-br from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              Secure, Smart IT Infrastructure for Real-World Businesses
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
              We design, implement, and maintain reliable infrastructure—virtualization, backup & disaster recovery,
              networking, cloud platforms, monitoring, security and automation—so your operations stay resilient.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href={calendlyUrl ? '/book' : '/contact'} 
                variant="primary"
                className="group"
              >
                {calendlyUrl ? 'Book a Call' : 'Request an Assessment'}
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button 
                href="/services" 
                variant="outline"
                className="border-gray-700 hover:border-blue-600"
              >
                View Services
              </Button>
            </div>
          </div>

          {/* Right: Visual Element - Infrastructure Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Primary technologies - larger cards */}
              {[
                { name: 'VMware vSphere', category: 'Virtualization', icon: '🔲' },
                { name: 'Veeam Backup', category: 'Data Protection', icon: '💾' },
                { name: 'FortiGate', category: 'Network Security', icon: '🛡️' },
                { name: 'Zabbix', category: 'Monitoring', icon: '📊' },
              ].map((tech, idx) => (
                <div
                  key={tech.name}
                  className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-blue-600/50 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <div className="text-sm font-semibold text-white mb-1">{tech.name}</div>
                  <div className="text-xs text-gray-500">{tech.category}</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-blue-600/10 rounded-2xl transition-all duration-300" />
                </div>
              ))}
            </div>
            
            {/* Floating secondary tech badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {['Proxmox', 'WireGuard', 'Azure', 'n8n', 'AWS', 'Cisco'].map((tech) => (
                <div
                  key={tech}
                  className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-900/50 border border-slate-800 text-xs text-gray-400 hover:border-blue-900 hover:text-blue-400 transition-colors"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
