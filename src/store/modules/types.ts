import type { EAttrType } from '@/utils/types';

export interface IHeroEquip {
  attrs: any[];
  base_attr: IYhAttr;
  born: number;
  equip_id: number;
  garbage: boolean;
  id: string;
  level: number;
  lock: boolean;
  pos: Pos;
  quality: number;
  random_attr_rates: any[];
  random_attrs: IYhAttr[];
  single_attrs: IYhAttr[];
  suit_id: SuitId;
}

export interface IYhAttr {
  type: EAttrType;
  value: number;
}

export type Pos = 0 | 1 | 2 | 3 | 4 | 5;

export type SuitId = number;
