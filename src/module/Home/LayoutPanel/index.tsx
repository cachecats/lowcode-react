import React from 'react';
import styles from './index.module.scss';

interface LayoutPanelProps {}

const LayoutPanel: React.FC<LayoutPanelProps> = () => {
  return <div className={styles.layoutPanel}>LayoutPanel</div>;
};

export default LayoutPanel;
