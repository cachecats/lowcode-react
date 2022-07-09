import React, { useRef, useState } from 'react';
import styles from './index.module.scss';
import GridLayout from 'react-grid-layout';
import DroppableContainer from '@/components/DragAndDrop/DroppableContainer';
import DragContainer from '@/components/DragAndDrop/DragContainer';
import { useSize } from 'ahooks';
import EventBus from '@/common/EventBus';

interface LayoutPanelProps {}

const LayoutPanel: React.FC<LayoutPanelProps> = () => {
  const ref = useRef(null);
  const layoutSize = useSize(ref);
  const [layouts, setLayouts] = useState<any>([
    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 }
  ]);

  EventBus.on('addComponent', (value) => {
    value && addComponent(value);
  });

  function addComponent(value: any) {
    const newItem = {
      i: value + new Date().getTime(),
      x: 0,
      y: Infinity, // puts it at the bottom
      w: 6,
      h: 6
    };
    setLayouts([...layouts, newItem]);
  }

  return (
    <div ref={ref} className={styles.layoutPanel}>
      <DroppableContainer
        className={styles.droppableContainer}
        droppableId={'layout'}
        type={'vertical'}
        direction="horizontal"
      >
        <DragContainer draggableId={'3'} index={1} isDragDisabled={true}>
          <GridLayout
            className="layout"
            layout={layouts}
            cols={24}
            rowHeight={10}
            width={layoutSize?.width || 950}
            isBounded={true}
          >
            {layouts?.map((item) => (
              <div key={item.i}>{item.i}</div>
            ))}
          </GridLayout>
        </DragContainer>
      </DroppableContainer>
    </div>
  );
};

export default LayoutPanel;
