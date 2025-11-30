export type NavItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  mainNav: NavItem[];
};

export const siteConfig: SiteConfig = {
  siteName: 'OHBENCORE',
  siteDescription:
    'Professional IT infrastructure consulting and technical services for businesses',
  siteUrl: 'https://www.ohbencore.com', // TODO: Update to actual production domain
  mainNav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Trust & Security', href: '/trust-security' },
    { label: 'Contact', href: '/contact' },
  ],
};
