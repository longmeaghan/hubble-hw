import type { QuickStartEntry } from '@/types/dashboard';
import { QuickStartCard } from './QuickStartCard';
import styles from './QuickStartSection.module.css';

interface QuickStartSectionProps {
  entries: QuickStartEntry[];
  onEntrySelect?: (entry: QuickStartEntry) => void;
}

/** Extensible entry-point row — add cards via `entries`, not by editing layout. */
export function QuickStartSection({ entries, onEntrySelect }: QuickStartSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="quick-start-heading">
      <h2 id="quick-start-heading" className={styles.heading}>
        Quick Start
      </h2>
      <p className={styles.description}>
      Whether you're exploring, testing hardware, or ready to integrate, start here.
      </p>
      <ul className={styles.grid}>
        {entries.map((entry) => (
          <li key={entry.id}>
            <QuickStartCard entry={entry} onSelect={onEntrySelect} />
          </li>
        ))}
      </ul>
    </section>
  );
}
