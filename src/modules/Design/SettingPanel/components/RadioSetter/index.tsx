import React from 'react';
import { SettingCommonProps } from '@/modules/Design/SettingPanel/types';
import { Radio, RadioChangeEvent } from 'antd';
import SettingRow from '@/modules/Design/SettingPanel/components/SettingRow';
import { updateSettings } from '@/common/redux/componentsSlice';
import { useDispatch } from 'react-redux';

interface SettingRadioProps extends SettingCommonProps {}

const RadioSetter: React.FC<SettingRadioProps> = ({ componentId, setting }) => {
  const dispatch = useDispatch();
  const { label, optionType, options, defaultValue } = setting;

  function onChange(e: RadioChangeEvent) {
    dispatch(
      updateSettings({
        id: componentId,
        data: {
          [setting.id]: e.target.value
        }
      })
    );
  }

  return (
    <SettingRow label={label}>
      <Radio.Group
        options={options}
        onChange={onChange}
        defaultValue={defaultValue === null ? options?.[0]?.value : defaultValue}
        optionType={optionType}
        buttonStyle="solid"
        size={'middle'}
      />
    </SettingRow>
  );
};

export default RadioSetter;
