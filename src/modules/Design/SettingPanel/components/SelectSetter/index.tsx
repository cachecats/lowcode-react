import React from 'react';
import { SettingCommonProps } from '@/modules/Design/SettingPanel/types';
import SettingRow from '@/modules/Design/SettingPanel/components/SettingRow';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { updateSettings } from '@/common/redux/componentsSlice';

interface SettingSelectProps extends SettingCommonProps {}

const SelectSetter: React.FC<SettingSelectProps> = ({ componentId, setting }) => {
  const dispatch = useDispatch();
  const { label, options, defaultValue } = setting;

  function onSelect(value: any) {
    console.log('select', value);
    dispatch(
      updateSettings({
        id: componentId,
        data: {
          [setting.id]: value
        }
      })
    );
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
