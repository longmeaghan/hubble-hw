import { Globe } from 'lucide-react';
import styles from './DevicesMapFab.module.css';

interface DevicesMapFabProps {
  onClick?: () => void;
}

export function DevicesMapFab({ onClick }: DevicesMapFabProps) {
  return (
    <button type="button" className={styles.fab} onClick={onClick} aria-label="Open map">
      <span className={styles.thumbnail}>
        <Globe size={16} aria-hidden="true" />
      </span>
      <span className={styles.label}>Map</span>
    </button>
  );
}
