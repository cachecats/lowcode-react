import { ProColumns } from '@ant-design/pro-components';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import React from 'react';
import { IOption } from '@/types';

interface Columns {
  options: IOption[];
  onEdit: (row) => void;
  onDelete: (row) => void;
}

export function getColumns({ options, onEdit, onDelete }: Columns): ProColumns[] {
  // 宽度限制，只显示前两列
  const list: ProColumns[] =
    options?.slice(0, 2)?.map((option) => {
      return {
        title: option.label,
        dataIndex: option.id,
        valueType: option.valueType,
        fieldProps: {
          options: option.options
        }
      };
    }) || [];
  const optionColumn: ProColumns = {
    title: '操作',
    dataIndex: 'option',
    valueType: 'option',
    render: (text, record) => [
      <EditOutlined
        onClick={() => onEdit(record)}
        key={'1'}
        style={{ fontSize: 14, cursor: 'pointer' }}
      />,
      <DeleteOutlined
        onClick={() => onDelete(record)}
        key={'2'}
        style={{ fontSize: 14, color: '#ff4d4f', cursor: 'pointer' }}
      />
    ]
  };
  list.push(optionColumn);
  list.unshift({
    title: '排序',
    dataIndex: 'sort'
  });
  return list;
}
