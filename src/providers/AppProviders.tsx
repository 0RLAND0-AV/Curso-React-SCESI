import type { ReactNode } from 'react';
import { ThemeProvider } from './ThemeProvider';
import { LanguageProvider } from './LanguageProvider';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <div>
      <ThemeProvider>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};