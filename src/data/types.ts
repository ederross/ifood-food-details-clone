export interface IAdditionalsItem {
  title: string[];
  isHeader: boolean;
  quantity: number;
  required: boolean;
  type: IAdditionalsItemListTYPES;
}

export enum IAdditionalsItemListTYPES {
  RadioButton,
}
