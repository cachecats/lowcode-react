import React, { useMemo, useRef, useState } from 'react';
import styles from './index.module.scss';
import GridLayout, { Layout } from 'react-grid-layout';
import { useSize } from 'ahooks';
import { findComponentsById, formatId } from '@/utils';
import { IComponentsType } from '@/types/componentsType';
import { renderComponents } from '@/modules/Design/LayoutPanel/config';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentEditComponent,
  updateCurrentEditComponent
} from '@/common/redux/componentsSlice';
import cn from 'classnames';

interface LayoutPanelProps {}

const LayoutPanel: React.FC<LayoutPanelProps> = () => {
  const ref = useRef(null);
  const layoutSize = useSize(ref);
  const dispatch = useDispatch();
  const [layouts, setLayouts] = useState<any>([]);
  const currentEditComponent = useSelector(selectCurrentEditComponent);

  const getLayouts = useMemo(() => {
    return layouts?.map((layout) => {
      return (
        <div
          className={cn([
            styles.itemWrapper,
            currentEditComponent === layout.i ? styles.active : ''
          ])}
          key={layout.i}
          onClick={() => {
            dispatch(updateCurrentEditComponent(layout.i));
          }}
        >
          {renderComponents(layout.i)}
        </div>
      );
    });
  }, [currentEditComponent, layouts]);

  function addComponent(components: IComponentsType) {
    const newItem = {
      // 加上时间戳可以避免同一个组件无法多次添加的问题
      i: formatId(components.id),
      x: 0,
      y: Infinity, // puts it at the bottom
      w: components.width,
      h: components.height,
      name: components.name
    };
    dispatch(updateCurrentEditComponent(newItem.i));
    setLayouts([...layouts, newItem]);
  }

  function onDrop(layout, layoutItem, _event) {
    console.log('onDrop', { layout, layoutItem, _event });
    // 从 _event 中获取拖拽进来的是哪个组依
    const id = _event.dataTransfer.getData('id');
    // 在组件列表中找到这个组件
    const components = findComponentsById(id);
    addComponent(components);
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
        {getLayouts}
      </GridLayout>
    </div>
  );
};

export default LayoutPanel;
