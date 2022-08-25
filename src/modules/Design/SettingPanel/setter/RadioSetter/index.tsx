import React from 'react';
import { SettingCommonProps } from '@/modules/Design/SettingPanel/types';
import { Radio, RadioChangeEvent } from 'antd';
import SettingRow from '@/modules/Design/SettingPanel/setter/SettingRow';
import { selectSettings, updateSettings } from '@/common/redux/componentsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { updateSettingsData } from '@/modules/Design/SettingPanel/config';

interface SettingRadioProps extends SettingCommonProps {}

const RadioSetter: React.FC<SettingRadioProps> = ({ componentId, setting }) => {
  const dispatch = useDispatch();
  const storeSetting = useSelector(selectSettings);
  const { label, optionType, options, defaultValue } = setting;

  function onChange(e: RadioChangeEvent) {
    updateSettingsData({
      dispatch,
      componentId,
      setting,
      value: e.target.value,
      storeSetting
    });
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
