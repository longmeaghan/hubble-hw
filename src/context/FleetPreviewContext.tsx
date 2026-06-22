import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { FleetSimulation, FleetWizardAnswers } from '@/types/fleetSimulation';
import { generateFleetSimulation } from '@/data/generateFleetSimulation';

export type FleetFlowPath = 'template' | 'custom' | null;

interface FleetPreviewContextValue {
  simulation: FleetSimulation | null;
  isPreviewActive: boolean;
  isVisualizeFleetComplete: boolean;
  pathTaken: FleetFlowPath;
  completeFleetFlow: (answers: FleetWizardAnswers, path: Exclude<FleetFlowPath, null>) => void;
}

const FleetPreviewContext = createContext<FleetPreviewContextValue | null>(null);

export function FleetPreviewProvider({ children }: { children: ReactNode }) {
  const [simulation, setSimulation] = useState<FleetSimulation | null>(null);
  const [isVisualizeFleetComplete, setIsVisualizeFleetComplete] = useState(false);
  const [pathTaken, setPathTaken] = useState<FleetFlowPath>(null);

  const completeFleetFlow = useCallback(
    (answers: FleetWizardAnswers, path: Exclude<FleetFlowPath, null>) => {
      setSimulation(generateFleetSimulation(answers));
      setIsVisualizeFleetComplete(true);
      setPathTaken(path);
    },
    [],
  );

  const value = useMemo(
    () => ({
      simulation,
      isPreviewActive: simulation !== null,
      isVisualizeFleetComplete,
      pathTaken,
      completeFleetFlow,
    }),
    [simulation, isVisualizeFleetComplete, pathTaken, completeFleetFlow],
  );

  return (
    <FleetPreviewContext.Provider value={value}>{children}</FleetPreviewContext.Provider>
  );
}

export function useFleetPreview() {
  const context = useContext(FleetPreviewContext);
  if (!context) {
    throw new Error('useFleetPreview must be used within FleetPreviewProvider');
  }
  return context;
}
