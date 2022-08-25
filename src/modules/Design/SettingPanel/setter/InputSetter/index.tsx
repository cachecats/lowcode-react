import React, { useState } from 'react';
import { Input } from 'antd';
import SettingRow from '@/modules/Design/SettingPanel/setter/SettingRow';
import { useDispatch, useSelector } from 'react-redux';
import { selectSettings } from '@/common/redux/componentsSlice';
import { SettingCommonProps } from '@/modules/Design/SettingPanel/types';
import { updateSettingsData } from '@/modules/Design/SettingPanel/config';

const InputSetter: React.FC<SettingCommonProps> = ({ componentId, setting }) => {
  const dispatch = useDispatch();
  const storeSetting = useSelector(selectSettings);
  const [value, setValue] = useState(setting.defaultValue?.toString() || '');

  function onChange(e: any) {
    const val = e.target.value;
    setValue(val);
    updateSettingsData({
      dispatch,
      componentId,
      setting,
      value,
      storeSetting
    });
  }

  return (
    <SettingRow label={setting.label} tips={setting.tips}>
      <Input value={value} onChange={onChange} {...setting} />
    </SettingRow>
  );
};

export default InputSetter;
