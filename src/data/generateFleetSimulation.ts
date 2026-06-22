import type {
  DeviceCountId,
  FleetSimulation,
  FleetWizardAnswers,
  LocationRegionId,
  MapPin,
  SimulatedDevice,
  UseCaseId,
} from '@/types/fleetSimulation';

/** Question definitions for the 3-step modal */
export const FLEET_WIZARD_STEPS = [
  { id: 'useCase', label: 'Use Case' },
  { id: 'deviceCount', label: 'Device Count' },
  { id: 'location', label: 'Location' },
] as const;

export const USE_CASE_OPTIONS = [
  { id: 'asset-inventory' as const, label: 'Asset & Inventory Tracking' },
  { id: 'fleet-equipment' as const, label: 'Fleet & Equipment Monitoring' },
  { id: 'environmental' as const, label: 'Environmental Monitoring (temp, humidity)' },
  { id: 'workplace-safety' as const, label: 'Workplace Safety & Access' },
  { id: 'other' as const, label: 'Other', allowsCustomInput: true },
];

export const DEVICE_COUNT_OPTIONS = [
  { id: '1-10' as const, label: '1–10' },
  { id: '10-100' as const, label: '10–100' },
  { id: '100-1000' as const, label: '100–1,000' },
  { id: '1000+' as const, label: '1,000+' },
];

export const LOCATION_OPTIONS = [
  { id: 'north-america' as const, label: 'North America' },
  { id: 'europe' as const, label: 'Europe' },
  { id: 'asia-pacific' as const, label: 'Asia-Pacific' },
  { id: 'latin-america' as const, label: 'Latin America' },
  { id: 'worldwide' as const, label: 'Worldwide / Multiple Regions' },
];

/** Prebuilt paths on the intro screen — full answers for template shortcut (Option C) */
export const FLEET_TEMPLATES = [
  {
    id: 'asset-inventory',
    label: 'Asset & Inventory Tracking',
    description: 'Monitor high-value equipment across warehouses and job sites.',
    prefills: {
      useCase: 'asset-inventory' as const,
      deviceCount: '10-100' as const,
      location: 'north-america' as const,
    },
  },
  {
    id: 'fleet-equipment',
    label: 'Fleet & Equipment Monitoring',
    description: 'Track vehicles and heavy equipment across your operations.',
    prefills: {
      useCase: 'fleet-equipment' as const,
      deviceCount: '100-1000' as const,
      location: 'worldwide' as const,
    },
  },
  {
    id: 'environmental',
    label: 'Environmental Monitoring',
    description: 'Watch temperature and humidity for sensitive cargo or facilities.',
    prefills: {
      useCase: 'environmental' as const,
      deviceCount: '1-10' as const,
      location: 'europe' as const,
    },
  },
  {
    id: 'workplace-safety',
    label: 'Workplace Safety & Access',
    description: 'Monitor badge-in/out events and access across your sites.',
    prefills: {
      useCase: 'workplace-safety' as const,
      deviceCount: '10-100' as const,
      location: 'north-america' as const,
    },
  },
];

const USE_CASE_LABELS: Record<UseCaseId, string> = {
  'asset-inventory': 'Asset & Inventory Tracking',
  'fleet-equipment': 'Fleet & Equipment Monitoring',
  environmental: 'Environmental Monitoring',
  'workplace-safety': 'Workplace Safety & Access',
  other: 'Custom Use Case',
};

const LOCATION_LABELS: Record<LocationRegionId, string> = {
  'north-america': 'North America',
  europe: 'Europe',
  'asia-pacific': 'Asia-Pacific',
  'latin-america': 'Latin America',
  worldwide: 'Worldwide / Multiple Regions',
};

/** Fixed metro coordinates per region — no geocoding */
const REGION_COORDINATES: Record<LocationRegionId, { lat: number; lng: number; city: string }[]> = {
  'north-america': [
    { lat: 39.7392, lng: -104.9903, city: 'Denver, CO' },
    { lat: 30.2672, lng: -97.7431, city: 'Austin, TX' },
    { lat: 41.8781, lng: -87.6298, city: 'Chicago, IL' },
    { lat: 43.6532, lng: -79.3832, city: 'Toronto, ON' },
    { lat: 47.6062, lng: -122.3321, city: 'Seattle, WA' },
  ],
  europe: [
    { lat: 51.5074, lng: -0.1278, city: 'London, UK' },
    { lat: 52.52, lng: 13.405, city: 'Berlin, DE' },
    { lat: 48.8566, lng: 2.3522, city: 'Paris, FR' },
    { lat: 52.3676, lng: 4.9041, city: 'Amsterdam, NL' },
  ],
  'asia-pacific': [
    { lat: 35.6762, lng: 139.6503, city: 'Tokyo, JP' },
    { lat: 1.3521, lng: 103.8198, city: 'Singapore' },
    { lat: -33.8688, lng: 151.2093, city: 'Sydney, AU' },
    { lat: 19.076, lng: 72.8777, city: 'Mumbai, IN' },
  ],
  'latin-america': [
    { lat: -23.5505, lng: -46.6333, city: 'São Paulo, BR' },
    { lat: 19.4326, lng: -99.1332, city: 'Mexico City, MX' },
    { lat: 4.711, lng: -74.0721, city: 'Bogotá, CO' },
    { lat: -34.6037, lng: -58.3816, city: 'Buenos Aires, AR' },
  ],
  worldwide: [
    { lat: 39.7392, lng: -104.9903, city: 'Denver, CO' },
    { lat: 51.5074, lng: -0.1278, city: 'London, UK' },
    { lat: 35.6762, lng: 139.6503, city: 'Tokyo, JP' },
    { lat: -23.5505, lng: -46.6333, city: 'São Paulo, BR' },
    { lat: -33.8688, lng: 151.2093, city: 'Sydney, AU' },
    { lat: 25.2048, lng: 55.2708, city: 'Dubai, AE' },
  ],
};

/** Representative totals per device-count range */
const DEVICE_COUNT_PROFILE: Record<
  DeviceCountId,
  { total: number; clusterCount: number; activePercent: number }
> = {
  '1-10': { total: 8, clusterCount: 1, activePercent: 88 },
  '10-100': { total: 64, clusterCount: 3, activePercent: 86 },
  '100-1000': { total: 250, clusterCount: 5, activePercent: 84 },
  '1000+': { total: 1200, clusterCount: 6, activePercent: 82 },
};

const DEVICE_NAME_PREFIX: Record<UseCaseId, string[]> = {
  'asset-inventory': ['Pallet', 'Crate', 'Tag', 'Bin', 'Shelf'],
  'fleet-equipment': ['Forklift', 'Trailer', 'Excavator', 'Generator', 'Compressor'],
  environmental: ['Sensor', 'Monitor', 'Probe', 'Logger', 'Node'],
  'workplace-safety': ['Badge', 'Reader', 'Beacon', 'Gate', 'Turnstile'],
  other: ['Device', 'Node', 'Unit', 'Tracker', 'Endpoint'],
};

function resolveUseCaseId(answers: FleetWizardAnswers): UseCaseId {
  if (answers.useCase === 'other' || !answers.useCase) return 'other';
  return answers.useCase;
}

function resolveUseCaseLabel(answers: FleetWizardAnswers): string {
  if (answers.useCase === 'other' && answers.useCaseOther.trim()) {
    return answers.useCaseOther.trim();
  }
  const id = resolveUseCaseId(answers);
  return USE_CASE_LABELS[id];
}

function jitter(value: number, spread: number, seed: number): number {
  const offset = ((seed * 17) % 100) / 100 - 0.5;
  return value + offset * spread;
}

function buildCoordinates(
  region: LocationRegionId,
  deviceCount: number,
  clusterCount: number,
): { lat: number; lng: number; city: string }[] {
  const pool = REGION_COORDINATES[region];
  const clusters = pool.slice(0, Math.min(clusterCount, pool.length));
  const spread =
    deviceCount <= 10 ? 0.35 : deviceCount <= 100 ? 0.8 : deviceCount <= 1000 ? 1.6 : 2.4;
  const points: { lat: number; lng: number; city: string }[] = [];

  for (let index = 0; index < deviceCount; index += 1) {
    const cluster = clusters[index % clusters.length];
    points.push({
      lat: jitter(cluster.lat, spread, index),
      lng: jitter(cluster.lng, spread, index + 3),
      city: cluster.city,
    });
  }

  return points;
}

function buildDeviceDetail(useCase: UseCaseId, index: number): Record<string, string> {
  switch (useCase) {
    case 'fleet-equipment':
      return {
        'Motion status': index % 4 === 0 ? 'Idle' : 'In transit',
        'Impact events (24h)': String(index % 3),
      };
    case 'environmental':
      return {
        Temperature: `${18 + (index % 6)}°C`,
        Humidity: `${42 + (index % 12)}%`,
        Alert: index === 2 ? 'Temp exceeded 8°C threshold' : 'None',
      };
    case 'workplace-safety':
      return {
        'Last badge-in': `${8 + (index % 4)}:${(index * 7) % 60}`.padStart(5, '0') + ' AM',
        'Last badge-out': index % 2 === 0 ? '—' : `${5 + (index % 3)}:15 PM`,
      };
    default:
      return { 'Last location update': `${3 + index} min ago` };
  }
}

function buildPayload(useCase: UseCaseId, index: number): SimulatedDevice['payload'] {
  switch (useCase) {
    case 'fleet-equipment':
      return {
        type: 'Motion/Impact',
        summary: index % 4 === 0 ? 'Stationary' : 'Moving · 0 impacts',
      };
    case 'environmental':
      return {
        type: 'Temp/Humidity',
        summary: `${18 + (index % 6)}°C · ${42 + (index % 12)}% RH`,
        alert: index === 2 ? 'Temp exceeded 8°C' : undefined,
      };
    case 'workplace-safety':
      return {
        type: 'Badge event',
        summary: index % 2 === 0 ? 'Badge-in recorded' : 'On-site · 6h 12m',
      };
    default:
      return { type: 'Location', summary: 'GPS fix acquired' };
  }
}

function buildDevices(
  answers: FleetWizardAnswers,
  coordinates: ReturnType<typeof buildCoordinates>,
  total: number,
): SimulatedDevice[] {
  const useCase = resolveUseCaseId(answers);
  const prefixes = DEVICE_NAME_PREFIX[useCase];
  const rowCount = Math.min(total, 25);

  return Array.from({ length: rowCount }, (_, index) => {
    const prefix = prefixes[index % prefixes.length];
    const coord = coordinates[index % coordinates.length];
    const suffix = String(1000 + index * 37).slice(-4);

    return {
      id: `HB-${suffix}`,
      name: `${prefix}-${suffix}`,
      payload: buildPayload(useCase, index),
      recentPacket: `${2 + (index % 9)} min ago`,
      location: coord.city,
      network: 'Sandbox',
      status: index % 7 === 0 ? 'inactive' : 'active',
      lat: coord.lat,
      lng: coord.lng,
      detail: buildDeviceDetail(useCase, index),
    };
  });
}

function buildNetworkActivity(total: number): FleetSimulation['networkActivity'] {
  const base = Math.max(12, Math.round(total / 8));
  return Array.from({ length: 12 }, (_, hour) => ({
    hour,
    packets: Math.round(base * (0.45 + Math.sin(hour / 2) * 0.35 + hour * 0.04)),
  }));
}

/** Main entry — combines 3 answers into a pre-built simulation dataset */
export function generateFleetSimulation(answers: FleetWizardAnswers): FleetSimulation {
  const deviceCount = answers.deviceCount as DeviceCountId;
  const location = answers.location as LocationRegionId;
  const profile = DEVICE_COUNT_PROFILE[deviceCount];
  const coordinates = buildCoordinates(location, profile.total, profile.clusterCount);
  const inactivePercent = 100 - profile.activePercent;

  const mapPins: MapPin[] = coordinates.map((point, index) => ({
    id: `pin-${index}`,
    lat: point.lat,
    lng: point.lng,
    label: point.city,
  }));

  const devices = buildDevices(answers, coordinates, profile.total);
  const networkActivity = buildNetworkActivity(profile.total);

  return {
    answers,
    useCaseLabel: resolveUseCaseLabel(answers),
    locationLabel: LOCATION_LABELS[location],
    deviceCountLabel: DEVICE_COUNT_OPTIONS.find((o) => o.id === deviceCount)?.label ?? '',
    totalDevices: profile.total,
    activePercent: profile.activePercent,
    inactivePercent,
    mapPins,
    networkActivity,
    broadcastsInLiveNetwork: Math.round(profile.total * 0.15),
    devices,
  };
}

export function canAdvanceWizardStep(
  stepIndex: number,
  answers: FleetWizardAnswers,
): boolean {
  if (stepIndex === 0) {
    if (!answers.useCase) return false;
    if (answers.useCase === 'other') return answers.useCaseOther.trim().length > 0;
    return true;
  }
  if (stepIndex === 1) return Boolean(answers.deviceCount);
  if (stepIndex === 2) return Boolean(answers.location);
  return false;
}
