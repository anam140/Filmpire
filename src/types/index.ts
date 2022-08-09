import { IconType } from 'react-icons';

export interface IMenu {
  title: string;
  items: IMenuItems[];
}

export interface IMenuItems {
  link: string;
  label: string;
  icon: IconType;
}
