'use client';

import styles from './footer.module.scss';
import { FOOTER } from './footer.data';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.text}>
          © ООО «КЕХ еКоммерц» 2007-2024. Kangaroo использует{' '}
          <a href='#'>рекомендательные технологии</a>. Оплачивая услуги на
          Kangaroo, вы принимаете <a href='#'>оферту</a>
        </p>
        <ul className={styles.list + ' list-reset'}>
          {FOOTER.map((item) => (
            <li className={styles.item} key={item.id}>
              <a href={item.link} className={styles.link} title={item.title}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
