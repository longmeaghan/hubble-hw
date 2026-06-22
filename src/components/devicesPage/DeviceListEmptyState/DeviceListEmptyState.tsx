import styles from './DeviceListEmptyState.module.css';

interface DeviceListEmptyStateProps {
  primary: string;
  secondary: string;
}

export function DeviceListEmptyState({ primary, secondary }: DeviceListEmptyStateProps) {
  return (
    <div className={styles.empty} role="status">
      <p className={styles.primary}>{primary}</p>
      <p className={styles.secondary}>{secondary}</p>
    </div>
  );
}
