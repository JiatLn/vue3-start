import type { IHeroEquip, SuitId } from '@/store/modules/types';
import useHeroEquipStore from '@/store/modules/useHeroEquipStore';
import { EAttrType } from '@/utils/types';
import { onMounted, ref } from 'vue';

export const useAnalysis = () => {
  const equipByPos = ref<IHeroEquip[][]>([[], [], [], [], [], []]);

  const { heroEquips } = useHeroEquipStore();

  onMounted(() => {
    heroEquips.forEach((item) => {
      equipByPos.value[item.pos].push(item);
    });
  });

  const getMaxSpeed = (suitId?: SuitId) => {
    let maxSpeedList: IHeroEquip[] = [];
    let maxSpeedVal = 0;
    equipByPos.value.forEach((item, index) => {
      // 二号位
      if (index === 1) {
        item = item.filter((i) => i.base_attr.type === EAttrType.SPEED);
      }
      if (suitId) {
        item = item.filter((i) => i.suit_id === suitId);
      }
      let maxSpeed = 0;
      maxSpeedList[index] = item[0];
      item.forEach((i) => {
        let speedVal = getRandomVal(i);
        if (speedVal > maxSpeed) {
          maxSpeedList[index] = i;
          maxSpeed = speedVal;
        }
      });
      maxSpeedVal += getRandomVal(maxSpeedList[index]);
    });

    maxSpeedVal += maxSpeedList[1].base_attr.value;

    return { val: maxSpeedVal, list: maxSpeedList };
  };

  const getSuitMaxSpeed = (suitId: SuitId) => {
    let { val, list } = getMaxSpeed(suitId);
    let tmpList = [...list];
    const { list: maxList } = getMaxSpeed();
    let currMax = val;
    let resultList: IHeroEquip[] = [];
    // list 散件最快
    for (let i = 0; i < 5; i++) {
      for (let j = i + 1; j < 6; j++) {
        let tmpSpeed =
          val +
          getRandomVal(maxList[i]) +
          getRandomVal(maxList[j]) -
          getRandomVal(list[i]) -
          getRandomVal(list[j]);

        if (tmpSpeed >= currMax) {
          tmpList[i] = maxList[i];
          tmpList[j] = maxList[j];
          currMax = tmpSpeed;
          resultList = [...tmpList];
          tmpList = [...list];
        }
      }
    }
    return { val: currMax, list: resultList };
  };

  return {
    equipByPos,
    getMaxSpeed,
    getSuitMaxSpeed,
  };
};

/**
 * 获取御魂的某个副属性的值
 * @param equip
 * @param type
 * @returns number
 */
export const getRandomVal = (equip: IHeroEquip, type: EAttrType = EAttrType.SPEED) => {
  return equip.random_attrs.find((item) => item.type === type)?.value || 0;
};
