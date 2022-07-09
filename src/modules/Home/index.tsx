import React, { useState } from 'react';
import ComponentsPanel from './ComponentsPanel';
import LayoutPanel from './LayoutPanel';
import SettingPanel from './SettingPanel';
import styles from './index.module.scss';
import { DragDropContext } from 'react-beautiful-dnd';
import HomeContext from '@/context/HomeContext';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const [droppedComponents, setDroppedComponents] = useState('');
  function onDragEnd(value: any) {
    console.log('onDragEnd', value);
    const { destination } = value;
    if (destination?.droppableId === 'layout') {
      setDroppedComponents('test');
    }
  }

  return (
    <div className={styles.home}>
      <div className={styles.droppableContainer}>
        <DragDropContext onDragEnd={onDragEnd}>
          <HomeContext.Provider value={{ droppedComponents }}>
            <ComponentsPanel />
            <LayoutPanel />
          </HomeContext.Provider>
        </DragDropContext>
      </div>
      <SettingPanel />
    </div>
  );
};

export default HomePage;
