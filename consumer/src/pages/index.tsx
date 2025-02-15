import { Button } from '@workpace/design-system';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div>
      <main>
        <h1>Consumer</h1>
        <div className={styles.main}>
          <Button>Testing</Button>
        </div>
      </main>
    </div>
  );
}
