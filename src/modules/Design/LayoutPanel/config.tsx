import LButton from '@/components/Button/LButton';
import React from 'react';
import { Layout } from 'react-grid-layout';
import styles from './index.module.scss';

export function renderComponents(key: string) {
  // - 前面的为组件的id
  const id = key.split('-')[0];
  console.log('renderComponents id', id);
  switch (id) {
    case 'button':
      return <LButton key={id} text={'按钮'} />;
    default:
      return <div key={id}>{id}</div>;
  }
}
