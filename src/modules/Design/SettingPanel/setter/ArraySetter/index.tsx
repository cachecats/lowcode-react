import React, { Ref, useEffect, useRef, useState } from 'react';
import { SettingCommonProps } from '@/modules/Design/SettingPanel/types';
import { Button, Collapse } from 'antd';
import { DragSortTable } from '@ant-design/pro-components';
import { PlusOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import { getColumns } from '@/modules/Design/SettingPanel/setter/ArraySetter/config';
import AddColumnDrawer from '@/modules/Design/SettingPanel/setter/ArraySetter/AddColumnDrawer';
import { useDispatch } from 'react-redux';
import { updateSettings } from '@/common/redux/componentsSlice';

const { Panel } = Collapse;

interface ITableData {
  id: string | number;
  title: string;
  dataIndex: string;
  width: number;
}

const ArraySetter: React.FC<SettingCommonProps> = ({ componentId, setting }) => {
  const dispatch = useDispatch();
  const { options, defaultValue } = setting;
  const defaultValues = defaultValue?.map((item, index) => ({
    id: Date.now() + index,
    ...item
  }));
  const [dataSource, setDataSource] = useState<ITableData[]>(defaultValues);
  const [visible, setVisible] = useState(false);
  const currentRow = useRef<any>(null);

  useEffect(() => {
    dispatch(
      updateSettings({
        id: componentId,
        data: {
          [setting.id]: dataSource
        }
      })
    );
  }, [dataSource]);

  const handleDragSortEnd = (newDataSource: any) => setDataSource(newDataSource);

  function onEdit(row: ITableData) {
    currentRow.current = row;
    setVisible(true);
  }
  function onAdd() {
    currentRow.current = null;
    setVisible(true);
  }
  function onDelete(row: ITableData) {
    setDataSource(dataSource?.filter((item) => item.id !== row.id));
  }
  async function onFinish(values: ITableData) {
    currentRow.current ? updateDataSource(values) : addNewData(values);
    setVisible(false);
  }

  function updateDataSource(values: ITableData) {
    setDataSource(
      dataSource?.map((item) => {
        if (item.id === currentRow.current?.id) {
          return {
            ...item,
            ...values
          };
        }
        return item;
      })
    );
  }

  function addNewData(values: ITableData) {
    setDataSource([
      ...dataSource,
      {
        ...values,
        id: Date.now()
      }
    ]);
  }

  return (
    <>
      <Collapse defaultActiveKey={['1']}>
        <Panel header={setting.label} key="1">
          <DragSortTable<ITableData>
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
            <Button key={1} type={'dashed'} icon={<PlusOutlined />} onClick={onAdd}>
              新增
            </Button>
          </div>
        </Panel>
      </Collapse>
      <AddColumnDrawer
        visible={visible}
        setVisible={setVisible}
        options={options || []}
        onFinish={onFinish}
        initialValues={currentRow.current}
      />
    </>
  );
};

export default ArraySetter;
