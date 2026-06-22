import { Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './DevicesPageHeader.module.css';

interface DevicesPageHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onAddDevice?: () => void;
}

export function DevicesPageHeader({
  searchQuery,
  onSearchChange,
  onAddDevice,
}: DevicesPageHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>My Devices</h1>
        <p className={styles.subtitle}>Manage your devices</p>
      </div>

      <div className={styles.searchWrap}>
        <label className={styles.searchLabel} htmlFor="devices-search">
          Search devices
        </label>
        <div className={styles.searchField}>
          <span className={styles.searchPrefix} aria-hidden="true">
            Search
          </span>
          <input
            id="devices-search"
            type="search"
            className={styles.searchInput}
            placeholder="Device name or Device ID (min 3 characters)"
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
          />
          <Search size={18} className={styles.searchIcon} aria-hidden="true" />
        </div>
      </div>

      <Button className={styles.addButton} onClick={onAddDevice}>
        <Plus size={16} aria-hidden="true" />
        Add a Device
      </Button>
    </header>
  );
}
