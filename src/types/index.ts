export interface IOption {
  label: string | number;
  value: any;
}

export type SettingType = 'input' | 'radio' | 'select';

export interface IMetaType {
  settings: ISetting[];
}

export interface ISetting {
  id: string;
  label: string;
  type: SettingType;
  // radio 的 optionType
  optionType?: 'default' | 'button';
  defaultValue: string | boolean;
  options?: IOption[];
}
