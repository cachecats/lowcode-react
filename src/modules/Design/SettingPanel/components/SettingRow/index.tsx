import React from 'react';
import styles from './index.module.scss';

interface SettingRowProps {
  label: string;
}

const SettingRow: React.FC<SettingRowProps> = ({ label, children }) => {
  return (
    <div className={styles.settingRow}>
      <div className={styles.label}>{label}</div>
      {children}
    </div>
  );
};

export default SettingRow;
