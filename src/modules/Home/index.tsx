import React from 'react';
import ComponentsPanel from './ComponentsPanel';
import LayoutPanel from './LayoutPanel';
import SettingPanel from './SettingPanel';
import styles from './index.module.scss';
import { DragDropContext } from 'react-beautiful-dnd';
import EventBus from '@/common/EventBus';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  function onDragEnd(value: any) {
    console.log('onDragEnd', value);
    const { destination } = value;
    if (destination?.droppableId === 'layout') {
      EventBus.emit('addComponent', 'test');
    }
  }

  return (
    <div className={styles.home}>
      <div className={styles.droppableContainer}>
        <DragDropContext onDragEnd={onDragEnd}>
          <ComponentsPanel />
          <LayoutPanel />
        </DragDropContext>
      </div>
      <SettingPanel />
    </div>
  );
};

export default HomePage;
