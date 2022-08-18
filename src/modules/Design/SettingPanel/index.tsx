import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentEditComponent,
  updateSettings
} from '@/common/redux/componentsSlice';
import { parseId } from '@/utils';
import { IMetaType, ISetting } from '@/types';
import InputSetter from '@/modules/Design/SettingPanel/components/InputSetter';
import RadioSetter from '@/modules/Design/SettingPanel/components/RadioSetter';
import SelectSetter from '@/modules/Design/SettingPanel/components/SelectSetter';
import ArraySetter from '@/modules/Design/SettingPanel/components/ArraySetter';

interface SettingPanelProps {}

const SettingPanel: React.FC<SettingPanelProps> = () => {
  const currentEditComponent = useSelector(selectCurrentEditComponent);
  const dispatch = useDispatch();
  const [metaData, setMetaData] = useState<IMetaType>();

  useEffect(() => {
    console.log('currentEditComponent---', currentEditComponent);
    getMetaByComponentId();
  }, [currentEditComponent]);

  // 通过组件id找到这个组件的 meta 数据
  function getMetaByComponentId() {
    if (!currentEditComponent) return;
    let id = parseId(currentEditComponent);
    const meta = require(`@/components/${id}/meta.json`);
    console.log('meta data', meta);
    setMetaData(meta);
    // 设置属性的默认值
    setDefaultValue(meta);
  }

  // 从json文件中取出每项的默认值存储在 redux 中
  function setDefaultValue(meta: IMetaType) {
    const defaultValues = {};
    meta?.settings?.forEach((item) => {
      defaultValues[item.id] = item.defaultValue;
    });
    dispatch(
      updateSettings({
        id: currentEditComponent,
        data: defaultValues
      })
    );
  }

  function renderSetting(setting: ISetting) {
    switch (setting.type) {
      case 'input':
        return <InputSetter componentId={currentEditComponent} setting={setting} />;
      case 'radio':
        return <RadioSetter componentId={currentEditComponent} setting={setting} />;
      case 'select':
        return <SelectSetter componentId={currentEditComponent} setting={setting} />;
      case 'array':
        return <ArraySetter componentId={currentEditComponent} setting={setting} />;
      default:
        return <div>设置渲染失败</div>;
    }
  }

  return (
    <div className={styles.settingPanel}>
      <h3>组件属性</h3>
      {metaData?.settings?.map((setting, index) => (
        <div key={index}>{renderSetting(setting)}</div>
      ))}
    </div>
  );
};

export default SettingPanel;
