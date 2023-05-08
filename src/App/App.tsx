import React from 'react';
import Button, {
  ButtonAppearance,
  ButtonSize,
} from '../Components/Button/Button';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <section className={styles.section}>
        <h2>Buttons</h2>
        <div className={styles.row}>
          <Button appearance={ButtonAppearance.Flat}>Flat</Button>
          <Button appearance={ButtonAppearance.Outlined}>Outlined</Button>
          <Button appearance={ButtonAppearance.Raised}>Raised</Button>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Buttons (Disabled)</h2>
        <div className={styles.row}>
          <Button disabled appearance={ButtonAppearance.Flat}>
            Flat
          </Button>
          <Button disabled appearance={ButtonAppearance.Outlined}>
            Outlined
          </Button>
          <Button disabled appearance={ButtonAppearance.Raised}>
            Raised
          </Button>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Buttons with Icons</h2>
        <div className={styles.row}>
          <Button iconUrl="./logo192.png" appearance={ButtonAppearance.Flat}>
            Flat
          </Button>
          <Button
            iconUrl="./logo192.png"
            appearance={ButtonAppearance.Outlined}
          >
            Outlined
          </Button>
          <Button iconUrl="./logo192.png" appearance={ButtonAppearance.Raised}>
            Raised
          </Button>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Small Buttons</h2>
        <div className={styles.row}>
          <Button
            iconUrl="./logo192.png"
            appearance={ButtonAppearance.Flat}
            size={ButtonSize.Small}
          >
            Flat
          </Button>
          <Button
            iconUrl="./logo192.png"
            appearance={ButtonAppearance.Outlined}
            size={ButtonSize.Small}
          >
            Outlined
          </Button>
          <Button
            iconUrl="./logo192.png"
            appearance={ButtonAppearance.Raised}
            size={ButtonSize.Small}
          >
            Raised
          </Button>
        </div>
      </section>
    </div>
  );
}

export default App;
