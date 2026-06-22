import { ArrowDown } from 'lucide-react';
import { DeviceListEmptyState } from '@/components/devicesPage/DeviceListEmptyState';
import { DeviceTableRow } from '@/components/devicesPage/DeviceTableRow';
import type {
  DeviceListEmptyStateCopy,
  DeviceListItem,
  DeviceSortColumn,
  DeviceSortDirection,
} from '@/types/devicesPage';
import styles from './DeviceTable.module.css';

export const DEVICE_TABLE_COLUMNS: {
  id: DeviceSortColumn;
  label: string;
  sortable: boolean;
}[] = [
  { id: 'name', label: 'Name', sortable: false },
  { id: 'payload', label: 'Payload', sortable: false },
  { id: 'recentPacket', label: 'Recent Packet', sortable: true },
  { id: 'location', label: 'Location', sortable: false },
  { id: 'network', label: 'Network', sortable: false },
];

interface DeviceTableProps {
  devices: DeviceListItem[];
  sortColumn: DeviceSortColumn;
  sortDirection: DeviceSortDirection;
  emptyState?: DeviceListEmptyStateCopy;
  onSortColumn: (column: DeviceSortColumn) => void;
  onSelectDevice?: (device: DeviceListItem) => void;
}

export function DeviceTable({
  devices,
  sortColumn,
  sortDirection,
  emptyState,
  onSortColumn,
  onSelectDevice,
}: DeviceTableProps) {
  const isEmpty = devices.length === 0;

  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            {DEVICE_TABLE_COLUMNS.map((column) => {
              const isSorted = sortColumn === column.id;

              return (
                <th key={column.id} scope="col" className={styles.columnHeader}>
                  {column.sortable ? (
                    <button
                      type="button"
                      className={`${styles.sortButton} ${isSorted ? styles.sortButtonActive : ''}`}
                      onClick={() => onSortColumn(column.id)}
                      aria-sort={
                        isSorted
                          ? sortDirection === 'desc'
                            ? 'descending'
                            : 'ascending'
                          : 'none'
                      }
                    >
                      {column.label}
                      {isSorted && sortDirection === 'desc' && (
                        <ArrowDown size={12} aria-hidden="true" />
                      )}
                    </button>
                  ) : (
                    column.label
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {isEmpty && emptyState ? (
            <tr className={styles.emptyRow}>
              <td colSpan={DEVICE_TABLE_COLUMNS.length}>
                <DeviceListEmptyState
                  primary={emptyState.primary}
                  secondary={emptyState.secondary}
                />
              </td>
            </tr>
          ) : (
            devices.map((device) => (
              <DeviceTableRow key={device.id} device={device} onSelect={onSelectDevice} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
