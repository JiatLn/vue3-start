import type { Pos, SuitId } from '@/store/modules/types';
import type { EAttrType, ScoreType } from '@/utils/types';

export interface IEquipFilterParams {
  page: number;
  size: number;
  pos: Pos | undefined;
  level: number | undefined;
  suitId: SuitId | undefined;
  quality: number | undefined;
  mainAttr: EAttrType | undefined;
  suitType: EAttrType | undefined;
  randomAttrs: EAttrType[];
}

export interface IEquipFilterObj {
  isFull: Boolean;
  score: number;
  scoreTypeList: ScoreType[];
}
