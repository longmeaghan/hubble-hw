import { useMemo, useState } from 'react';
import { DashboardFooter } from '@/components/dashboard/DashboardFooter';
import { DashboardGrid } from '@/components/dashboard/DashboardGrid';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { PreviewIndicator } from '@/components/dashboard/PreviewIndicator';
import { QuickStartSection } from '@/components/dashboard/QuickStartSection';
import { DeviceDetailModal } from '@/components/devices/DeviceDetailModal';
import { VisualizeFleetModal } from '@/components/modal/visualizeFleet';
import { useFleetPreview } from '@/context/FleetPreviewContext';
import { useAppNavigation } from '@/navigation/AppNavigationContext';
import type { DashboardPageData } from '@/types/dashboard';
import type { QuickStartEntry } from '@/types/dashboard';
import type { SimulatedDevice } from '@/types/fleetSimulation';
import styles from './DashboardApp.module.css';

interface DashboardAppProps {
  data: DashboardPageData;
}

function getGreeting(displayName: string): string {
  const hour = new Date().getHours();
  const salutation = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';
  const firstName = displayName.split(' ')[0] ?? displayName;
  return `${salutation}, ${firstName}`;
}

export function DashboardApp({ data }: DashboardAppProps) {
  const { postSetup } = data;
  const { simulation, isVisualizeFleetComplete, completeFleetFlow } = useFleetPreview();
  const { navigateToRoute } = useAppNavigation();
  const [isFleetModalOpen, setIsFleetModalOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<SimulatedDevice | null>(null);

  const quickStartEntries = useMemo(
    () =>
      postSetup.quickStartEntries.map((entry) =>
        entry.id === 'visualize-fleet' && isVisualizeFleetComplete
          ? { ...entry, status: 'completed' as const }
          : entry,
      ),
    [postSetup.quickStartEntries, isVisualizeFleetComplete],
  );

  function handleQuickStartSelect(entry: QuickStartEntry) {
    if (entry.id === 'visualize-fleet' && !isVisualizeFleetComplete) {
      setIsFleetModalOpen(true);
    }
  }

  return (
    <>
      <div
        className={styles.content}
        data-wizard-status={postSetup.wizardStatus}
        data-completed-steps={postSetup.completedStepIds.join(',')}
        data-fleet-preview-active={simulation ? 'true' : 'false'}
        data-visualize-fleet-complete={isVisualizeFleetComplete ? 'true' : 'false'}
      >
        <DashboardHeader greeting={getGreeting(data.user.displayName)} />

        <QuickStartSection entries={quickStartEntries} onEntrySelect={handleQuickStartSelect} />

        <PreviewIndicator />

        <DashboardGrid
          metrics={data.metrics}
          networkActivityRange={data.networkActivityRange}
          simulation={simulation}
          onViewDevices={() => navigateToRoute('devices')}
        />
        <DashboardFooter />
      </div>

      {isFleetModalOpen && (
        <VisualizeFleetModal
          onClose={() => setIsFleetModalOpen(false)}
          onComplete={(answers, path) => {
            completeFleetFlow(answers, path);
            navigateToRoute('dashboard');
          }}
        />
      )}

      {selectedDevice && (
        <DeviceDetailModal device={selectedDevice} onClose={() => setSelectedDevice(null)} />
      )}
    </>
  );
}
