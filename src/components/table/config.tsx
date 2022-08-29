import { TableDropdown } from '@ant-design/pro-components';
import React from 'react';
import { ITableOptionColumn } from '@/types';
import { transformAsync } from '@babel/core';

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
              // const func = new Function('record', item.onClick);
              // func(record);
              console.log('item.onClick', item.onClick);
              // transformAsync(item.onClick, { presets: ['es2015', 'react'] }).then(
              transformAsync(item.onClick, {
                presets: [],
                ast: true
              }).then((res) => {
                console.log('transformAsync', res);
              });
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
