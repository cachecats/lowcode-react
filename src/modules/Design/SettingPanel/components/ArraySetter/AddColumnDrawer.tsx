import React, { useMemo } from 'react';
import { Drawer } from 'antd';
import { IOption } from '@/types';
import { BetaSchemaForm, ProFormColumnsType } from '@ant-design/pro-components';

interface AddColumnDrawerProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
  options: IOption[];
  onFinish: (values: any) => Promise<any>;
  initialValues: any;
}

const AddColumnDrawer: React.FC<AddColumnDrawerProps> = ({
  visible,
  setVisible,
  options,
  onFinish,
  initialValues
}) => {
  const columns: ProFormColumnsType<any>[] = useMemo(() => {
    return (
      options?.map((option) => {
        return {
          title: option.label,
          key: option.id,
          dataIndex: option.id,
          valueType: option.valueType,
          width: 'md',
          formItemProps: {
            rules: [
              {
                required: option.required,
                message: '此项为必填项'
              }
            ]
          },
          fieldProps: {
            options: option.options
          }
        };
      }) || []
    );
  }, [options]);

  function onClose() {
    setVisible(false);
  }

  return (
    <Drawer
      title="新增列"
      width={400}
      onClose={onClose}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
      destroyOnClose={true}
    >
      <BetaSchemaForm
        layout={'horizontal'}
        rowProps={{
          wrap: true
        }}
        labelCol={{ span: 6 }}
        columns={columns}
        onFinish={onFinish}
        initialValues={initialValues}
        submitter={{
          // 配置按钮的属性
          resetButtonProps: {
            style: {
              // 隐藏重置按钮
              display: 'none'
            }
          }
        }}
      />
    </Drawer>
  );
};

export default AddColumnDrawer;
