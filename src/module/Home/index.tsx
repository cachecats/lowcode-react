import React from 'react';
import ComponentsPanel from './ComponentsPanel';
import LayoutPanel from './LayoutPanel';
import SettingPanel from './SettingPanel';
import styles from './index.module.scss';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className={styles.home}>
      <ComponentsPanel />
      <LayoutPanel />
      <SettingPanel />
    </div>
  );
};

export default HomePage;
