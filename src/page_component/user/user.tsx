'use client';

import styles from './user.module.scss';
import { Active } from './components/active/active';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Disabled } from './components/disabled/disabled'
import { Info } from './components/info/info'
import { Review } from './components/review/review'
import { Dashboard } from './components/dashboard/dashboard'

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

export function User() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <section className={styles.user}>
      <div className={styles.inner}>
      <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
            >
              <Tab label='Активные' {...a11yProps(0)} />
              <Tab label='Завершенные' {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Active />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Disabled />
          </CustomTabPanel>
        </Box>
        <Info />
        <Dashboard margin='30px 0 0' />
        <Review />
      </div>
    </section>
  );
}
