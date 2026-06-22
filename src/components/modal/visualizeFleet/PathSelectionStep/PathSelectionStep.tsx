import type { FleetTemplate } from '@/types/fleetSimulation';
import styles from './PathSelectionStep.module.css';

interface PathSelectionStepProps {
  templates: FleetTemplate[];
  onSelectCustom: () => void;
  onSelectTemplate: (templateId: string) => void;
}

export function PathSelectionStep({
  templates,
  onSelectCustom,
  onSelectTemplate,
}: PathSelectionStepProps) {
  return (
    <div className={styles.step}>
      <div className={styles.intro}>
        <h2 className={styles.title}>Visualize Your Fleet</h2>
        <p className={styles.subtitle}>
          Start with a custom description or choose a prebuilt use case to populate your preview.
        </p>
      </div>

      <button type="button" className={styles.customPath} onClick={onSelectCustom}>
        <span className={styles.customLabel}>Describe your use case</span>
        <span className={styles.customHint}>Custom path — answer three quick questions</span>
      </button>

      <section className={styles.templateSection} aria-labelledby="prebuilt-heading">
        <h3 id="prebuilt-heading" className={styles.sectionHeading}>
          Prebuilt use cases
        </h3>
        <ul className={styles.templateGrid}>
          {templates.map((template) => (
            <li key={template.id}>
              <button
                type="button"
                className={styles.templateCard}
                onClick={() => onSelectTemplate(template.id)}
              >
                <span className={styles.templateTitle}>{template.label}</span>
                <span className={styles.templateDescription}>{template.description}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
