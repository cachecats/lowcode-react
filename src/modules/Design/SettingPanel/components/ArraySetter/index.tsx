import React, { useState } from 'react';
import { SettingCommonProps } from '@/modules/Design/SettingPanel/types';
import { Button, Collapse, Drawer, Space } from 'antd';
import { DragSortTable, ProColumns } from '@ant-design/pro-components';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import { getColumns } from '@/modules/Design/SettingPanel/components/ArraySetter/config';
import AddColumnDrawer from '@/modules/Design/SettingPanel/components/ArraySetter/AddColumnDrawer';

const { Panel } = Collapse;

const ArraySetter: React.FC<SettingCommonProps> = ({ componentId, setting }) => {
  const { options, defaultValue } = setting;
  const defaultValues = defaultValue?.map((item, index) => ({
    id: Date.now() + index,
    ...item
  }));
  const [dataSource, setDataSource] = useState<any[]>(defaultValues);
  const [visible, setVisible] = useState(false);

  const handleDragSortEnd = (newDataSource: any) => {
    console.log('排序后的数据', newDataSource);
    setDataSource(newDataSource);
  };

  function onClose() {
    setVisible(false);
  }

  function onEdit(row: any) {
    setVisible(true);
  }
  function onDelete() {}

  return (
    <>
      <Collapse defaultActiveKey={['1']}>
        <Panel header={setting.label} key="1">
          <DragSortTable
            columns={getColumns({ options: options || [], onEdit, onDelete })}
            rowKey="id"
            pagination={false}
            dataSource={dataSource}
            dragSortKey="sort"
            onDragSortEnd={handleDragSortEnd}
            search={false}
            toolBarRender={false}
          />
          <div className={styles.btnWrapper}>
            <Button key={1} type={'dashed'} icon={<PlusOutlined />}>
              新增
            </Button>
          </div>
        </Panel>
      </Collapse>
      <AddColumnDrawer visible={visible} setVisible={setVisible} />
    </>
  );
};

export default ArraySetter;
