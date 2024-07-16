'use client';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './info.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import Image from 'next/image';
import { FreeMode} from 'swiper/modules';

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

export function Info() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <section className={styles.info}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Информация</h2>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
            >
              <Tab label='О компании' {...a11yProps(0)} />
              <Tab label='Доставка' {...a11yProps(1)} />
              <Tab label='Оплата' {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div>
              <Swiper
                className={styles.swiper}
                slidesPerView={5}
                spaceBetween={3}
                grabCursor={true}
                freeMode={true}
                modules={[FreeMode]}
              >
                <SwiperSlide>
                  <Image
                    src={'/img/company-3.png'}
                    alt='Apple Store'
                    className='image'
                    width={153}
                    height={102}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={'/img/company-3.png'}
                    alt='Apple Store'
                    className='image'
                    width={153}
                    height={102}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={'/img/company-3.png'}
                    alt='Apple Store'
                    className='image'
                    width={153}
                    height={102}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={'/img/company-3.png'}
                    alt='Apple Store'
                    className='image'
                    width={153}
                    height={102}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={'/img/company-3.png'}
                    alt='Apple Store'
                    className='image'
                    width={153}
                    height={102}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={'/img/company-3.png'}
                    alt='Apple Store'
                    className='image'
                    width={153}
                    height={102}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={'/img/company-3.png'}
                    alt='Apple Store'
                    className='image'
                    width={153}
                    height={102}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={'/img/company-3.png'}
                    alt='Apple Store'
                    className='image'
                    width={153}
                    height={102}
                  />
                </SwiperSlide>
              </Swiper>
              <div className={styles.description}>
                <p className={styles.text}>
                  Вас приветствует сеть магазинов оригинальной техники Apple
                  Store! Давайте знакомиться).
                  <br />
                  <br />
                  Начало нашей компании было заложено еще в 2013 году. За все
                  эти годы работы мы успели выстроить целую сеть — более 18-ти
                  магазинов по всей России и обеспечить более 70 000 покупателей
                  качественной техникой и отличным сервисом по самым выгодным
                  ценам в городе и регионе. А они в свою очередь, уверенно
                  советуют нас своим родным, друзьям и знакомым. На всю нашу
                  новую продукцию мы предоставляем полноценное годовое
                  гарантийное обслуживание. Политика нашей компании — довольные
                  клиенты. Поэтому мы всегда выполняем все гарантийные
                  обязательства в полном объеме и в кратчайшие сроки. Вы можете
                  быть уверены в том, что всегда сможете обратиться к нашим
                  сотрудникам за помощью где бы вы ни находились и с чем бы ни
                  столкнулись. Кстати о наших сотрудниках! Специалисты в
                  магазинах нашей сети будут рады помочь вам определиться с
                  выбором подходящей вам модели устройства, аксессуара или
                  просто подарить хорошее настроение, а также проконсультируют
                  по дополнительным услугам, включающим в себя настройку
                  устройства, установку защитных стекол и переносу данных.
                  <br />
                  <br />
                  Добро пожаловать, к нам! 💜.
                </p>
                <a href='#' className={styles.link}>
                  Читать полностью
                </a>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <p className={styles.text}>
              Возможна доставка по Нижнему Новгороду🚚
              <br />В другие регионы отправка Kangaroo доставкой, либо СДЭК по
              100% предоплате📦
            </p>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <p className={styles.text}>
              Цены в профиле указаны за наличный расчет💸
            </p>
          </CustomTabPanel>
        </Box>
      </div>
    </section>
  );
}
