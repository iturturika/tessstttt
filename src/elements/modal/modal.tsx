'use client';

import { ReactNode, useState } from 'react';
import styles from './modal.module.scss';

interface ModalProps {
  width?: string;
  padding?: string;
  borderRadius?: string;
  children: ReactNode;
  condition: boolean;
}

export function Modal({
  width = 'fit-content',
  padding = '30px',
  borderRadius = '28px',
  children,
  condition: initialCondition,
}: ModalProps) {
  const [condition, setCondition] = useState(initialCondition);

  const toggleCondition = () => {
    setCondition(prevCondition => !prevCondition);
  };

  return (
    <dialog className={styles.modal} open={condition}>
      <div
        className={styles.container}
        style={{ width, padding, borderRadius }}
      >
        <button
          type='button'
          className={styles.close + ' btn-reset'}
          onClick={toggleCondition}
          title='Закрыть модальное окно'
        ></button>
        <article className={styles.content}>
          {children}
        </article>
      </div>
    </dialog>
  );
}
