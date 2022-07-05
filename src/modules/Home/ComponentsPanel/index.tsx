import React from 'react';
import styles from './index.module.scss';
import DragContainer from '@/components/DragAndDrop/DragContainer';
import DroppableContainer from '@/components/DragAndDrop/DroppableContainer';

interface ComponentsPanelProps {}

const ComponentsPanel: React.FC<ComponentsPanelProps> = () => {
  return (
    <DroppableContainer
      className={styles.componentsPanel}
      droppableId={'components'}
      type={'vertical'}
      direction="horizontal"
    >
      <DragContainer draggableId={'2'} index={1}>
        <div className={styles.test}>Test</div>
      </DragContainer>
    </DroppableContainer>
  );
};

export default ComponentsPanel;
