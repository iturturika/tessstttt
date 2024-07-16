'use client';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import styles from './pro.module.scss';
import { Base } from './components/base/base';
import { BASE } from './data/base.data';
import { Advance } from './components/advance/advance';
import { ADVANCE } from './data/advance.data';
import { Max } from './components/max/max';
import { MAX } from './data/max.data';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function Pro() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section className={styles.pro}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Инструменты для профессионалов</h1>
        <nav className={styles.nav} title='Навигация'>
          <ul className={styles.list + ' list-reset'}>
            <li className={styles.item}>
              <a href='#' className={styles.link + ' ' + styles.active}>
                Инструменты
              </a>
            </li>
            <li className={styles.item}>
              <a href='#' className={styles.link}>
                Сотрудники
              </a>
            </li>
            <li className={styles.item}>
              <a href='#' className={styles.link}>
                Интеграции
              </a>
            </li>
          </ul>
        </nav>
        <p className={styles.text}>
          Помогают вести бизнес на Kangaroo: работать с большим количеством
          объявлений, продвигать свой бренд и эффективнее распоряжаться
          бюджетом. Набор инструментов зависит от тарифа.
        </p>
        <div className={styles.menu}>
          <a href='#' className={styles.menuLink}>
            Рассчитать тариф
          </a>
          <a href='#' className={styles.menuLink}>
            Как выбрать тариф
          </a>
        </div>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
            >
              <Tab label='Базовый тариф' {...a11yProps(0)} />
              <Tab label='Расширенный' {...a11yProps(1)} />
              <Tab label='Максимальный' {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Base data={BASE} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Advance data={ADVANCE} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Max data={MAX} />
          </CustomTabPanel>
        </Box>
      </div>
    </section>
  );
}
