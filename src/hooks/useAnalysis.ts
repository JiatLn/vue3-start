import { IHeroEquip } from '@/store/modules/types';
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

  const getMaxSpeed = () => {
    const maxSpeedList: IHeroEquip[] = [];
    let maxSpeedVal = 0;
    equipByPos.value.forEach((item, index) => {
      // 二号位
      if (index === 1) {
        item = item.filter((i) => i.base_attr.type === EAttrType.SPEED);
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

  return {
    equipByPos,
    getMaxSpeed,
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
