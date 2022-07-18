export interface IComponentsType {
  id: string;
  type: string;
  icon: string;
  name: string;
  // 组件宽度，一共24份。width=6,即宽度为 6/24，为总宽度的四分之一
  width: number;
  // 组件高度，每份10px。height=2,即高度为 2*10=20px
  height: number;
}
