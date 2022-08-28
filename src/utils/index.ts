import { COMPONENTS_LIST } from '@/config/ComponentsConfig';
import { IComponentsType } from '@/types/componentsType';
import { IOption } from '@/types';

export const ID_DELIMITER = '###';

export function findComponentsById(id: string): IComponentsType {
  return COMPONENTS_LIST.find((item) => item.id === id) || ({} as any);
}

export function formatId(id: string | number) {
  return `${id}${ID_DELIMITER}${new Date().getTime()}`;
}

export function parseId(id: string) {
  return id?.split(ID_DELIMITER)?.[0] || '';
}
