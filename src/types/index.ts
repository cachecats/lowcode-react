import { ProFieldValueType } from '@ant-design/pro-components';

export type SettingType = 'input' | 'radio' | 'select' | 'array' | 'number';

export interface IOption {
  id?: string;
  label: string | number;
  value: any;
  valueType?: ProFieldValueType;
}

export interface IMetaType {
  settings: ISetting[];
}

export interface ISetting {
  id: string;
  label: string;
  type: SettingType;
  // radio 的 optionType
  optionType?: 'default' | 'button';
  defaultValue: any;
  options?: IOption[];
}

export interface IArraySetter {
  id: string;
  label: string;
  type: SettingType;
}
