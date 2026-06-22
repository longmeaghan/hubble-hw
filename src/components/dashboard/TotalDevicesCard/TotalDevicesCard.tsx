import { Card, CardBody, CardHeader, TimeRangeBadge } from '@/components/ui/Card';
import styles from './TotalDevicesCard.module.css';

interface TotalDevicesCardProps {
  total: number;
  activePercent: number;
  inactivePercent: number;
}

export function TotalDevicesCard({
  total,
  activePercent,
  inactivePercent,
}: TotalDevicesCardProps) {
  return (
    <Card>
      <CardHeader title="Total Devices" badge={<TimeRangeBadge label="Last 7 Days" />} />
      <CardBody className={styles.body}>
        <p className={styles.total} aria-label={`${total} total devices`}>
          {total}
        </p>
        <div className={styles.breakdown}>
          <div className={styles.stat}>
            <div className={styles.statHeader}>
              <span className={styles.statLabel}>Active</span>
              <span className={styles.activeValue}>{activePercent}%</span>
            </div>
            <div className={styles.barTrack}>
              <div className={styles.barFillActive} style={{ width: `${activePercent}%` }} />
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statHeader}>
              <span className={styles.statLabel}>Inactive</span>
              <span className={styles.inactiveValue}>{inactivePercent}%</span>
            </div>
            <div className={styles.barTrack}>
              <div className={styles.barFillInactive} style={{ width: `${inactivePercent}%` }} />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
