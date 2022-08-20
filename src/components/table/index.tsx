import React, { useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectSettings } from '@/common/redux/componentsSlice';
import { Table } from 'antd';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { omit } from 'lodash';

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
  const { columns, search } = useMemo(() => {
    return setting[id] || {};
  }, [setting, id]);

  return (
    <div style={{ width: '100%', padding: 10 }}>
      <ProTable<any>
        actionRef={actionRef}
        columns={columns}
        // request={onFetch}
        dataSource={[]}
        rowKey="id"
        pagination={pagination}
        dateFormatter="string"
        search={search?.isSearch ? omit(search, 'isSearch') : false}
        // scroll={{ x: 1200 }}
        toolbar={{ actions: [] }}
        toolBarRender={false}
      />
    </div>
  );
};

export default LTable;
