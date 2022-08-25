import React, { useMemo, useState } from 'react';
import { SettingCommonProps } from '@/modules/Design/SettingPanel/types';
import { useDispatch, useSelector } from 'react-redux';
import { updateSettingsData } from '@/modules/Design/SettingPanel/config';
import { selectSettings } from '@/common/redux/componentsSlice';
import SettingRow from '@/modules/Design/SettingPanel/setter/SettingRow';
import { EditOutlined } from '@ant-design/icons';
import MonacoEditorDrawer from '@/modules/Design/SettingPanel/setter/JsonSetter/MonacoEditorDrawer';

const JsonSetter: React.FC<SettingCommonProps> = ({ componentId, setting }) => {
  const dispatch = useDispatch();
  const storeSetting = useSelector(selectSettings);
  const [visible, setVisible] = useState(false);

  const defaultValue = useMemo(() => {
    // return JSON.stringify(storeSetting[componentId][setting.id]);
    return storeSetting[componentId][setting.id];
  }, [storeSetting, componentId, setting]);

  function onEdit() {
    setVisible(true);
  }

  function onOk(value: any) {
    updateSettingsData({
      dispatch,
      componentId,
      setting,
      value,
      storeSetting
    });
  }

  return (
    <>
      <SettingRow label={setting.label} card>
        <EditOutlined
          onClick={onEdit}
          key={'1'}
          style={{ fontSize: 14, cursor: 'pointer' }}
        />
      </SettingRow>
      <MonacoEditorDrawer
        visible={visible}
        setVisible={setVisible}
        onOk={onOk}
        defaultLanguage={'json'}
        defaultValue={defaultValue || ''}
      />
    </>
  );
};

export default JsonSetter;
