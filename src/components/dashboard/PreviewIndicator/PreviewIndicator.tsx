import { useFleetPreview } from '@/context/FleetPreviewContext';
import styles from './PreviewIndicator.module.css';

interface PreviewIndicatorProps {
  onNavigateDashboard?: () => void;
}

export function PreviewIndicator({ onNavigateDashboard }: PreviewIndicatorProps) {
  const { simulation } = useFleetPreview();

  if (!simulation) return null;

  return (
    <div className={styles.banner} role="status">
      <span className={styles.label}>
        Previewing: {simulation.useCaseLabel} · {simulation.totalDevices.toLocaleString()} devices ·{' '}
        {simulation.locationLabel}
      </span>
      {onNavigateDashboard && (
        <div className={styles.actions}>
          <button type="button" className={styles.linkButton} onClick={onNavigateDashboard}>
            Dashboard
          </button>
        </div>
      )}
    </div>
  );
}
