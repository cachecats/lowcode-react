import React from 'react';
import { SettingCommonProps } from '@/modules/Design/SettingPanel/types';
import SettingRow from '@/modules/Design/SettingPanel/setter/SettingRow';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectSettings, updateSettings } from '@/common/redux/componentsSlice';
import { updateSettingsData } from '@/modules/Design/SettingPanel/config';

interface SettingSelectProps extends SettingCommonProps {}

const SelectSetter: React.FC<SettingSelectProps> = ({ componentId, setting }) => {
  const dispatch = useDispatch();
  const storeSetting = useSelector(selectSettings);

  const { label, options, defaultValue } = setting;

  function onSelect(value: any) {
    console.log('select', value);
    updateSettingsData({
      dispatch,
      componentId,
      setting,
      value,
      storeSetting
    });
  }

  return (
    <SettingRow label={label}>
      <Select
        options={options || []}
        defaultValue={defaultValue}
        onSelect={onSelect}
      />
    </SettingRow>
  );
};

export default SelectSetter;
