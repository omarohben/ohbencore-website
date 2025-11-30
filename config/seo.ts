import type { Metadata } from 'next';
import { siteConfig } from './site';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.siteDescription,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    title: siteConfig.siteName,
    description: siteConfig.siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.siteName,
    description: siteConfig.siteDescription,
  },
};

type CreatePageMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
};

export function createPageMetadata(
  options: CreatePageMetadataOptions
): Metadata {
  const { title, description, path } = options;

  return {
    title: title || defaultMetadata.title,
    description: description || siteConfig.siteDescription,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title || siteConfig.siteName,
      description: description || siteConfig.siteDescription,
      url: path ? `${siteConfig.siteUrl}${path}` : siteConfig.siteUrl,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: title || siteConfig.siteName,
      description: description || siteConfig.siteDescription,
    },
  };
}
