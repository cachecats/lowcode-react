import { COMPONENTS_LIST } from '@/config/ComponentsConfig';
import { IComponentsType } from '@/types/componentsType';

export function findComponentsById(id: string): IComponentsType {
  return COMPONENTS_LIST.find((item) => item.id === id) || ({} as any);
}
