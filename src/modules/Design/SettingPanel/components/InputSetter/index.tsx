import React, { useState } from 'react';
import { Input } from 'antd';
import SettingRow from '@/modules/Design/SettingPanel/components/SettingRow';
import { ISetting } from '@/types';
import { useDispatch, useSelector } from 'react-redux';
import { selectSettings, updateSettings } from '@/common/redux/componentsSlice';
import { SettingCommonProps } from '@/modules/Design/SettingPanel/types';
import { updateSettingsData } from '@/modules/Design/SettingPanel/config';

interface SettingInputProps extends SettingCommonProps {}

const InputSetter: React.FC<SettingInputProps> = ({ componentId, setting }) => {
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
    <SettingRow label={setting.label}>
      <Input
        defaultValue={setting.defaultValue + ''}
        value={value}
        onChange={onChange}
      />
    </SettingRow>
  );
};

export default InputSetter;
