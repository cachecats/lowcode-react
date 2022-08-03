export interface IOption {
  label: string | number;
  value: any;
}

export interface IMetaType {
  settings: ISettings[];
}

export interface ISettings {
  label: string;
  type: string;
  defaultValue: string | boolean;
  options?: IOption[];
}
