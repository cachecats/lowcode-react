import React from 'react';
import { Button, Drawer, Space } from 'antd';

interface AddColumnDrawerProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

const AddColumnDrawer: React.FC<AddColumnDrawerProps> = ({
  visible,
  setVisible
}) => {
  function onClose() {
    setVisible(false);
  }
  return (
    <Drawer
      title="新增列"
      width={450}
      onClose={onClose}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
      extra={
        <Space>
          <Button onClick={onClose}>取消</Button>
          <Button onClick={onClose} type="primary">
            确定
          </Button>
        </Space>
      }
    >
      ahhaha
    </Drawer>
  );
};

export default AddColumnDrawer;
