import type { DevicesPageData } from '@/types/devicesPage';

/** Baseline empty-state devices page — matches post-setup screenshot. */
export const devicesPageData: DevicesPageData = {
  user: {
    displayName: 'meaghan long',
    initials: 'ML',
    workspaceId: '0c6ef500',
    workspaceLabel: 'personal',
  },
  environment: 'sandbox',
  stats: {
    total: 0,
    activePercent: 0,
    inactivePercent: 0,
    activeCount: 0,
    inactiveCount: 0,
    timeRangeLabel: 'Last 7 Days',
  },
  devices: [],
  emptyState: {
    primary: 'No results found.',
    secondary: 'Try checking Registered devices.',
  },
};
