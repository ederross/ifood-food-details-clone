export interface IAdditionalsItem {
  id: number;
  title: string[];
  isHeader: boolean;
  quantity: number;
  required: boolean;
  type: IAdditionalsItemListTYPES;
}

export enum IAdditionalsItemListTYPES {
  RadioButton,
}
