import React, { useEffect } from 'react';
import { Collapse } from 'antd';
import { SettingCommonProps } from '@/modules/Design/SettingPanel/types';
import { renderSetting } from '@/modules/Design/SettingPanel/config';
import { useDispatch } from 'react-redux';
import { updateSettings } from '@/common/redux/componentsSlice';
import CollapseContainer from '@/common/components/CollapseContainer';
const { Panel } = Collapse;

const GroupSetter: React.FC<SettingCommonProps> = ({ componentId, setting }) => {
  const { children, label } = setting;
  const dispatch = useDispatch();

  useEffect(() => {
    setting && setDefaultValues();
  }, [setting]);

  // 设置默认值
  function setDefaultValues() {
    let defaultValues = {};
    children?.forEach((item) => {
      defaultValues[item.id] = item.defaultValue;
    });
    dispatch(
      updateSettings({
        id: componentId,
        data: {
          [setting.id]: defaultValues
        }
      })
    );
  }

  return (
    <CollapseContainer header={label}>
      {children?.map((child) => renderSetting(componentId, child))}
    </CollapseContainer>
  );
};

export default GroupSetter;
