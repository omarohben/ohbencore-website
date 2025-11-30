import Link from 'next/link';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Industries We Serve',
  description:
    'Specialized IT infrastructure solutions for healthcare, government, manufacturing, retail, construction, and education sectors.',
  path: '/industries',
});

const industries = [
  { name: 'Healthcare & Medical IT Services', href: '/industries/healthcare-medical-it-services' },
  { name: 'Government & Public Sector IT Services', href: '/industries/government-public-sector-it-services' },
  { name: 'Industrial, Manufacturing & Textile IT Services', href: '/industries/industrial-manufacturing-textile-it-services' },
  { name: 'Retail, Commerce & Distribution IT Services', href: '/industries/retail-commerce-it-services' },
  { name: 'Construction & Contractors IT Services', href: '/industries/construction-contractors-it-services' },
  { name: 'Education & Training IT Services', href: '/industries/education-training-it-services' },
];

export default function IndustriesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Industries We Serve
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          OHBENCORE delivers specialized IT infrastructure solutions for SMBs and mid-size 
          organizations across diverse industries, from healthcare and manufacturing to 
          retail and education.
        </p>
        
        <div className="pt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Industry Focus</h2>
          <ul className="space-y-3">
            {industries.map((industry) => (
              <li key={industry.href}>
                <Link
                  href={industry.href}
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  {industry.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-gray-500 pt-4">
          TODO: Add industry overview cards with icons, challenges, and tailored solutions.
        </p>
      </section>
    </div>
  );
}
