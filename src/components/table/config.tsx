import { TableDropdown } from '@ant-design/pro-components';
import React from 'react';
import { ITableOptionColumn } from '@/types';

export function combineColumns(columns: any[], optionColumns: ITableOptionColumn[]) {
  const optionsColumn = {
    width: 120,
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => {
      return optionColumns?.map((item, index) => {
        return (
          <a
            key={index}
            style={item.type === 'danger' ? { color: '#ff4d4f' } : {}}
            onClick={() => {
              // @ts-ignore
              const func = new Function('record', item.onClick);
              func(record);
            }}
          >
            {item.name}
          </a>
        );
      });
    }
  };
  return optionColumns ? [...columns, optionsColumn] : columns;
}
