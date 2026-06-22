import type { DashboardPageData } from '@/types/dashboard';

/** Baseline mock: user completed setup wizard, landed on dashboard (dead-end state). */
export const postSetupDashboardData: DashboardPageData = {
  user: {
    displayName: 'meaghan long',
    initials: 'ML',
    workspaceId: '0c6ef500',
    workspaceLabel: 'personal',
  },
  environment: 'sandbox',
  postSetup: {
    wizardStatus: 'complete',
    completedStepIds: [],
    quickStartEntries: [
      {
        id: 'visualize-fleet',
        title: 'Visualize Your Fleet',
        description: 'See what your data could look like at scale.',
        status: 'available',
        action: 'visualize-fleet',
      },
      {
        id: 'add-device',
        title: 'Add a Device',
        description: 'Register a physical device and start receiving packets in the Sandbox.',
        status: 'available',
        action: 'add-device',
      },
      {
        id: 'launch-plan',
        title: 'Launch Plan',
        description: 'Register more devices, move to production, and unlock Hubble Live.',
        status: 'available',
        action: 'launch-plan',
      },
    ],
  },
  metrics: {
    totalDevices: 0,
    activePercent: 0,
    inactivePercent: 0,
    apiSuccessRate: 100.0,
    webhookDeliveryRate: null,
    broadcastsInLiveNetwork: 0,
  },
  networkActivityRange: '24hr',
};
