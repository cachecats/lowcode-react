import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectSettings } from '@/common/redux/componentsSlice';
import { Table } from 'antd';

interface LTableProps {
  id: string;
}

const LTable: React.FC<LTableProps> = ({ id, ...rest }) => {
  const setting = useSelector(selectSettings);
  const { text, type, danger } = useMemo(() => {
    return setting[id] || {};
  }, [setting, id]);

  return <Table />;
};

export default LTable;
