/** Setup wizard has finished; user landed on dashboard with no further wizard steps. */
export type SetupWizardStatus = 'complete';

export type QuickStartEntryStatus = 'completed' | 'available' | 'locked';

export interface QuickStartEntry {
  id: string;
  title: string;
  description: string;
  status: QuickStartEntryStatus;
  /** Route or action key — wired up when navigation is added */
  action?: string;
}

/** Explicit post-setup-wizard state — baseline dead-end until next flows are built. */
export interface PostSetupDashboardState {
  wizardStatus: SetupWizardStatus;
  quickStartEntries: QuickStartEntry[];
  completedStepIds: string[];
}

export interface DashboardUser {
  displayName: string;
  initials: string;
  workspaceId: string;
  workspaceLabel: string;
}

export interface DashboardMetrics {
  totalDevices: number;
  activePercent: number;
  inactivePercent: number;
  apiSuccessRate: number | null;
  webhookDeliveryRate: number | null;
  broadcastsInLiveNetwork: number;
}

export interface DashboardPageData {
  user: DashboardUser;
  environment: 'sandbox' | 'live';
  postSetup: PostSetupDashboardState;
  metrics: DashboardMetrics;
  networkActivityRange: '24hr' | '7D' | '30D' | '6M' | 'Y';
}
