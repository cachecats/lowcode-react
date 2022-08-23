import React, { useMemo } from 'react';
import { BetaSchemaForm } from '@ant-design/pro-components';
import { SettingCommonProps } from '@/modules/Design/SettingPanel/types';
import { useDispatch, useSelector } from 'react-redux';
import { updateSettingsData } from '@/modules/Design/SettingPanel/config';
import { selectSettings } from '@/common/redux/componentsSlice';
import SettingRow from '@/modules/Design/SettingPanel/components/SettingRow';
import { EditOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import { Card } from 'antd';

const JsonSetter: React.FC<SettingCommonProps> = ({ componentId, setting }) => {
  const dispatch = useDispatch();
  const storeSetting = useSelector(selectSettings);

  const columns: any[] = useMemo(() => {
    return [
      {
        title: setting.label,
        key: setting.id,
        dataIndex: setting.id,
        valueType: setting.type,
        width: 'md'
      }
    ];
  }, [setting]);

  function onChange(e: any) {
    updateSettingsData({
      dispatch,
      componentId,
      setting,
      value: e.target.value,
      storeSetting
    });
  }

  function onEdit() {}

  return (
    <SettingRow label={setting.label} card>
      <EditOutlined
        onClick={onEdit}
        key={'1'}
        style={{ fontSize: 14, cursor: 'pointer' }}
      />
    </SettingRow>
    // <BetaSchemaForm
    //   layout={'horizontal'}
    //   rowProps={{
    //     wrap: true
    //   }}
    //   labelCol={{ span: 6 }}
    //   columns={columns}
    //   initialValues={{}}
    //   submitter={false}
    //   onChange={onChange}
    // />
  );
};

export default JsonSetter;
