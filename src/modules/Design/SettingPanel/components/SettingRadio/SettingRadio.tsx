import React from 'react';
import { SettingCommonProps } from '@/modules/Design/SettingPanel/types';
import { Radio, RadioChangeEvent } from 'antd';
import SettingRow from '@/modules/Design/SettingPanel/components/SettingRow';
import { updateSettings } from '@/common/redux/componentsSlice';
import { useDispatch } from 'react-redux';

interface SettingRadioProps extends SettingCommonProps {}

const SettingRadio: React.FC<SettingRadioProps> = ({ componentId, setting }) => {
  const dispatch = useDispatch();
  const { optionType, options, defaultValue } = setting;

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
    <SettingRow label={setting.label}>
      <Radio.Group
        onChange={onChange}
        defaultValue={defaultValue || options?.[0]?.value}
        optionType={optionType}
        size={'middle'}
      >
        {options?.map((option) => (
          <Radio.Button key={option.value} value={option.value}>
            {option.label}
          </Radio.Button>
        ))}
      </Radio.Group>
    </SettingRow>
  );
};

export default SettingRadio;
