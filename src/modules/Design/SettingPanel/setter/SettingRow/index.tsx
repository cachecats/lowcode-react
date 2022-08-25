import React from 'react';
import styles from './index.module.scss';
import cn from 'classnames';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

interface SettingRowProps {
  label: string;
  card?: boolean;
  tips?: string;
}

const SettingRow: React.FC<SettingRowProps> = ({
  label,
  card = false,
  tips,
  children
}) => {
  return (
    <div className={card ? cn([styles.settingRow, styles.card]) : styles.settingRow}>
      <div className={styles.label}>
        <span>{label}</span>
        {tips && (
          <Tooltip title={tips}>
            <QuestionCircleOutlined style={{ fontSize: 13, marginLeft: 3 }} />
          </Tooltip>
        )}
      </div>
      {children}
    </div>
  );
};

export default SettingRow;
