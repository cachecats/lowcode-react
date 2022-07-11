import React from 'react';
import styles from './index.module.scss';
import ComponentsPanel from '@/modules/Design/ComponentsPanel';
import LayoutPanel from '@/modules/Design/LayoutPanel';
import SettingPanel from '@/modules/Design/SettingPanel';

interface DesignPageProps {}

const DesignPage: React.FC<DesignPageProps> = () => {
  return (
    <div className={styles.home}>
      <ComponentsPanel />
      <LayoutPanel />
      <SettingPanel />
    </div>
  );
};

export default DesignPage;
