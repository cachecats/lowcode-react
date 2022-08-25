import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';
import { Button, Drawer, message } from 'antd';

interface CodeDrawerProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
  onOk: (value: any) => void;
  defaultLanguage?: string;
  defaultValue?: string;
}

const MonacoEditorDrawer: React.FC<CodeDrawerProps> = ({
  visible,
  setVisible,
  onOk,
  defaultLanguage = 'json',
  defaultValue = ''
}) => {
  const editorRef = useRef<any>(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function onSave() {
    const value = editorRef.current?.getValue();
    console.log({ value });
    if (defaultLanguage === 'json') {
      try {
        const parsedValue = JSON.parse(value);
        console.log({ parsedValue });
        onOk(value);
      } catch (e) {
        console.log('json parse error', e);
        message.error('json解析失败，请检查');
      }
    } else {
      onOk(value);
    }
    setVisible(false);
  }

  return (
    <Drawer
      width={600}
      title={'代码编辑'}
      visible={visible}
      onClose={() => setVisible(false)}
      destroyOnClose
      extra={
        <Button type={'primary'} onClick={onSave}>
          保存
        </Button>
      }
    >
      <Editor
        height="90vh"
        theme="vs-dark"
        defaultLanguage={defaultLanguage}
        defaultValue={defaultValue}
        onMount={handleEditorDidMount}
        options={{
          tabSize: 2
        }}
      />
    </Drawer>
  );
};

export default MonacoEditorDrawer;
