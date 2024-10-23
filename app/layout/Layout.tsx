import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import { LeftColumn } from '@app/ui/LeftColumn/LeftColumn';

export function Layout() {
  return (
    <div className={styles.layout}>
      <div>
        <LeftColumn />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
