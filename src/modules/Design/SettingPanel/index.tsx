import React, { useEffect } from 'react';
import styles from './index.module.scss';
import { useSelector } from 'react-redux';
import { selectCurrentEditComponent } from '@/common/redux/componentsSlice';

interface SettingPanelProps {}

const SettingPanel: React.FC<SettingPanelProps> = () => {
  const currentEditComponent = useSelector(selectCurrentEditComponent);

  useEffect(() => {
    console.log('currentEditComponent---', currentEditComponent);
  }, [currentEditComponent]);

  return <div className={styles.settingPanel}>SettingPanel</div>;
};

export default SettingPanel;
