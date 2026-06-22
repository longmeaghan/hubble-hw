import type { ReactNode } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  CreditCard,
  KeyRound,
  LayoutDashboard,
  LogOut,
  Menu,
  Radio,
  Settings,
  Users,
  Webhook,
} from 'lucide-react';
import type { DashboardUser } from '@/types/dashboard';
import styles from './Sidebar.module.css';

interface NavItem {
  id: string;
  label: string;
  icon: ReactNode;
  href?: string;
  external?: boolean;
  active?: boolean;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

interface SidebarProps {
  user: DashboardUser;
  environment: 'sandbox' | 'live';
  activeNavId?: string;
  onNavigate?: (navId: string) => void;
}

const navGroups: NavGroup[] = [
  {
    label: 'Overview',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={16} /> },
      { id: 'devices', label: 'Devices', icon: <Radio size={16} /> },
    ],
  },
  {
    label: 'Developer Tools',
    items: [
      { id: 'hubble-connect', label: 'Hubble Connect', icon: <Radio size={16} /> },
      { id: 'webhooks', label: 'Webhooks', icon: <Webhook size={16} /> },
      { id: 'api-tokens', label: 'API Tokens', icon: <KeyRound size={16} /> },
      {
        id: 'documentation',
        label: 'Documentation',
        icon: <BookOpen size={16} />,
        external: true,
      },
    ],
  },
  {
    label: 'Settings',
    items: [
      { id: 'org-settings', label: 'Org Settings', icon: <Settings size={16} /> },
      { id: 'manage-team', label: 'Manage Team', icon: <Users size={16} /> },
      { id: 'pricing', label: 'Pricing', icon: <CreditCard size={16} /> },
    ],
  },
];

export function Sidebar({
  user,
  environment,
  activeNavId = 'dashboard',
  onNavigate,
}: SidebarProps) {
  return (
    <aside className={styles.sidebar} aria-label="Main navigation">
      <div className={styles.top}>
        <button type="button" className={styles.workspaceSwitcher} aria-haspopup="listbox">
          <span className={styles.logoMark} aria-hidden="true">
            H
          </span>
          <span className={styles.workspaceLabel}>
            {user.workspaceLabel} ({user.workspaceId})
          </span>
          <ChevronDown size={14} aria-hidden="true" />
        </button>

        <div className={styles.environmentToggle} role="group" aria-label="Environment">
          <button
            type="button"
            className={`${styles.envButton} ${environment === 'sandbox' ? styles.envActive : ''}`}
            aria-pressed={environment === 'sandbox'}
          >
            Sandbox
          </button>
          <button
            type="button"
            className={`${styles.envButton} ${styles.envUnlock}`}
            aria-pressed={environment === 'live'}
          >
            Unlock Live
          </button>
        </div>
      </div>

      <nav className={styles.nav}>
        {navGroups.map((group) => (
          <div key={group.label} className={styles.navGroup}>
            <span className={styles.navGroupLabel}>{group.label}</span>
            <ul className={styles.navList}>
              {group.items.map((item) => {
                const isInAppNav = item.id === 'dashboard' || item.id === 'devices';
                const className = `${styles.navLink} ${item.id === activeNavId ? styles.navLinkActive : ''}`;

                if (isInAppNav && onNavigate) {
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        className={className}
                        aria-current={item.id === activeNavId ? 'page' : undefined}
                        onClick={() => onNavigate(item.id)}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </button>
                    </li>
                  );
                }

                return (
                  <li key={item.id}>
                    <a
                      href={item.href ?? '#'}
                      className={className}
                      aria-current={item.id === activeNavId ? 'page' : undefined}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                      {item.external && <ArrowUpRight size={12} className={styles.externalIcon} />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className={styles.bottom}>
        <ul className={styles.utilityLinks}>
          <li>
            <a href="#" className={styles.utilityLink}>
              Support
            </a>
          </li>
          <li>
            <button type="button" className={styles.utilityLink}>
              <LogOut size={14} />
              Log Out
            </button>
          </li>
          <li>
            <button type="button" className={styles.utilityLink}>
              <Menu size={14} />
              Collapse Menu
            </button>
          </li>
        </ul>

        <div className={styles.userProfile}>
          <span className={styles.avatar} aria-hidden="true">
            {user.initials}
          </span>
          <span className={styles.userName}>{user.displayName}</span>
        </div>
      </div>
    </aside>
  );
}
