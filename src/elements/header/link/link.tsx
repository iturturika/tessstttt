'use client';

import React from 'react';
import styles from './link.module.scss';

interface LinkProps {
  before?: string | React.ReactNode;
  linkText: string;
  linkUrl: string;
  after?: string | React.ReactNode;
}

export function Link({ before, linkText, linkUrl, after }:LinkProps){
  return (
    <a href={linkUrl} className={styles.link}>
      {before}
      <span>{linkText}</span>
      {after}
    </a>
  );
};
