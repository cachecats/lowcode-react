import React from 'react';
import { renderSetting } from '@/modules/Design/SettingPanel/config';
import { Collapse } from 'antd';
const { Panel } = Collapse;

interface CollapseContainerProps {
  header: string;
}

const CollapseContainer: React.FC<CollapseContainerProps> = ({
  header,
  children
}) => {
  return (
    <Collapse defaultActiveKey={['1']}>
      <Panel header={header} key="1">
        {children}
      </Panel>
    </Collapse>
  );
};

export default CollapseContainer;
