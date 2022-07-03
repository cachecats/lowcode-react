import React from 'react';
import styles from './index.module.scss';

interface ComponentsPanelProps {}

const ComponentsPanel: React.FC<ComponentsPanelProps> = () => {
  return <div className={styles.componentsPanel}>ComponentsPanel</div>;
};

export default ComponentsPanel;
