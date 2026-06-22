import styles from './QuestionStep.module.css';

export interface WizardOption {
  id: string;
  label: string;
  allowsCustomInput?: boolean;
}

interface QuestionStepProps {
  title: string;
  options: WizardOption[];
  selectedId: string;
  otherValue?: string;
  onSelectOption: (optionId: string) => void;
  onOtherInputChange?: (value: string) => void;
}

export function QuestionStep({
  title,
  options,
  selectedId,
  otherValue = '',
  onSelectOption,
  onOtherInputChange,
}: QuestionStepProps) {
  return (
    <div className={styles.step}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.optionList} role="radiogroup" aria-label={title}>
        {options.map((option) => {
          const isSelected = selectedId === option.id;

          return (
            <li key={option.id}>
              <button
                type="button"
                role="radio"
                aria-checked={isSelected}
                className={`${styles.option} ${isSelected ? styles.selected : ''}`}
                onClick={() => onSelectOption(option.id)}
              >
                {option.label}
              </button>
              {option.allowsCustomInput && isSelected && (
                <input
                  type="text"
                  className={styles.otherInput}
                  placeholder="Describe what you're tracking"
                  value={otherValue}
                  onChange={(event) => onOtherInputChange?.(event.target.value)}
                  aria-label="Custom use case description"
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
