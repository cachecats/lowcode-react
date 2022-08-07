import React, { useMemo } from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';
import { useSelector } from 'react-redux';
import { selectSettings } from '@/common/redux/componentsSlice';

interface LButtonProps extends ButtonProps {
  id: string;
}

const LButton: React.FC<LButtonProps> = ({ id, ...rest }) => {
  const setting = useSelector(selectSettings);
  const { text, type, danger } = useMemo(() => {
    return setting[id] || {};
  }, [setting, id]);

  return (
    <Button type={type || 'primary'} danger={danger} {...rest}>
      {text || '按钮'}
    </Button>
  );
};

export default LButton;
