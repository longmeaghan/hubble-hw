import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './DashboardHeader.module.css';

interface DashboardHeaderProps {
  greeting: string;
  onAddDevice?: () => void;
}

export function DashboardHeader({ greeting, onAddDevice }: DashboardHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.titles}>
        <h1 className={styles.title}>Dashboard</h1>
        <p className={styles.greeting}>{greeting}</p>
      </div>
      <Button onClick={onAddDevice} aria-label="Add a Device">
        <Plus size={16} aria-hidden="true" />
        Add a Device
      </Button>
    </header>
  );
}
