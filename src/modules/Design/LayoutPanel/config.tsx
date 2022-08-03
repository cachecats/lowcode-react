import LButton from '@/components/button/LButton';
import React from 'react';
import { parseId } from '@/utils';

export function renderComponents(key: string) {
  // - 前面的为组件的id
  const id = parseId(key);
  console.log('renderComponents id', id);
  switch (id) {
    case 'button':
      return <LButton key={id} text={'按钮'} />;
    default:
      return <div key={id}>{id}</div>;
  }
}
