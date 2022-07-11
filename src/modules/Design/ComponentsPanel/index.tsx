import React from 'react';
import styles from './index.module.scss';
import DragContainer from '@/components/DragAndDrop/DragContainer';
import { COMPONENTS_LIST } from '@/config/ComponentsConfig';

interface ComponentsPanelProps {}

const ComponentsPanel: React.FC<ComponentsPanelProps> = () => {
  return (
    <div className={styles.componentsPanel}>
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
          {comp.name}
        </div>
      ))}
    </div>
  );
};

export default ComponentsPanel;
