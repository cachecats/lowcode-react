import { ProFieldValueType } from '@ant-design/pro-components';

export type SettingType =
  | 'input'
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
  // radio 的 optionType
  optionType?: 'default' | 'button';
  defaultValue: any;
  options?: IOption[];
  children?: ISetting[];
}

export interface IArraySetter {
  id: string;
  label: string;
  type: SettingType;
}
