import { createContext, useContext, type ReactNode } from 'react';
import type { AppRoute } from './useAppRouter';

interface AppNavigationContextValue {
  route: AppRoute;
  navigate: (path: string) => void;
  navigateToRoute: (route: AppRoute) => void;
}

const AppNavigationContext = createContext<AppNavigationContextValue | null>(null);

interface AppNavigationProviderProps {
  children: ReactNode;
  value: AppNavigationContextValue;
}

export function AppNavigationProvider({ children, value }: AppNavigationProviderProps) {
  return <AppNavigationContext.Provider value={value}>{children}</AppNavigationContext.Provider>;
}

export function useAppNavigation() {
  const context = useContext(AppNavigationContext);
  if (!context) {
    throw new Error('useAppNavigation must be used within AppNavigationProvider');
  }

  return context;
}
