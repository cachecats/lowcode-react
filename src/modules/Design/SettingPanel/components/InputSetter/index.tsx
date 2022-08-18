import React, { useState } from 'react';
import { Input } from 'antd';
import SettingRow from '@/modules/Design/SettingPanel/components/SettingRow';
import { ISetting } from '@/types';
import { useDispatch } from 'react-redux';
import { updateSettings } from '@/common/redux/componentsSlice';
import { SettingCommonProps } from '@/modules/Design/SettingPanel/types';

interface SettingInputProps extends SettingCommonProps {}

const InputSetter: React.FC<SettingInputProps> = ({ componentId, setting }) => {
  let dispatch = useDispatch();
  const [value, setValue] = useState(setting.defaultValue?.toString() || '');

  function onChange(e: any) {
    const val = e.target.value;
    setValue(val);
    dispatch(
      updateSettings({
        id: componentId,
        data: {
          [setting.id]: val
        }
      })
    );
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
