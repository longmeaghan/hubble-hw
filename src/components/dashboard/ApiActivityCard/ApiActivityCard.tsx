import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardBody, CardHeader, TimeRangeBadge } from '@/components/ui/Card';
import styles from './ApiActivityCard.module.css';

interface ApiActivityCardProps {
  apiSuccessRate: number | null;
  webhookDeliveryRate: number | null;
}

function formatRate(value: number | null): string {
  if (value === null) return '--';
  return `${value.toFixed(1)}%`;
}

export function ApiActivityCard({ apiSuccessRate, webhookDeliveryRate }: ApiActivityCardProps) {
  return (
    <Card>
      <CardHeader
        title="API Activity"
        badge={<TimeRangeBadge label="Last 7 Days" />}
        actions={
          <Button variant="outline">
            Manage Access
            <ArrowUpRight size={14} aria-hidden="true" />
          </Button>
        }
      />
      <CardBody className={styles.body}>
        <div className={styles.statBlock}>
          <span className={styles.statLabel}>API Success Rate</span>
          <div className={styles.statValueRow}>
            <span className={styles.statValue}>{formatRate(apiSuccessRate)}</span>
            <ArrowUpRight size={14} className={styles.trendIcon} aria-hidden="true" />
          </div>
        </div>
        <div className={styles.statBlock}>
          <span className={styles.statLabel}>Webhook Delivery Rate</span>
          <span className={styles.statValueMuted}>{formatRate(webhookDeliveryRate)}</span>
        </div>
      </CardBody>
    </Card>
  );
}
