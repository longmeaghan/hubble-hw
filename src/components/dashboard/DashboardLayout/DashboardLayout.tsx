import type { ReactNode } from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import type { DashboardUser } from '@/types/dashboard';
import styles from './DashboardLayout.module.css';

interface DashboardLayoutProps {
  user: DashboardUser;
  environment: 'sandbox' | 'live';
  activeNavId?: string;
  onNavigate?: (navId: string) => void;
  children: ReactNode;
}

export function DashboardLayout({
  user,
  environment,
  activeNavId,
  onNavigate,
  children,
}: DashboardLayoutProps) {
  return (
    <div className={styles.shell}>
      <Sidebar
        user={user}
        environment={environment}
        activeNavId={activeNavId}
        onNavigate={onNavigate}
      />
      <div className={styles.mainShell}>
        <main className={styles.main}>
          <div className={styles.page}>{children}</div>
        </main>
      </div>
    </div>
  );
}
