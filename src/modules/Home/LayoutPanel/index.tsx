import React, { useContext, useEffect, useRef } from 'react';
import styles from './index.module.scss';
import GridLayout from 'react-grid-layout';
import DroppableContainer from '@/components/DragAndDrop/DroppableContainer';
import DragContainer from '@/components/DragAndDrop/DragContainer';
import HomeContext from '@/context/HomeContext';
import { useSize } from 'ahooks';

interface LayoutPanelProps {}

const LayoutPanel: React.FC<LayoutPanelProps> = () => {
  const { droppedComponents } = useContext(HomeContext);
  const ref = useRef(null);
  const layoutSize = useSize(ref);

  useEffect(() => {
    console.log('LayoutPanel LayoutPanel', droppedComponents);
  }, [droppedComponents]);
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 }
  ];
  return (
    <div ref={ref} className={styles.layoutPanel}>
      <DroppableContainer
        droppableId={'layout'}
        type={'vertical'}
        direction="horizontal"
      >
        <DragContainer draggableId={'3'} index={1} isDragDisabled={true}>
          <GridLayout
            className="layout"
            layout={layout}
            cols={24}
            rowHeight={10}
            width={layoutSize?.width || 950}
            isBounded={true}
          >
            <div key="a">a</div>
            <div key="b">b</div>
            <div key="c">c</div>
          </GridLayout>
        </DragContainer>
      </DroppableContainer>
    </div>
  );
};

export default LayoutPanel;
