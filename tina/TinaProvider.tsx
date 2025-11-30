"use client";

// TinaProvider – safely wraps the app. If Tina env vars are missing, it simply renders children.
// TODO: When enabling Tina editing, import and mount the proper Tina edit provider:
//   import { TinaEditProvider } from 'tinacms';
//   Then wrap children with <TinaEditProvider>.
// Toggle editing by setting NEXT_PUBLIC_TINA_ENABLED=true (or providing TINA_CLIENT_ID & TINA_TOKEN).

import React, { useEffect, useState } from 'react';
import { isTinaEnabled } from './config';

interface TinaProviderProps { children: React.ReactNode }

export function TinaProvider({ children }: TinaProviderProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Defer readiness so any dynamic Tina assets could load later.
    setReady(true);
  }, []);

  if (!isTinaEnabled) {
    return <>{children}</>; // Editing disabled.
  }

  // Placeholder for future Tina editing UI.
  // TODO: Mount Tina edit provider and pass CMS props when configured.
  if (!ready) return <>{children}</>;

  return <>{children}</>;
}
