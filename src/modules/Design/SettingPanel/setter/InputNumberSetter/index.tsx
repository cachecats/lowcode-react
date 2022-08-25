import React, { useState } from 'react';
import { InputNumber } from 'antd';
import SettingRow from '@/modules/Design/SettingPanel/setter/SettingRow';
import { useDispatch, useSelector } from 'react-redux';
import { selectSettings } from '@/common/redux/componentsSlice';
import { SettingCommonProps } from '@/modules/Design/SettingPanel/types';
import { updateSettingsData } from '@/modules/Design/SettingPanel/config';

const InputNumberSetter: React.FC<SettingCommonProps> = ({
  componentId,
  setting
}) => {
  const dispatch = useDispatch();
  const storeSetting = useSelector(selectSettings);
  const [value, setValue] = useState(setting.defaultValue);

  function onChange(val: any) {
    setValue(val);
    updateSettingsData({
      dispatch,
      componentId,
      setting,
      value: val,
      storeSetting
    });
  }

  return (
    <SettingRow label={setting.label} tips={setting.tips}>
      <InputNumber value={value} onChange={onChange} {...setting} />
    </SettingRow>
  );
};

export default InputNumberSetter;
