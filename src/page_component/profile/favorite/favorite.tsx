'use client';

import styles from './favorite.module.scss';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Ads } from './components/ads/ads'
import { Compilation } from './components/compilation/compilation'
import { Search } from './components/search/search'
import { Profile } from './components/profile/profile'

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

export function Favorite() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <section className={styles.favorite}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Избранное</h1>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
            >
              <Tab label='Объявления' {...a11yProps(0)} />
              <Tab label='Подборки' {...a11yProps(1)} />
              <Tab label='Поиски' {...a11yProps(2)} />
              <Tab label='Профили' {...a11yProps(3)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Ads />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Compilation />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Search />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <Profile />
          </CustomTabPanel>
        </Box>
      </div>
    </section>
  );
}
