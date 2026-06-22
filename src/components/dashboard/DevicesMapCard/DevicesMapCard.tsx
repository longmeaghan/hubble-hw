import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { FleetMap } from '@/components/dashboard/FleetMap';
import type { MapPin } from '@/types/fleetSimulation';
import styles from './DevicesMapCard.module.css';

interface DevicesMapCardProps {
  pins?: MapPin[];
  onViewDevices?: () => void;
}

export function DevicesMapCard({ pins = [], onViewDevices }: DevicesMapCardProps) {
  return (
    <Card className={styles.card}>
      <CardHeader
        title="Devices Map"
        actions={
          <>
            <Button variant="outline" onClick={onViewDevices}>
              View Devices
              <ArrowUpRight size={14} aria-hidden="true" />
            </Button>
            <button type="button" className={styles.iconButton} aria-label="Map options">
              <ChevronDown size={16} />
            </button>
          </>
        }
      />
      <CardBody className={styles.mapBody}>
        <FleetMap pins={pins} />
      </CardBody>
    </Card>
  );
}
