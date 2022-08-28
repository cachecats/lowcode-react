import React, { useMemo, useState } from 'react';
import { Drawer, Form } from 'antd';
import { IOption } from '@/types';
import {
  BetaSchemaForm,
  ProForm,
  ProFormColumnsType
} from '@ant-design/pro-components';
import Editor from '@monaco-editor/react';

interface AddColumnDrawerProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
  options: IOption[];
  onFinish: (values: any) => Promise<any>;
  initialValues: any;
}

interface IEditorItem {
  id: string;
  value: string;
}

const AddColumnDrawer: React.FC<AddColumnDrawerProps> = ({
  visible,
  setVisible,
  options,
  onFinish,
  initialValues
}) => {
  const [jsonItems, setJsonItems] = useState<any[]>([]);
  const [editorValues, setEditorValues] = useState<IEditorItem[]>([]);
  const columns: ProFormColumnsType<any>[] = useMemo(() => {
    setJsonItems(options?.filter((item) => item.type === 'json'));
    return (
      options
        ?.filter((item) => item.type !== 'json')
        ?.map((option) => {
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

  function onEditorChange(value: any, id: any) {
    let isExist = false;
    let newList: IEditorItem[] = editorValues;
    newList = editorValues?.map((item) => {
      if (item.id === id) {
        item.value = value;
        isExist = true;
      }
      return item;
    });
    if (!isExist) {
      newList.push({
        id,
        value
      });
    }
    setEditorValues(newList);
  }

  async function onFormFinish(values: any) {
    const finalValues = values;
    editorValues?.forEach((item) => {
      finalValues[item.id] = item.value;
    });
    onFinish(finalValues);
  }

  return (
    <Drawer
      title="新增列"
      width={500}
      onClose={onClose}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
      destroyOnClose={true}
    >
      <ProForm
        onFinish={onFormFinish}
        initialValues={initialValues}
        layout={'horizontal'}
        labelCol={{ span: 6 }}
        submitter={{
          // 配置按钮的属性
          resetButtonProps: {
            style: {
              // 隐藏重置按钮
              display: 'none'
            }
          }
        }}
      >
        <BetaSchemaForm layoutType="Embed" columns={columns} />
        {jsonItems?.map((item) => (
          <Form.Item key={item.id} shouldUpdate name={item.id} label={item.label}>
            <Editor
              height="300px"
              theme="vs-dark"
              defaultLanguage={'javascript'}
              defaultValue={''}
              onChange={(value, ev) => onEditorChange(value, item.id)}
              value={editorValues.find((val) => val.id === item.id)?.value}
              options={{
                tabSize: 2
              }}
            />
          </Form.Item>
        ))}
      </ProForm>
    </Drawer>
  );
};

export default AddColumnDrawer;
