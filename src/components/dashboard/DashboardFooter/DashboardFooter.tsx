import styles from './DashboardFooter.module.css';

export function DashboardFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.legal}>
        <span>©2026 Hubble Network</span>
        <span className={styles.divider} aria-hidden="true">
          |
        </span>
        <a href="#">Privacy Policy</a>
        <span className={styles.divider} aria-hidden="true">
          |
        </span>
        <a href="#">Terms of Service</a>
        <span className={styles.divider} aria-hidden="true">
          |
        </span>
        <a href="#">Status Page</a>
      </div>
      <div className={styles.sandboxNotice}>
        <p>
          You are in the Sandbox and will only see device IoT data captured locally using the
          Hubble Connect app.
        </p>
        <span className={styles.logoMark} aria-label="Hubble Network">
          H
        </span>
      </div>
    </footer>
  );
}
