'use client';

import styles from './checkbox.module.scss';

interface CheckboxProps{
    id: string,
    value: string,
    margin?: string,
}

export function Checkbox({ id, value, margin = '0' }:CheckboxProps) {
  return (
    <div style={{margin}}>
      <input
        type='checkbox'
        name={id}
        id={id}
        className={styles.checkbox}
      />
      <label htmlFor={id} className={styles.label}>{ value }</label>
    </div>
  );
}
