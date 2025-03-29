import { Button, Select, Text } from '@workpace/design-system';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div>
      <main>
        <div className={styles.main}>
          <h1>Consumer</h1>
          <Button variant={'brand-primary'}>brand-primary</Button>
          <Button variant={'brand-secondary'}>brand-secondary</Button>
          <Button variant={'default-primary'}>Testing</Button>
          <Button variant={'default-secondary'}>Testing</Button>
          <Select label="selectable">
            <option>yooo1</option>
            <option>yooo2</option>
          </Select>
          <Text variant={'headline-display-emphasis'}>Nice</Text>
        </div>
      </main>
    </div>
  );
}
