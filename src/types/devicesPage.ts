import type { DashboardUser } from '@/types/dashboard';

export type DeviceStatus = 'active' | 'inactive' | 'registered';

export type DeviceSortColumn = 'name' | 'payload' | 'recentPacket' | 'location' | 'network';

export type DeviceSortDirection = 'asc' | 'desc';

export interface DeviceListItem {
  id: string;
  name: string;
  payload: string;
  recentPacket: string | null;
  location: string | null;
  network: string;
  status: DeviceStatus;
}

export interface DevicesStatsSummary {
  total: number;
  activePercent: number;
  inactivePercent: number;
  activeCount: number;
  inactiveCount: number;
  timeRangeLabel: string;
}

export interface DeviceListFilters {
  active: boolean;
  inactive: boolean;
  registered: boolean;
}

export interface DeviceListEmptyStateCopy {
  primary: string;
  secondary: string;
}

export interface DevicesPageData {
  user: DashboardUser;
  environment: 'sandbox' | 'live';
  stats: DevicesStatsSummary;
  devices: DeviceListItem[];
  emptyState: DeviceListEmptyStateCopy;
}
