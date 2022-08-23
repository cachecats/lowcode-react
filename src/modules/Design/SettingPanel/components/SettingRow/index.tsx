import React from 'react';
import styles from './index.module.scss';
import cn from 'classnames';

interface SettingRowProps {
  label: string;
  card?: boolean;
}

const SettingRow: React.FC<SettingRowProps> = ({ label, card, children }) => {
  return (
    <div className={card ? cn([styles.settingRow, styles.card]) : styles.settingRow}>
      <div className={styles.label}>{label}</div>
      {children}
    </div>
  );
};

export default SettingRow;
