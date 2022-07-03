import React from 'react';
import styles from './index.module.scss';

interface SettingPanelProps {}

const SettingPanel: React.FC<SettingPanelProps> = () => {
  return <div className={styles.settingPanel}>SettingPanel</div>;
};

export default SettingPanel;
