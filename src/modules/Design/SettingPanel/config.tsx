import { ISetting } from '@/types';
import InputSetter from '@/modules/Design/SettingPanel/setter/InputSetter';
import RadioSetter from '@/modules/Design/SettingPanel/setter/RadioSetter';
import SelectSetter from '@/modules/Design/SettingPanel/setter/SelectSetter';
import ArraySetter from '@/modules/Design/SettingPanel/setter/ArraySetter';
import React from 'react';
import GroupSetter from '@/modules/Design/SettingPanel/setter/GroupSetter';
import { updateSettings } from '@/common/redux/componentsSlice';
import JsonSetter from '@/modules/Design/SettingPanel/setter/JsonSetter';
import { Switch } from 'antd';
import SwitchSetter from '@/modules/Design/SettingPanel/setter/SwitchSetter';

export function renderSetting(currentEditComponent: string, setting: ISetting) {
  switch (setting.type) {
    case 'input':
      return <InputSetter componentId={currentEditComponent} setting={setting} />;
    case 'radio':
      return <RadioSetter componentId={currentEditComponent} setting={setting} />;
    case 'select':
      return <SelectSetter componentId={currentEditComponent} setting={setting} />;
    case 'array':
      return <ArraySetter componentId={currentEditComponent} setting={setting} />;
    case 'group':
      return <GroupSetter componentId={currentEditComponent} setting={setting} />;
    case 'json':
      return <JsonSetter componentId={currentEditComponent} setting={setting} />;
    case 'switch':
      return <SwitchSetter componentId={currentEditComponent} setting={setting} />;
    default:
      return <div>{`组件渲染失败: ${setting.label}`}</div>;
  }
}

interface SettingsData {
  dispatch: any;
  componentId: string;
  setting: ISetting;
  value: any;
  storeSetting: ISetting;
}

// 更新 redux 里的数据
export function updateSettingsData({
  dispatch,
  componentId,
  setting,
  value,
  storeSetting
}: SettingsData) {
  dispatch(
    updateSettings({
      id: componentId,
      data: setting.parentId
        ? {
            [setting.parentId]: {
              ...storeSetting[componentId][setting.parentId],
              [setting.id]: value
            }
          }
        : {
            [setting.id]: value
          }
    })
  );
}
