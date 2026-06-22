import { useMemo, useState } from 'react';
import { Card } from '@/components/ui/Card';
import { DeviceListToolbar } from '@/components/devicesPage/DeviceListToolbar';
import { DeviceTable } from '@/components/devicesPage/DeviceTable';
import type {
  DeviceListEmptyStateCopy,
  DeviceListFilters,
  DeviceListItem,
  DeviceSortColumn,
  DeviceSortDirection,
} from '@/types/devicesPage';
import styles from './DeviceResultsCard.module.css';

interface DeviceResultsCardProps {
  devices: DeviceListItem[];
  searchQuery: string;
  emptyState: DeviceListEmptyStateCopy;
  onSelectDevice?: (device: DeviceListItem) => void;
}

const DEFAULT_FILTERS: DeviceListFilters = {
  active: true,
  inactive: true,
  registered: false,
};

function matchesFilters(device: DeviceListItem, filters: DeviceListFilters): boolean {
  if (filters.active && device.status === 'active') return true;
  if (filters.inactive && device.status === 'inactive') return true;
  if (filters.registered && device.status === 'registered') return true;
  return false;
}

function matchesSearch(device: DeviceListItem, searchQuery: string): boolean {
  if (searchQuery.length < 3) return true;

  const query = searchQuery.toLowerCase();
  return (
    device.name.toLowerCase().includes(query) || device.id.toLowerCase().includes(query)
  );
}

function sortDevices(
  devices: DeviceListItem[],
  sortColumn: DeviceSortColumn,
  sortDirection: DeviceSortDirection,
): DeviceListItem[] {
  const sorted = [...devices].sort((left, right) => {
    const leftValue = left[sortColumn] ?? '';
    const rightValue = right[sortColumn] ?? '';
    return String(leftValue).localeCompare(String(rightValue));
  });

  return sortDirection === 'desc' ? sorted.reverse() : sorted;
}

/** Outer card wrapping the Results toolbar, table headers, rows, and empty state. */
export function DeviceResultsCard({
  devices,
  searchQuery,
  emptyState,
  onSelectDevice,
}: DeviceResultsCardProps) {
  const [filters, setFilters] = useState<DeviceListFilters>({ ...DEFAULT_FILTERS });
  const [sortColumn, setSortColumn] = useState<DeviceSortColumn>('recentPacket');
  const [sortDirection, setSortDirection] = useState<DeviceSortDirection>('desc');

  const visibleDevices = useMemo(() => {
    const filtered = devices.filter(
      (device) => matchesFilters(device, filters) && matchesSearch(device, searchQuery),
    );
    return sortDevices(filtered, sortColumn, sortDirection);
  }, [devices, filters, searchQuery, sortColumn, sortDirection]);

  function handleFilterChange(key: keyof DeviceListFilters, checked: boolean) {
    setFilters((previous) => ({ ...previous, [key]: checked }));
  }

  function handleSortColumn(column: DeviceSortColumn) {
    if (column === sortColumn) {
      setSortDirection((direction) => (direction === 'desc' ? 'asc' : 'desc'));
      return;
    }

    setSortColumn(column);
    setSortDirection('desc');
  }

  return (
    <Card className={styles.card} aria-labelledby="device-results-heading">
      <DeviceListToolbar filters={filters} onFilterChange={handleFilterChange} />

      <DeviceTable
        devices={visibleDevices}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
        emptyState={emptyState}
        onSortColumn={handleSortColumn}
        onSelectDevice={onSelectDevice}
      />
    </Card>
  );
}
