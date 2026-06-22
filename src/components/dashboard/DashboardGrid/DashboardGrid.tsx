import { ApiActivityCard } from '@/components/dashboard/ApiActivityCard';
import { DevicesMapCard } from '@/components/dashboard/DevicesMapCard';
import { HubbleLiveCard } from '@/components/dashboard/HubbleLiveCard';
import { NetworkActivityCard } from '@/components/dashboard/NetworkActivityCard';
import { TotalDevicesCard } from '@/components/dashboard/TotalDevicesCard';
import type { FleetSimulation } from '@/types/fleetSimulation';
import type { DashboardMetrics, DashboardPageData } from '@/types/dashboard';
import styles from './DashboardGrid.module.css';

interface DashboardGridProps {
  metrics: DashboardMetrics;
  networkActivityRange: DashboardPageData['networkActivityRange'];
  simulation?: FleetSimulation | null;
  onViewDevices?: () => void;
}

export function DashboardGrid({
  metrics,
  networkActivityRange,
  simulation,
  onViewDevices,
}: DashboardGridProps) {
  const displayMetrics = simulation
    ? {
        totalDevices: simulation.totalDevices,
        activePercent: simulation.activePercent,
        inactivePercent: simulation.inactivePercent,
        broadcastsInLiveNetwork: simulation.broadcastsInLiveNetwork,
      }
    : metrics;

  return (
    <div className={styles.grid}>
      <div className={styles.primaryColumn}>
        <DevicesMapCard pins={simulation?.mapPins} onViewDevices={onViewDevices} />
        <NetworkActivityCard
          activeRange={networkActivityRange}
          broadcastsInLiveNetwork={displayMetrics.broadcastsInLiveNetwork}
          networkActivity={simulation?.networkActivity}
        />
      </div>
      <aside className={styles.secondaryColumn} aria-label="Dashboard summary">
        <TotalDevicesCard
          total={displayMetrics.totalDevices}
          activePercent={displayMetrics.activePercent}
          inactivePercent={displayMetrics.inactivePercent}
        />
        <HubbleLiveCard />
        <ApiActivityCard
          apiSuccessRate={metrics.apiSuccessRate}
          webhookDeliveryRate={metrics.webhookDeliveryRate}
        />
      </aside>
    </div>
  );
}
