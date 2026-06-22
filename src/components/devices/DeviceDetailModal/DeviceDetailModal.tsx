import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import type { SimulatedDevice } from '@/types/fleetSimulation';
import styles from './DeviceDetailModal.module.css';

interface DeviceDetailModalProps {
  device: SimulatedDevice;
  onClose: () => void;
}

export function DeviceDetailModal({ device, onClose }: DeviceDetailModalProps) {
  return createPortal(
    <div className={styles.overlay} role="presentation" onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={`Device details for ${device.name}`}
        onClick={(event) => event.stopPropagation()}
      >
        <header className={styles.header}>
          <div>
            <h2 className={styles.title}>{device.name}</h2>
            <p className={styles.subtitle}>{device.id}</p>
          </div>
          <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </header>

        <dl className={styles.details}>
          <div className={styles.row}>
            <dt>Location</dt>
            <dd>{device.location}</dd>
          </div>
          <div className={styles.row}>
            <dt>Network</dt>
            <dd>{device.network}</dd>
          </div>
          <div className={styles.row}>
            <dt>Status</dt>
            <dd className={device.status === 'active' ? styles.active : styles.inactive}>
              {device.status}
            </dd>
          </div>
          <div className={styles.row}>
            <dt>Recent packet</dt>
            <dd>{device.recentPacket}</dd>
          </div>
          <div className={styles.row}>
            <dt>Payload</dt>
            <dd>
              {device.payload.summary}
              {device.payload.alert && (
                <span className={styles.alert}> · {device.payload.alert}</span>
              )}
            </dd>
          </div>
          {Object.entries(device.detail).map(([key, value]) => (
            <div key={key} className={styles.row}>
              <dt>{key}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>,
    document.body,
  );
}
