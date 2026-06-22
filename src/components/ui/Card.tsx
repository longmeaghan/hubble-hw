import type { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: 'section' | 'article' | 'div';
}

export function Card({ children, className = '', as: Tag = 'section' }: CardProps) {
  return <Tag className={`${styles.card} ${className}`.trim()}>{children}</Tag>;
}

interface CardHeaderProps {
  title: string;
  actions?: ReactNode;
  badge?: ReactNode;
}

export function CardHeader({ title, actions, badge }: CardHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.titleRow}>
        <h2 className={styles.title}>{title}</h2>
        {badge}
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </header>
  );
}

export function CardBody({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`${styles.body} ${className}`.trim()}>{children}</div>;
}

export function TimeRangeBadge({ label }: { label: string }) {
  return <span className={styles.timeBadge}>{label}</span>;
}
