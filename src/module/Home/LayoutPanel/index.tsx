import React from 'react';
import styles from './index.module.scss';
import GridLayout from 'react-grid-layout';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import DragContainer from '../../../components/DragAndDrop/DragContainer';
import DroppableContainer from '../../../components/DragAndDrop/DroppableContainer';

interface LayoutPanelProps {}

const LayoutPanel: React.FC<LayoutPanelProps> = () => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 }
  ];
  return (
    <DroppableContainer
      className={styles.layoutPanel}
      droppableId={'layout'}
      type={'vertical'}
      direction="horizontal"
    >
      <DragContainer draggableId={'3'} index={1} isDragDisabled={true}>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1200}
        >
          <div key="a">a</div>
          <div key="b">b</div>
          <div key="c">c</div>
        </GridLayout>
      </DragContainer>
    </DroppableContainer>
  );
};

export default LayoutPanel;
