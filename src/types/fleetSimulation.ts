/** Step 1 — use case selection */
export type UseCaseId =
  | 'asset-inventory'
  | 'fleet-equipment'
  | 'environmental'
  | 'workplace-safety'
  | 'other';

/** Step 2 — fleet scale */
export type DeviceCountId = '1-10' | '10-100' | '100-1000' | '1000+';

/** Step 3 — geographic region */
export type LocationRegionId =
  | 'north-america'
  | 'europe'
  | 'asia-pacific'
  | 'latin-america'
  | 'worldwide';

export interface FleetWizardAnswers {
  useCase: UseCaseId | '';
  useCaseOther: string;
  deviceCount: DeviceCountId | '';
  location: LocationRegionId | '';
}

export interface MapPin {
  id: string;
  lat: number;
  lng: number;
  label: string;
}

export interface NetworkActivityPoint {
  hour: number;
  packets: number;
}

export interface DevicePayload {
  type: string;
  summary: string;
  alert?: string;
}

export interface SimulatedDevice {
  id: string;
  name: string;
  payload: DevicePayload;
  recentPacket: string;
  location: string;
  network: 'Sandbox' | 'Live';
  status: 'active' | 'inactive';
  lat: number;
  lng: number;
  /** Use-case-specific detail fields for drill-in view */
  detail: Record<string, string>;
}

export interface FleetSimulation {
  answers: FleetWizardAnswers;
  useCaseLabel: string;
  locationLabel: string;
  deviceCountLabel: string;
  totalDevices: number;
  activePercent: number;
  inactivePercent: number;
  mapPins: MapPin[];
  networkActivity: NetworkActivityPoint[];
  broadcastsInLiveNetwork: number;
  devices: SimulatedDevice[];
}

export const EMPTY_FLEET_ANSWERS: FleetWizardAnswers = {
  useCase: '',
  useCaseOther: '',
  deviceCount: '',
  location: '',
};

export type PathChoice =
  | { type: 'custom' }
  | { type: 'template'; templateId: string };

export interface FleetTemplate {
  id: string;
  label: string;
  description: string;
  prefills: Partial<FleetWizardAnswers>;
}
