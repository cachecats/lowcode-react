import React, { useRef, useState } from 'react';
import styles from './index.module.scss';
import GridLayout from 'react-grid-layout';
import DroppableContainer from '@/components/DragAndDrop/DroppableContainer';
import DragContainer from '@/components/DragAndDrop/DragContainer';
import { useSize } from 'ahooks';
import EventBus from '@/common/EventBus';
import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

interface LayoutPanelProps {}

const LayoutPanel: React.FC<LayoutPanelProps> = () => {
  const ref = useRef(null);
  const layoutSize = useSize(ref);
  const [layouts, setLayouts] = useState<any>([]);

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

  function onDrop(layout, layoutItem, _event) {
    console.log('onDrop', { layout, layoutItem, _event });
    console.log('data', _event.dataTransfer.getData('id'));
  }

  function onLayoutChange(layout: any) {
    console.log('onLayoutChange', { layout });
  }

  return (
    <div ref={ref} className={styles.layoutPanel}>
      <GridLayout
        style={{ height: '100%', width: '100%' }}
        className="layout"
        layout={layouts}
        cols={24}
        rowHeight={10}
        width={layoutSize?.width || 950}
        isBounded={true}
        onDrop={onDrop}
        isDroppable={true}
        onLayoutChange={onLayoutChange}
      >
        {layouts?.map((item) => (
          <div key={item.i}>{item.i}</div>
        ))}
      </GridLayout>
      {/*<ResponsiveReactGridLayout*/}
      {/*  className={styles.droppableContainer}*/}
      {/*  layouts={{ lg: layouts }}*/}
      {/*  // onBreakpointChange={this.onBreakpointChange}*/}
      {/*  onLayoutChange={onLayoutChange}*/}
      {/*  onDrop={onDrop}*/}
      {/*  // WidthProvider option*/}
      {/*  measureBeforeMount={false}*/}
      {/*  // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)*/}
      {/*  // and set `measureBeforeMount={true}`.*/}
      {/*  useCSSTransforms={true}*/}
      {/*  // compactType={this.state.compactType}*/}
      {/*  // preventCollision={!this.state.compactType}*/}
      {/*  isDroppable={true}*/}
      {/*>*/}
      {/*  {layouts?.map((item) => (*/}
      {/*    <div key={item.i}>{item.i}</div>*/}
      {/*  ))}*/}
      {/*</ResponsiveReactGridLayout>*/}
    </div>
  );
};

export default LayoutPanel;
