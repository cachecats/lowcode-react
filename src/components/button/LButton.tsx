import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';

interface LButtonProps extends ButtonProps {
  text: string;
}

const LButton: React.FC<LButtonProps> = ({ text, ...rest }) => {
  return <Button {...rest}>text</Button>;
};

export default LButton;
