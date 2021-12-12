import { IYhAttr } from '@/store/modules/types';
import { ScoreType, EAttrType, AttrsDict } from './types';
import { roundWithDigit } from './math';

export const getAttrValue = (attrs: IYhAttr[], type: EAttrType): number => {
  return attrs.find((item) => item.type === type)?.value || 0;
};

export const getAttrValueWithFmt = (attrs: IYhAttr[], type: EAttrType, digit: number = 4) => {
  let value = getAttrValue(attrs, type);
  if (value === 0) return '-';
  if (
    [
      EAttrType.CRIT_RATE,
      EAttrType.CRIT_POWER,
      EAttrType.ATTACT_RATE,
      EAttrType.EFFECT_HIT,
      EAttrType.EFFECT_RESIST,
      EAttrType.HP_RATE,
      EAttrType.DEF_RATE,
    ].includes(type)
  ) {
    return roundWithDigit(value * 100, digit) + '%';
  }
  return roundWithDigit(value, digit);
};

export const calcEffectiveTimes = (attrs: IYhAttr[], type: EAttrType) => {
  let value = getAttrValue(attrs, type);
  if (type !== EAttrType.SPEED) {
    value = value * 100;
  }
  if (
    [EAttrType.SPEED, EAttrType.CRIT_RATE, EAttrType.HP_RATE, EAttrType.ATTACT_RATE].includes(type)
  ) {
    // 速度 暴击 生命 攻击
    return Math.ceil(value / 3);
  } else {
    return Math.ceil(value / 4);
  }
};

export const calcScoreWithType = (attrs: IYhAttr[], type: ScoreType) => {
  const goodAttrs = AttrsDict[type];
  let score = 0;
  goodAttrs.forEach((item: EAttrType) => {
    score += calcEffectiveTimes(attrs, item);
  });
  return score;
};
