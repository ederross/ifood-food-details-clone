export interface IAdditionalsItem {
  title: string;
  isHeader: boolean;
  quantity: number;
  isDescription: boolean;
  required: boolean;
  type: IAdditionalsItemListTYPES;
}

export enum IAdditionalsItemListTYPES {
  RadioButton,
}
