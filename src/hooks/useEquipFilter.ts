import type { IHeroEquip } from '@/store/modules/types';
import useHeroEquipStore from '@/store/modules/useHeroEquipStore';
import { calcScoreWithType } from '@/utils/equip';
import { ref } from 'vue';
import type { IEquipFilterObj } from './types';

export const useEquipFilter = () => {
  // const
  const equipList = ref<IHeroEquip[]>([]);

  const refresh = (filterObj: IEquipFilterObj) => {
    const heroEquipStore = useHeroEquipStore();
    let heroEquips = [...heroEquipStore.heroEquips];
    if (filterObj.isFull) {
      heroEquips = heroEquips.filter((item) => item.level === 15);
    }
    if (filterObj.scoreTypeList?.length && filterObj.score) {
      filterObj.scoreTypeList.forEach((item) => {
        heroEquips = heroEquips.filter((i) => calcScoreWithType(i.attrs, item) === filterObj.score);
      });
    }
    equipList.value = heroEquips;
  };

  return {
    equipList,
    refresh,
  };
};
