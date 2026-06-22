import { Check } from 'lucide-react';
import type { QuickStartEntry } from '@/types/dashboard';
import styles from './QuickStartCard.module.css';

interface QuickStartCardProps {
  entry: QuickStartEntry;
  onSelect?: (entry: QuickStartEntry) => void;
}

export function QuickStartCard({ entry, onSelect }: QuickStartCardProps) {
  const isCompleted = entry.status === 'completed';
  const isLocked = entry.status === 'locked';

  return (
    <button
      type="button"
      className={`${styles.card} ${isCompleted ? styles.completed : ''} ${isLocked ? styles.locked : ''}`}
      onClick={() => !isLocked && onSelect?.(entry)}
      disabled={isLocked}
      aria-label={`${entry.title}${isCompleted ? ' — completed' : ''}`}
    >
      <div className={styles.titleRow}>
        <div className={styles.iconSlot}>
          {isCompleted ? (
            <span className={styles.checkIcon} aria-hidden="true">
              <Check size={18} strokeWidth={2.5} />
            </span>
          ) : (
            <span className={styles.placeholderIcon} aria-hidden="true" />
          )}
        </div>
        <h3 className={styles.title}>{entry.title}</h3>
      </div>
      <p className={styles.description}>{entry.description}</p>
    </button>
  );
}
