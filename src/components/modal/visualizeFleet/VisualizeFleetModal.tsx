import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ModalShell } from '@/components/modal/ModalShell';
import { ModalStepper } from '@/components/modal/ModalStepper';
import {
  canAdvanceWizardStep,
  DEVICE_COUNT_OPTIONS,
  FLEET_TEMPLATES,
  FLEET_WIZARD_STEPS,
  LOCATION_OPTIONS,
  USE_CASE_OPTIONS,
} from '@/data/generateFleetSimulation';
import type { FleetWizardAnswers, PathChoice } from '@/types/fleetSimulation';
import { EMPTY_FLEET_ANSWERS } from '@/types/fleetSimulation';
import { PathSelectionStep } from './PathSelectionStep';
import { QuestionStep } from './QuestionStep';
import styles from './VisualizeFleetModal.module.css';

interface VisualizeFleetModalProps {
  onClose: () => void;
  onComplete: (answers: FleetWizardAnswers, path: 'template' | 'custom') => void;
}

type ModalPhase = 'intro' | 'questions';

const STEP_CONFIG = [
  { title: 'What are you tracking?', options: USE_CASE_OPTIONS, answerKey: 'useCase' as const },
  { title: 'Roughly how many devices?', options: DEVICE_COUNT_OPTIONS, answerKey: 'deviceCount' as const },
  { title: 'Where are your devices?', options: LOCATION_OPTIONS, answerKey: 'location' as const },
];

function getTemplateById(templateId: string) {
  return FLEET_TEMPLATES.find((template) => template.id === templateId);
}

export function VisualizeFleetModal({ onClose, onComplete }: VisualizeFleetModalProps) {
  const [phase, setPhase] = useState<ModalPhase>('intro');
  const [path, setPath] = useState<PathChoice | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<FleetWizardAnswers>({ ...EMPTY_FLEET_ANSWERS });

  const currentStep = STEP_CONFIG[questionIndex];
  const selectedId = answers[currentStep.answerKey] as string;
  const canContinue = canAdvanceWizardStep(questionIndex, answers);
  const isLastStep = questionIndex === STEP_CONFIG.length - 1;
  const isIntro = phase === 'intro';

  function handleSelectCustom() {
    setPath({ type: 'custom' });
    setAnswers({ ...EMPTY_FLEET_ANSWERS });
    setQuestionIndex(0);
    setPhase('questions');
  }

  function handleSelectTemplate(templateId: string) {
    const template = getTemplateById(templateId);
    if (!template) return;

    const answers: FleetWizardAnswers = {
      ...EMPTY_FLEET_ANSWERS,
      ...template.prefills,
    };

    onComplete(answers, 'template');
    onClose();
  }

  function handleSelectOption(optionId: string) {
    setAnswers((previous) => {
      const next = { ...previous, [currentStep.answerKey]: optionId };
      if (currentStep.answerKey === 'useCase' && optionId !== 'other') {
        next.useCaseOther = '';
      }
      return next;
    });
  }

  function handleBack() {
    if (isIntro) {
      onClose();
      return;
    }

    if (questionIndex > 0) {
      setQuestionIndex((index) => index - 1);
      return;
    }

    setPhase('intro');
    setPath(null);
    setAnswers({ ...EMPTY_FLEET_ANSWERS });
    setQuestionIndex(0);
  }

  function handleContinue() {
    if (!canContinue) return;

    if (isLastStep) {
      onComplete(answers, 'custom');
      onClose();
      return;
    }

    setQuestionIndex((index) => index + 1);
  }

  const showStepper = !isIntro;

  return (
    <ModalShell
      ariaLabel="Visualize Your Fleet"
      onClose={onClose}
      onBack={handleBack}
      showBack={!isIntro}
      headerCenter={
        showStepper ? (
          <ModalStepper steps={[...FLEET_WIZARD_STEPS]} activeIndex={questionIndex} />
        ) : undefined
      }
      footer={
        isIntro ? undefined : (
          <div className={styles.footer}>
            <Button onClick={handleContinue} disabled={!canContinue}>
              Continue
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        )
      }
    >
      <div
        className={styles.content}
        data-modal-phase={phase}
        data-path-type={path?.type ?? 'none'}
        data-question-index={questionIndex}
      >
        {isIntro ? (
          <PathSelectionStep
            templates={FLEET_TEMPLATES}
            onSelectCustom={handleSelectCustom}
            onSelectTemplate={handleSelectTemplate}
          />
        ) : (
          <QuestionStep
            title={currentStep.title}
            options={currentStep.options}
            selectedId={selectedId}
            otherValue={answers.useCaseOther}
            onSelectOption={handleSelectOption}
            onOtherInputChange={(value) =>
              setAnswers((previous) => ({ ...previous, useCaseOther: value }))
            }
          />
        )}
      </div>
    </ModalShell>
  );
}
