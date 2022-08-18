import React, { useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectSettings } from '@/common/redux/componentsSlice';
import { Table } from 'antd';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';

interface LTableProps {
  id: string;
}

export const pagination = {
  pageSize: 10,
  showSizeChanger: true
};

const LTable: React.FC<LTableProps> = ({ id, ...rest }) => {
  const actionRef = useRef<ActionType>();

  const setting = useSelector(selectSettings);
  const { text, type, danger } = useMemo(() => {
    return setting[id] || {};
  }, [setting, id]);

  const columns: ProColumns[] = [
    {
      width: 150,
      dataIndex: 'name',
      title: '姓名',
      hideInSearch: true
    }
  ];

  return (
    <div style={{ width: '100%' }}>
      <ProTable<any>
        actionRef={actionRef}
        columns={columns}
        // request={onFetch}
        dataSource={[]}
        rowKey="ID"
        pagination={pagination}
        dateFormatter="string"
        search={{ filterType: 'light' }}
        scroll={{ x: 1200 }}
        toolbar={{ actions: [] }}
      />
    </div>
  );
};

export default LTable;
