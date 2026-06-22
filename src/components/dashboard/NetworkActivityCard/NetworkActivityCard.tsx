import { Info } from 'lucide-react';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import type { NetworkActivityPoint } from '@/types/fleetSimulation';
import styles from './NetworkActivityCard.module.css';

const TIME_RANGES = ['24hr', '7D', '30D', '6M', 'Y'] as const;

interface NetworkActivityCardProps {
  activeRange: (typeof TIME_RANGES)[number];
  broadcastsInLiveNetwork: number;
  networkActivity?: NetworkActivityPoint[];
  onRangeChange?: (range: (typeof TIME_RANGES)[number]) => void;
}

function buildChartPath(points: NetworkActivityPoint[]): string {
  if (points.length === 0) return '';

  const maxPackets = Math.max(...points.map((point) => point.packets), 1);
  const coords = points.map((point, index) => {
    const x = (index / (points.length - 1)) * 100;
    const y = 100 - (point.packets / maxPackets) * 80;
    return `${x},${y}`;
  });

  return `M ${coords.join(' L ')}`;
}

export function NetworkActivityCard({
  activeRange,
  broadcastsInLiveNetwork,
  networkActivity,
  onRangeChange,
}: NetworkActivityCardProps) {
  const hasActivity = networkActivity && networkActivity.length > 0;
  const chartPath = hasActivity ? buildChartPath(networkActivity) : '';

  return (
    <Card className={styles.card}>
      <CardHeader
        title="Network Activity"
        actions={
          <div className={styles.rangeToggle} role="group" aria-label="Time range">
            {TIME_RANGES.map((range) => (
              <button
                key={range}
                type="button"
                className={`${styles.rangeButton} ${range === activeRange ? styles.rangeActive : ''}`}
                aria-pressed={range === activeRange}
                onClick={() => onRangeChange?.(range)}
              >
                {range}
              </button>
            ))}
          </div>
        }
      />
      <CardBody className={styles.body}>
        <div className={styles.metaRow}>
          <div className={styles.legend}>
            <span className={styles.legendLine} aria-hidden="true" />
            <span>Packets Received</span>
          </div>
          <div className={styles.statusPill}>
            <span>{broadcastsInLiveNetwork} broadcasts in the Live Network</span>
            <Info size={14} aria-hidden="true" />
          </div>
        </div>

        <div className={styles.chartArea}>
          {!hasActivity && <div className={styles.emptyStateGlow} aria-hidden="true" />}
          {hasActivity && (
            <svg className={styles.chart} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="packetFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(251, 191, 36, 0.35)" />
                  <stop offset="100%" stopColor="rgba(251, 191, 36, 0)" />
                </linearGradient>
              </defs>
              <path d={`${chartPath} L 100,100 L 0,100 Z`} fill="url(#packetFill)" />
              <path d={chartPath} fill="none" stroke="var(--color-chart-line)" strokeWidth="1.5" />
            </svg>
          )}
          {!hasActivity && (
            <span className={styles.emptyLabel}>No packets received yet</span>
          )}
        </div>

        <div className={styles.axis} aria-hidden="true">
          <span>Tuesday, Jun 16</span>
          <span>6 AM</span>
          <span>12 PM</span>
          <span>6 PM</span>
          <span>Wednesday, Jun 17</span>
        </div>
      </CardBody>
    </Card>
  );
}
