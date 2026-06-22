import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PreviewIndicator } from '@/components/dashboard/PreviewIndicator';
import { useFleetPreview } from '@/context/FleetPreviewContext';
import type { SimulatedDevice } from '@/types/fleetSimulation';
import styles from './DevicesListView.module.css';

interface DevicesListViewProps {
  onSelectDevice: (device: SimulatedDevice) => void;
  onNavigateDashboard: () => void;
}

export function DevicesListView({ onSelectDevice, onNavigateDashboard }: DevicesListViewProps) {
  const { simulation } = useFleetPreview();
  const devices = simulation?.devices ?? [];

  return (
    <div className={styles.view}>
      <PreviewIndicator onNavigateDashboard={onNavigateDashboard} />

      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>My Devices</h1>
          <p className={styles.subtitle}>Manage your devices</p>
        </div>
        <Button aria-label="Add a Device">
          <Plus size={16} aria-hidden="true" />
          Add a Device
        </Button>
      </header>

      <section className={styles.results} aria-labelledby="results-heading">
        <h2 id="results-heading" className={styles.resultsHeading}>
          Results {simulation ? `(${simulation.totalDevices.toLocaleString()} total)` : ''}
        </h2>

        {devices.length === 0 ? (
          <p className={styles.empty}>No devices registered yet.</p>
        ) : (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Payload</th>
                  <th scope="col">Recent Packet</th>
                  <th scope="col">Location</th>
                  <th scope="col">Network</th>
                </tr>
              </thead>
              <tbody>
                {devices.map((device) => (
                  <tr key={device.id}>
                    <td>
                      <button
                        type="button"
                        className={styles.deviceLink}
                        onClick={() => onSelectDevice(device)}
                      >
                        {device.name}
                      </button>
                    </td>
                    <td>{device.payload.summary}</td>
                    <td>{device.recentPacket}</td>
                    <td>{device.location}</td>
                    <td>{device.network}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
