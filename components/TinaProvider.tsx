// Conditional TinaCMS provider placeholder.
// Wraps children only if Tina environment variables are present and dependencies installed.
// TODO: After installing Tina, replace this with actual Tina provider import (e.g. import { TinaEditProvider } from 'tinacms').

interface TinaProviderProps {
  children: React.ReactNode;
}

export function TinaProvider({ children }: TinaProviderProps) {
  const tinaEnabled = !!process.env.TINA_CLIENT_ID;
  // If Tina not configured, just render children.
  if (!tinaEnabled) return <>{children}</>;
  // TODO: Implement real Tina provider logic here.
  return <>{children}</>;
}
