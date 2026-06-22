import { DeviceStatusBadge } from '@/components/devicesPage/DeviceStatusBadge';
import type { DeviceListItem } from '@/types/devicesPage';
import styles from './DeviceTableRow.module.css';

interface DeviceTableRowProps {
  device: DeviceListItem;
  onSelect?: (device: DeviceListItem) => void;
}

export function DeviceTableRow({ device, onSelect }: DeviceTableRowProps) {
  return (
    <tr>
      <td>
        <div className={styles.nameCell}>
          {onSelect ? (
            <button
              type="button"
              className={styles.nameButton}
              onClick={() => onSelect(device)}
              aria-label={`Open device ${device.name}`}
            >
              {device.name}
            </button>
          ) : (
            <span className={styles.nameText}>{device.name}</span>
          )}
          <DeviceStatusBadge status={device.status} />
        </div>
      </td>
      <td>{device.payload}</td>
      <td>{device.recentPacket ?? '—'}</td>
      <td>{device.location ?? '—'}</td>
      <td>{device.network}</td>
    </tr>
  );
}
