import { Download, LayoutGrid, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { DeviceListFilters } from '@/types/devicesPage';
import styles from './DeviceListToolbar.module.css';

interface DeviceListToolbarProps {
  filters: DeviceListFilters;
  onFilterChange: (key: keyof DeviceListFilters, checked: boolean) => void;
  onEditDevices?: () => void;
  onExport?: () => void;
  onToggleLayout?: () => void;
}

export function DeviceListToolbar({
  filters,
  onFilterChange,
  onEditDevices,
  onExport,
  onToggleLayout,
}: DeviceListToolbarProps) {
  return (
    <div className={styles.toolbar}>
      <h2 id="device-results-heading" className={styles.title}>
        Results
      </h2>

      <div className={styles.actions}>
        <fieldset className={styles.filters}>
          <legend className={styles.filtersLegend}>Filter by status</legend>
          <label className={styles.filterLabel}>
            <input
              type="checkbox"
              checked={filters.active}
              onChange={(event) => onFilterChange('active', event.target.checked)}
            />
            Active
          </label>
          <label className={styles.filterLabel}>
            <input
              type="checkbox"
              checked={filters.inactive}
              onChange={(event) => onFilterChange('inactive', event.target.checked)}
            />
            Inactive
          </label>
          <label className={styles.filterLabel}>
            <input
              type="checkbox"
              checked={filters.registered}
              onChange={(event) => onFilterChange('registered', event.target.checked)}
            />
            Registered
          </label>
        </fieldset>

        <div className={styles.iconActions}>
          <Button variant="outline" className={styles.editButton} onClick={onEditDevices}>
            <Pencil size={14} aria-hidden="true" />
            Edit devices
          </Button>
          <button type="button" className={styles.iconButton} aria-label="Export devices" onClick={onExport}>
            <Download size={16} aria-hidden="true" />
          </button>
          <button
            type="button"
            className={styles.iconButton}
            aria-label="Change layout"
            onClick={onToggleLayout}
          >
            <LayoutGrid size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
