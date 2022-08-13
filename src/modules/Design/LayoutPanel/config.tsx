import LButton from '@/components/button';
import React from 'react';
import { parseId } from '@/utils';
import LTable from '@/components/table';

export function renderComponents(key: string) {
  // ### 前面的为组件的id
  const id = parseId(key);
  console.log('renderComponents id', id);
  switch (id) {
    case 'button':
      return <LButton key={key} id={key} />;
    case 'table':
      return <LTable key={key} id={id} />;
    default:
      return <div key={key}>{id}</div>;
  }
}
