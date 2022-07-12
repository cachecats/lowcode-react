import React from 'react';
import styles from './index.module.scss';
import { COMPONENTS_LIST } from '@/config/ComponentsConfig';

interface ComponentsPanelProps {}

const ComponentsPanel: React.FC<ComponentsPanelProps> = () => {
  return (
    <div className={styles.componentsPanel}>
      <h3>组件库</h3>
      <div className={styles.componentsWrapper}>
        {COMPONENTS_LIST?.map((comp, index) => (
          <div
            key={comp.id}
            className={styles.item}
            draggable={true}
            unselectable="on"
            onDragStart={(e) => {
              e.dataTransfer.setData('text/plain', '');
              // 将组件的 id 放在 dataTransfer 中
              e.dataTransfer.setData('id', comp.id);
            }}
          >
            <img className={styles.icon} alt={comp.name} src={comp.icon} />
            <div className={styles.name}>{comp.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentsPanel;
