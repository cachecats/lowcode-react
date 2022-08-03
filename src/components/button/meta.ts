import { transBasicList2Options } from '@/utils';
import { IMetaType } from '@/types';

const meta: IMetaType = {
  settings: [
    {
      label: '按钮文字',
      type: 'input',
      defaultValue: '按钮'
    },
    {
      label: '类型',
      type: 'radioButton',
      defaultValue: 'primary',
      options: transBasicList2Options([
        'default',
        'primary',
        'ghost',
        'dashed',
        'link',
        'text'
      ])
    },
    {
      label: '危险按钮',
      type: 'radioButton',
      defaultValue: true,
      options: [
        { label: '是', value: true },
        { label: '否', value: false }
      ]
    }
  ]
};

export default meta;
