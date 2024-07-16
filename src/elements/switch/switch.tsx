'use client';

import styles from './switch.module.scss';

interface SwitchProps{
  round?: boolean
}

export function Switch({ round }:SwitchProps) {
  return (
    <label className={styles.switch}>
      <input type='checkbox' className={styles.input} />
      <span className={`${styles.slider} + ' ' + ${round ? styles.round : ''}`} />
    </label>
  );
}
