import { devicesPageData } from '@/data/devicesPageData';
import type { FleetSimulation, SimulatedDevice } from '@/types/fleetSimulation';
import type { DeviceListItem, DevicesPageData } from '@/types/devicesPage';

export function simulatedDeviceToListItem(device: SimulatedDevice): DeviceListItem {
  return {
    id: device.id,
    name: device.name,
    payload: device.payload.summary,
    recentPacket: device.recentPacket,
    location: device.location,
    network: device.network,
    status: device.status,
  };
}

export function buildDevicesPageData(simulation: FleetSimulation | null): DevicesPageData {
  if (!simulation) {
    return devicesPageData;
  }

  const activeCount = Math.round((simulation.totalDevices * simulation.activePercent) / 100);
  const inactiveCount = simulation.totalDevices - activeCount;

  return {
    ...devicesPageData,
    stats: {
      total: simulation.totalDevices,
      activePercent: simulation.activePercent,
      inactivePercent: simulation.inactivePercent,
      activeCount,
      inactiveCount,
      timeRangeLabel: 'Last 7 Days',
    },
    devices: simulation.devices.map(simulatedDeviceToListItem),
    emptyState: {
      primary: 'No results found.',
      secondary: 'Try adjusting your filters.',
    },
  };
}
