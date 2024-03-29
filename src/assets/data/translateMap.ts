import { EAttrType } from '@/utils/types';

export const attrMap: {
  [key in EAttrType]: string;
} = {
  Attack: '攻击',
  AttackRate: '攻击加成',
  CritPower: '暴击伤害',
  CritRate: '暴击',
  Defense: '防御',
  DefenseRate: '防御加成',
  EffectHitRate: '效果命中',
  EffectResistRate: '效果抵抗',
  Hp: '生命',
  HpRate: '生命加成',
  Speed: '速度',
};
