import { ProFieldValueType } from '@ant-design/pro-components';

export type SettingType =
  | 'input'
  | 'inputNumber'
  | 'radio'
  | 'select'
  | 'array'
  | 'number'
  | 'group'
  | 'switch'
  | 'json';

export interface IOption {
  id?: string;
  label: string | number;
  value: any;
  valueType?: ProFieldValueType;
  required?: boolean;
  options?: IOption[];
}

export interface IMetaType {
  settings: ISetting[];
}

export interface ISetting {
  parentId: string;
  id: string;
  label: string;
  type: SettingType;
  tips?: string;
  // radio 的 optionType
  optionType?: 'default' | 'button';
  defaultValue: any;
  options?: IOption[];
  children?: ISetting[];
  // inputNumber 的最小值
  min?: number;
  // inputNumber 的最大值
  max?: number;
  // inputNumber 的加减按钮是否显示
  controls?: boolean;
  // inputNumber 的后置标签
  addonAfter?: string;
  // inputNumber 的前置标签
  addonBefore?: string;
}

export interface IArraySetter {
  id: string;
  label: string;
  type: SettingType;
}
