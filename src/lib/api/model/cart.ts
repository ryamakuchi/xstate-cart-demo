import { Item } from './item';

export interface Cart {
  id: string;
  item: Item | null;
}
