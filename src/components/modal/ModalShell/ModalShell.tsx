import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import styles from './ModalShell.module.css';

interface ModalShellProps {
  children: ReactNode;
  onClose: () => void;
  onBack?: () => void;
  showBack?: boolean;
  ariaLabel: string;
  footer?: ReactNode;
  headerCenter?: ReactNode;
}

export function ModalShell({
  children,
  onClose,
  onBack,
  showBack = false,
  ariaLabel,
  footer,
  headerCenter,
}: ModalShellProps) {
  return createPortal(
    <div className={styles.overlay} role="presentation" onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        onClick={(event) => event.stopPropagation()}
      >
        <header className={`${styles.header} ${headerCenter ? styles.headerWithCenter : ''}`}>
          <div className={styles.headerStart}>
            {showBack && onBack ? (
              <button
                type="button"
                className={styles.iconButton}
                onClick={onBack}
                aria-label="Go back"
              >
                <ArrowLeft size={20} />
              </button>
            ) : (
              <span className={styles.headerSpacer} aria-hidden="true" />
            )}
          </div>
          {headerCenter ? <div className={styles.headerCenter}>{headerCenter}</div> : null}
          <button
            type="button"
            className={styles.iconButton}
            onClick={onClose}
            aria-label="Close"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </header>

        <div className={styles.body}>{children}</div>

        {footer && <footer className={styles.footer}>{footer}</footer>}
      </div>
    </div>,
    document.body,
  );
}
