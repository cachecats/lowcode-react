import React from 'react';
import styles from './index.module.scss';
import DragContainer from '@/components/DragAndDrop/DragContainer';
import DroppableContainer from '@/components/DragAndDrop/DroppableContainer';
import { COMPONENTS_LIST } from '@/config/ComponentsConfig';

interface ComponentsPanelProps {}

const ComponentsPanel: React.FC<ComponentsPanelProps> = () => {
  return (
    <DroppableContainer
      className={styles.componentsPanel}
      droppableId={'components'}
      type={'vertical'}
      direction="vertical"
      isDropDisabled={true}
    >
      {COMPONENTS_LIST?.map((comp, index) => (
        <DragContainer key={comp.id} draggableId={comp.id} index={index}>
          <div key={comp.id} className={styles.item}>
            {comp.name}
          </div>
        </DragContainer>
      ))}
    </DroppableContainer>
  );
};

export default ComponentsPanel;
