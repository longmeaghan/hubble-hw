import { Button } from '@/components/ui/Button';
import { Card, CardBody } from '@/components/ui/Card';
import styles from './HubbleLiveCard.module.css';

export function HubbleLiveCard() {
  return (
    <Card className={styles.card}>
      <CardBody className={styles.body}>
        <div className={styles.content}>
          <h2 className={styles.title}>Hubble Live</h2>
          <p className={styles.description}>
            Unlock the 90M+ global gateways to track and transmit from anywhere on our
            Terrestrial Network.
          </p>
          <Button variant="secondary" className={styles.cta}>
            Upgrade to Hubble Live
          </Button>
        </div>
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.mountainRange} />
        </div>
      </CardBody>
    </Card>
  );
}
