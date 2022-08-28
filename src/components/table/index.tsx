import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSettings } from '@/common/redux/componentsSlice';
import { Table } from 'antd';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { omit } from 'lodash';
import { combineColumns } from '@/components/table/config';

interface LTableProps {
  id: string;
}

export const pagination = {
  pageSize: 10,
  showSizeChanger: true
};

const LTable: React.FC<LTableProps> = ({ id, ...rest }) => {
  const actionRef = useRef<ActionType>();
  const [tableColumns, setTableColumns] = useState<any[]>([]);

  const setting = useSelector(selectSettings);
  const { columns, search, dataSource, scrollX, optionColumns } = useMemo(() => {
    return setting[id] || {};
  }, [setting, id]);

  useEffect(() => {
    // 将数据列和操作列结合起来
    setTableColumns(combineColumns(columns, optionColumns));
  }, [columns, optionColumns]);

  return (
    <div style={{ width: '100%', padding: 10 }}>
      <ProTable<any>
        actionRef={actionRef}
        columns={tableColumns}
        // request={onFetch}
        dataSource={dataSource ? JSON.parse(dataSource) : []}
        rowKey="id"
        pagination={pagination}
        dateFormatter="string"
        search={search?.isSearch ? omit(search, 'isSearch') : false}
        scroll={{ x: scrollX }}
        toolbar={{ actions: [] }}
        toolBarRender={false}
      />
    </div>
  );
};

export default LTable;
