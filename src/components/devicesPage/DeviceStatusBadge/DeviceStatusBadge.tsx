import type { DeviceStatus } from '@/types/devicesPage';
import styles from './DeviceStatusBadge.module.css';

const STATUS_LABELS: Record<DeviceStatus, string> = {
  active: 'Active',
  inactive: 'Inactive',
  registered: 'Registered',
};

interface DeviceStatusBadgeProps {
  status: DeviceStatus;
}

export function DeviceStatusBadge({ status }: DeviceStatusBadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[status]}`} title={STATUS_LABELS[status]}>
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.label}>{STATUS_LABELS[status]}</span>
    </span>
  );
}
