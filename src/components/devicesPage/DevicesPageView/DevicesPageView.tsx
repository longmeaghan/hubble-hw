import { useMemo, useState } from 'react';
import { DevicesMapCard } from '@/components/dashboard/DevicesMapCard';
import { PreviewIndicator } from '@/components/dashboard/PreviewIndicator';
import { DeviceDetailModal } from '@/components/devices/DeviceDetailModal';
import { DeviceResultsCard } from '@/components/devicesPage/DeviceResultsCard';
import { DevicesPageHeader } from '@/components/devicesPage/DevicesPageHeader';
import { DevicesStatsSummary } from '@/components/devicesPage/DevicesStatsSummary';
import { buildDevicesPageData } from '@/data/buildDevicesPageData';
import { useFleetPreview } from '@/context/FleetPreviewContext';
import { useAppNavigation } from '@/navigation/AppNavigationContext';
import type { DeviceListItem } from '@/types/devicesPage';
import styles from './DevicesPageView.module.css';

interface DevicesPageViewProps {
  onSelectDevice?: (device: DeviceListItem) => void;
}

export function DevicesPageView({ onSelectDevice }: DevicesPageViewProps) {
  const { simulation } = useFleetPreview();
  const { navigateToRoute } = useAppNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null);

  const data = useMemo(() => buildDevicesPageData(simulation), [simulation]);

  const selectedDevice =
    simulation?.devices.find((device) => device.id === selectedDeviceId) ?? null;

  function handleSelectDevice(device: DeviceListItem) {
    setSelectedDeviceId(device.id);
    onSelectDevice?.(device);
  }

  return (
    <>
      <DevicesPageHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <PreviewIndicator onNavigateDashboard={() => navigateToRoute('dashboard')} />

      <DevicesStatsSummary stats={data.stats} />

      <div className={styles.mapSection} id="devices-map">
        <DevicesMapCard pins={simulation?.mapPins} />
      </div>

      <DeviceResultsCard
        devices={data.devices}
        searchQuery={searchQuery}
        emptyState={data.emptyState}
        onSelectDevice={handleSelectDevice}
      />

      {selectedDevice && (
        <DeviceDetailModal device={selectedDevice} onClose={() => setSelectedDeviceId(null)} />
      )}
    </>
  );
}
