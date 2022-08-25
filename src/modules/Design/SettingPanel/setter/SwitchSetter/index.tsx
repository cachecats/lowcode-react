import React from 'react';
import SettingRow from '@/modules/Design/SettingPanel/setter/SettingRow';
import { Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectSettings } from '@/common/redux/componentsSlice';
import { SettingCommonProps } from '@/modules/Design/SettingPanel/types';
import { updateSettingsData } from '@/modules/Design/SettingPanel/config';

const SwitchSetter: React.FC<SettingCommonProps> = ({ componentId, setting }) => {
  const dispatch = useDispatch();
  const storeSetting = useSelector(selectSettings);

  const { label, defaultValue } = setting;

  function onChange(checked: boolean) {
    updateSettingsData({
      dispatch,
      componentId,
      setting,
      value: checked,
      storeSetting
    });
  }

  return (
    <SettingRow label={label} tips={setting.tips}>
      <Switch size={'small'} defaultChecked={defaultValue} onChange={onChange} />
    </SettingRow>
  );
};

export default SwitchSetter;
