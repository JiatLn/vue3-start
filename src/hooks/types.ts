import { EAttrType, ScoreType } from '@/utils/types';

export interface IEquipFilterParams {
  pos: number;
  suitId: number;
  page: number;
  size: number;
  quality: number;
  level: number;
  mainAttr: EAttrType | undefined;
}

export interface IEquipFilterObj {
  isFull: Boolean;
  score: number;
  scoreTypeList: ScoreType[];
}
