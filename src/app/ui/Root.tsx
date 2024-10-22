import { LeftColumn } from '../../widgets/LeftColumn';
import { Outlet } from 'react-router-dom';
import styles from './Root.module.css';

export function Root() {
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
