import React from 'react';
import styles from './KeyCombo.module.css';

export default function KeyCombo({ keys }) {
  return (
    <span className={styles.combo}>
      {keys.map((key, i) => (
        <React.Fragment key={i}>
          <kbd className={styles.key}>{key}</kbd>
          {i < keys.length - 1 && <span className={styles.plus}>+</span>}
        </React.Fragment>
      ))}
    </span>
  );
}