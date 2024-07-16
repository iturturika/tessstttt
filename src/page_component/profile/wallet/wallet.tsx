'use client';

import styles from './wallet.module.scss';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Pay } from './components/pay/pay'
import { History } from './components/history/history'

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

export function Wallet() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <section className={styles.wallet}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Кошелёк</h1>
        <div className={styles.balance}>
          <div className={styles.balanceItem}>
            <span className={styles.balanceTitle}>Баланс</span>
            <div className={styles.balanceNum}>
              <span>0</span>&nbsp;<span>₽</span>
            </div>
          </div>
          <div className={styles.balanceItem}>
            <span className={styles.balanceTitle}>Бонусы</span>
            <div className={styles.balanceNum}>
              <span>0</span>
            </div>
          </div>
        </div>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
            >
              <Tab label='Пополнение кошелька' {...a11yProps(0)} />
              <Tab label='История операций' {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Pay />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <History />
          </CustomTabPanel>
        </Box>
      </div>
    </section>
  );
}
