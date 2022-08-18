import React, { useEffect, useMemo, useState } from 'react';
import { SettingCommonProps } from '@/modules/Design/SettingPanel/types';
import { Collapse } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { EditableProTable, Key, ProColumns } from '@ant-design/pro-components';
const { Panel } = Collapse;

interface ArraySetterProps {}

const ArraySetter2: React.FC<SettingCommonProps> = ({ componentId, setting }) => {
  const { options, defaultValue } = setting;
  const defaultValues = defaultValue?.map((item) => ({
    id: Date.now(),
    ...item
  }));

  const [dataSource, setDataSource] = useState<any[]>(() => defaultValues);
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
    defaultValues?.map((item) => item.id)
  );

  useEffect(() => {
    console.log('dataSource', dataSource);
  }, [dataSource]);

  function getColumns(): ProColumns[] {
    // const editColumn: ProColumns = {
    //   title: '',
    //   dataIndex: 'edit',
    //   render: () => <EditOutlined style={{ fontSize: 14 }} />
    // };
    const list: ProColumns[] =
      options?.slice(0, 2)?.map((option) => {
        return {
          width: 100,
          title: option.label,
          dataIndex: option.id,
          key: option.id,
          valueType: option.valueType
        };
      }) || [];
    // list.unshift(editColumn);
    console.log('columns', list);
    return list;
  }

  return (
    <Collapse defaultActiveKey={['1']}>
      <Panel header={setting.label} key="1">
        <EditableProTable<any>
          columns={getColumns()}
          rowKey="id"
          // value={dataSource}
          onChange={(value) => {
            console.log('onChange0---', value);
            setDataSource(value);
          }}
          recordCreatorProps={{
            newRecordType: 'dataSource',
            record: () => ({
              id: Date.now(),
              title: '',
              dataIndex: ''
            })
          }}
          editable={{
            type: 'multiple',
            editableKeys,
            actionRender: (row, _, dom) => [dom.delete],
            onValuesChange: (record, recordList) => {
              console.log('onValuesChange---', record, recordList);
              setDataSource(recordList);
            },
            // onChange: setEditableRowKeys
            onChange: (editableKeys: Key[], editableRows: any[]) => {
              setEditableRowKeys(editableKeys);
              console.log('onChange---', { editableKeys, editableRows });
            }
          }}
        />
      </Panel>
    </Collapse>
  );
};

export default ArraySetter2;
