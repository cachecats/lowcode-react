import React from 'react';
import ComponentsPanel from './ComponentsPanel';
import LayoutPanel from './LayoutPanel';
import SettingPanel from './SettingPanel';
import styles from './index.module.scss';
import { DragDropContext } from 'react-beautiful-dnd';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  function onDragEnd(value: any) {
    console.log('onDragEnd', value);
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
