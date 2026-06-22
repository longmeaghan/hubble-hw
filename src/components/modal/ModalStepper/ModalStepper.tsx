import styles from './ModalStepper.module.css';

interface ModalStepperProps {
  steps: { id: string; label: string }[];
  activeIndex: number;
}

export function ModalStepper({ steps, activeIndex }: ModalStepperProps) {
  const lastIndex = steps.length - 1;

  return (
    <nav className={styles.stepper} aria-label="Progress">
      <ol className={styles.list}>
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          const isComplete = index < activeIndex;
          const isReached = index <= activeIndex;

          return (
            <li
              key={step.id}
              className={`${styles.step} ${isActive ? styles.active : ''} ${isComplete ? styles.complete : ''}`}
              aria-current={isActive ? 'step' : undefined}
            >
              <div className={styles.indicatorRow}>
                {index > 0 ? (
                  <span
                    className={`${styles.connector} ${index <= activeIndex ? styles.connectorFilled : ''}`}
                    aria-hidden="true"
                  />
                ) : (
                  <span className={styles.connectorSpacer} aria-hidden="true" />
                )}
                <span className={`${styles.number} ${isReached ? styles.numberReached : ''}`}>
                  {index + 1}
                </span>
                {index < lastIndex ? (
                  <span
                    className={`${styles.connector} ${index < activeIndex ? styles.connectorFilled : ''}`}
                    aria-hidden="true"
                  />
                ) : (
                  <span className={styles.connectorSpacer} aria-hidden="true" />
                )}
              </div>
              <span className={styles.label}>{step.label}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
