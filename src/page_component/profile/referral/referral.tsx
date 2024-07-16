'use client';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import styles from './referral.module.scss';

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

export function Referral() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <section className={styles.referral}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Спецпредложения</h1>
        <p className={styles.text}>
          Управляйте скидками для своих покупателей: создавайте новые,
          редактируйте активные и запланированные. Если предложите несколько
          скидок на один товар, покупатель получит самую большую.
        </p>
        <a href='#' className={styles.link}>
          Создать промокод
        </a>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
            >
              <Tab label='Архив' {...a11yProps(0)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            
          </CustomTabPanel>
        </Box>
      </div>
    </section>
  );
}
