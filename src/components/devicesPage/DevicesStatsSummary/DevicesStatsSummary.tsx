import { ChevronDown } from 'lucide-react';
import { Card, CardBody } from '@/components/ui/Card';
import type { DevicesStatsSummary as DevicesStatsSummaryData } from '@/types/devicesPage';
import styles from './DevicesStatsSummary.module.css';

interface DevicesStatsSummaryProps {
  stats: DevicesStatsSummaryData;
}

export function DevicesStatsSummary({ stats }: DevicesStatsSummaryProps) {
  return (
    <Card className={styles.card}>
      <CardBody className={styles.body}>
        <div className={styles.topRow}>
          <p className={styles.totalLine}>
            <span className={styles.totalLabel}>Total</span>
            <span className={styles.totalValue}>{stats.total}</span>
          </p>
          <button type="button" className={styles.timeRangeButton} aria-haspopup="listbox">
            {stats.timeRangeLabel}
            <ChevronDown size={14} aria-hidden="true" />
          </button>
        </div>

        <div className={styles.breakdown}>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Active</span>
            <span className={styles.activePercent}>{stats.activePercent}%</span>
            <div className={styles.barTrack}>
              <div className={styles.barFillActive} style={{ width: `${stats.activePercent}%` }} />
            </div>
            <span className={styles.statCount}>{stats.activeCount}</span>
          </div>

          <div className={styles.stat}>
            <span className={styles.statLabel}>Inactive</span>
            <span className={styles.inactivePercent}>{stats.inactivePercent}%</span>
            <div className={styles.barTrack}>
              <div
                className={styles.barFillInactive}
                style={{ width: `${stats.inactivePercent}%` }}
              />
            </div>
            <span className={styles.statCount}>{stats.inactiveCount}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
